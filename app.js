// إعدادات الربط الكاملة بمشروع Firebase: second-year-networks
const firebaseConfig = {
  apiKey: "AIzaSyBkZCo86Mv6k1temXCiu4tqZ5pT9enJDmk",
  authDomain: "second-year-networks.firebaseapp.com",
  projectId: "second-year-networks",
  storageBucket: "second-year-networks.firebasestorage.app",
  messagingSenderId: "178346960678",
  appId: "1:178346960678:web:3993fa9b3a7f5741a0c3e7"
};

// حساب الأدمن الوحيد المعتمد للدخول إلى لوحة التحكم
const ADMIN_EMAIL = "mohamedsameh1805@gmail.com";

let db = null;
let auth = null;
let isFirebaseReady = false;

try {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    isFirebaseReady = true;
  }
} catch (err) {
  console.warn("Firebase initialization notice:", err);
}

// المواد الدراسية الأساسية لشعبة الشبكات الكهربائية
const subjectsData = [
  { title: "شبكات النقل والتوزيع الكهربائية", desc: "دراسة خطوط النقل الهوائية والكابلات الأرضية وحسابات الهبوط في الجهد." },
  { title: "وقاية نظم القوى الكهربائية", desc: "أجهزة الحماية والمرحلات والقواطع الآلية لحماية الشبكات والمحولات." },
  { title: "محطات القوى الكهربائية", desc: "مكونات محطات التوليد والتحويل وأنظمة القضبان والتأريض." },
  { title: "الآلات الكهربائية المتقدمة", desc: "تشغيل واختبار المحولات والمحركات الحثية والتزامنية." },
  { title: "القياسات والاختبارات الكهربائية", desc: "أجهزة القياس الحديثة واختبارات العزل والمقاومة الأرضية." },
  { title: "إلكترونيات القوى والتحكم", desc: "دوائر التوحيد والعاكسات وتطبيقاتها في أنظمة القدرة." },
  { title: "تطبيقات الحاسب في الشبكات", desc: "استخدام البرامج الهندسية في تحليل ومحاكاة الشبكات الكهربائية." }
];

// بيانات محلية احتياطية عند الحاجة
let localStudents = JSON.parse(localStorage.getItem("quesna_students") || "[]");
let localAnnouncements = JSON.parse(localStorage.getItem("quesna_announcements") || "[]");
let localSupport = JSON.parse(localStorage.getItem("quesna_support") || "[]");

// التنقل بين أقسام المنصة
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".page-section").forEach((sec) => sec.classList.remove("active"));
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.section);
    if (target) target.classList.add("active");
  });
});

// عرض المواد الدراسية
function renderSubjects() {
  const grid = document.getElementById("subjectsGrid");
  if (!grid) return;
  grid.innerHTML = subjectsData
    .map(
      (sub) => `
      <div class="subject-card">
        <h3>${sub.title}</h3>
        <p>${sub.desc}</p>
      </div>
    `
    )
    .join("");
}

// عرض الإعلانات
function renderAnnouncements(list) {
  const box = document.getElementById("announcementsList");
  if (!box) return;
  if (!list.length) {
    box.innerHTML = `
      <div class="announcement-item">
        <h4>مرحباً بكم في منصة الفرقة الثانية — شبكات كهربائية</h4>
        <p>تابعوا هنا مواعيد المحاضرات والسكاشن والتنبيهات الخاصة بالشعبة أولاً بأول.</p>
      </div>
    `;
    return;
  }
  box.innerHTML = list
    .map(
      (item) => `
      <div class="announcement-item">
        <h4>${item.title}</h4>
        <p>${item.body}</p>
      </div>
    `
    )
    .join("");
}

// عرض قائمة الطلاب
function renderStudents(list, filterText = "") {
  const tbody = document.getElementById("studentsTableBody");
  const adminTbody = document.getElementById("adminStudentsTableBody");
  const query = filterText.trim().toLowerCase();

  const filtered = list.filter(
    (st) =>
      st.name.toLowerCase().includes(query) ||
      String(st.code).toLowerCase().includes(query) ||
      st.group.toLowerCase().includes(query)
  );

  if (tbody) {
    tbody.innerHTML = filtered.length
      ? filtered
          .map(
            (st, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${st.name}</td>
            <td>${st.code}</td>
            <td>${st.group}</td>
          </tr>
        `
          )
          .join("")
      : `<tr><td colspan="4" style="text-align:center;">لا توجد بيانات طلاب مسجلة حالياً.</td></tr>`;
  }

  if (adminTbody) {
    adminTbody.innerHTML = list.length
      ? list
          .map(
            (st, idx) => `
          <tr>
            <td>${st.name}</td>
            <td>${st.code}</td>
            <td>${st.group}</td>
            <td><button class="btn btn-danger" onclick="deleteStudent('${st.id || idx}', ${idx})">حذف</button></td>
          </tr>
        `
          )
          .join("")
      : `<tr><td colspan="4" style="text-align:center;">لا يوجد طلاب مسجلون.</td></tr>`;
  }
}

// عرض رسائل الدعم الفني للأدمن
function renderSupportMessages(list) {
  const container = document.getElementById("adminSupportList");
  if (!container) return;
  container.innerHTML = list.length
    ? list
        .map(
          (msg) => `
        <div class="support-item">
          <strong>${msg.name}</strong> ${msg.phone ? `— <span>${msg.phone}</span>` : ""}
          <p>${msg.message}</p>
        </div>
      `
        )
        .join("")
    : `<p class="muted-text">لا توجد رسائل دعم فني واردة حتى الآن.</p>`;
}

// تحميل البيانات من Firestore أو التخزين المحلي
async function loadAllData() {
  if (isFirebaseReady && db) {
    try {
      const annSnap = await db.collection("announcements").orderBy("createdAt", "desc").get();
      const anns = annSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      renderAnnouncements(anns);

      const stSnap = await db.collection("students").orderBy("name").get();
      const sts = stSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      renderStudents(sts);

      const supSnap = await db.collection("support_messages").orderBy("createdAt", "desc").get();
      const sups = supSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      renderSupportMessages(sups);
      return;
    } catch (e) {
      console.warn("Firestore read fallback to localStorage:", e);
    }
  }
  renderAnnouncements(localAnnouncements);
  renderStudents(localStudents);
  renderSupportMessages(localSupport);
}

// تسجيل طالب جديد
const studentForm = document.getElementById("studentRegisterForm");
if (studentForm) {
  studentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("newStudentName").value.trim();
    const code = document.getElementById("newStudentCode").value.trim();
    const group = document.getElementById("newStudentGroup").value.trim();
    if (!name || !code || !group) return;

    if (isFirebaseReady && db) {
      try {
        await db.collection("students").add({ name, code, group, createdAt: Date.now() });
        studentForm.reset();
        loadAllData();
        alert("تم تسجيل بيانات الطالب بنجاح.");
        return;
      } catch (err) {
        console.error(err);
      }
    }

    localStudents.push({ name, code, group });
    localStorage.setItem("quesna_students", JSON.stringify(localStudents));
    studentForm.reset();
    renderStudents(localStudents);
    alert("تم تسجيل بيانات الطالب بنجاح.");
  });
}

// البحث في قائمة الطلاب
const searchInput = document.getElementById("studentSearchInput");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    loadAllDataWithFilter(searchInput.value);
  });
}

async function loadAllDataWithFilter(filterText) {
  if (isFirebaseReady && db) {
    try {
      const stSnap = await db.collection("students").orderBy("name").get();
      const sts = stSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      renderStudents(sts, filterText);
      return;
    } catch (e) {}
  }
  renderStudents(localStudents, filterText);
}

// إرسال رسالة دعم فني
const supportForm = document.getElementById("supportForm");
if (supportForm) {
  supportForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("supportName").value.trim();
    const phone = document.getElementById("supportPhone").value.trim();
    const message = document.getElementById("supportMessage").value.trim();
    if (!name || !message) return;

    if (isFirebaseReady && db) {
      try {
        await db.collection("support_messages").add({ name, phone, message, createdAt: Date.now() });
        supportForm.reset();
        loadAllData();
        alert("تم إرسال رسالتك إلى الدعم الفني بنجاح.");
        return;
      } catch (err) {
        console.error(err);
      }
    }

    localSupport.unshift({ name, phone, message });
    localStorage.setItem("quesna_support", JSON.stringify(localSupport));
    supportForm.reset();
    renderSupportMessages(localSupport);
    alert("تم إرسال رسالتك إلى الدعم الفني بنجاح.");
  });
}

// نشر إعلان جديد من الأدمن
const announcementForm = document.getElementById("announcementForm");
if (announcementForm) {
  announcementForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!isAuthorizedAdmin()) {
      alert("غير مصرح لك بهذا الإجراء.");
      return;
    }
    const title = document.getElementById("announcementTitle").value.trim();
    const body = document.getElementById("announcementBody").value.trim();
    if (!title || !body) return;

    if (isFirebaseReady && db) {
      try {
        await db.collection("announcements").add({ title, body, createdAt: Date.now() });
        announcementForm.reset();
        loadAllData();
        alert("تم نشر الإعلان بنجاح.");
        return;
      } catch (err) {
        console.error(err);
      }
    }

    localAnnouncements.unshift({ title, body });
    localStorage.setItem("quesna_announcements", JSON.stringify(localAnnouncements));
    announcementForm.reset();
    renderAnnouncements(localAnnouncements);
    alert("تم نشر الإعلان بنجاح.");
  });
}

// حذف طالب من لوحة الأدمن
window.deleteStudent = async function (docId, localIdx) {
  if (!isAuthorizedAdmin()) {
    alert("غير مصرح لك بالحذف.");
    return;
  }
  if (!confirm("هل أنت متأكد من حذف بيانات هذا الطالب؟")) return;

  if (isFirebaseReady && db && docId && isNaN(Number(docId))) {
    try {
      await db.collection("students").doc(docId).delete();
      loadAllData();
      return;
    } catch (err) {
      console.error(err);
    }
  }

  localStudents.splice(localIdx, 1);
  localStorage.setItem("quesna_students", JSON.stringify(localStudents));
  renderStudents(localStudents);
};

// التحقق من أن المستخدم الحالي هو الأدمن المعتمد فقط
function isAuthorizedAdmin() {
  if (!auth || !auth.currentUser || !auth.currentUser.email) return false;
  return auth.currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

function updateAdminUI(user) {
  const loginBox = document.getElementById("adminLoginBox");
  const adminPanel = document.getElementById("adminPanel");
  const emailLabel = document.getElementById("loggedAdminEmail");

  if (user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    if (loginBox) loginBox.style.display = "none";
    if (adminPanel) adminPanel.style.display = "block";
    if (emailLabel) emailLabel.textContent = `الحساب النشط: ${user.email}`;
  } else {
    if (loginBox) loginBox.style.display = "block";
    if (adminPanel) adminPanel.style.display = "none";
    if (emailLabel) emailLabel.textContent = "";
  }
}

// تسجيل دخول الأدمن عبر Firebase Authentication
const adminLoginForm = document.getElementById("adminLoginForm");
if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("adminEmailInput").value.trim();
    const password = document.getElementById("adminPassInput").value;

    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      alert("غير مسموح بالدخول: هذا البريد الإلكتروني ليس حساب الأدمن المعتمد.");
      return;
    }

    if (!auth) {
      alert("تعذر تهيئة خدمة المصادقة في Firebase.");
      return;
    }

    try {
      const credential = await auth.signInWithEmailAndPassword(email, password);
      if (credential.user && credential.user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        updateAdminUI(credential.user);
        adminLoginForm.reset();
        loadAllData();
        alert("تم تسجيل دخول الأدمن بنجاح.");
      } else {
        await auth.signOut();
        alert("غير مصرح لك بدخول لوحة الأدمن.");
      }
    } catch (error) {
      alert("خطأ في تسجيل الدخول: تأكد من صحة كلمة المرور وتفعيل الحساب في Firebase Authentication.");
    }
  });
}

// تسجيل خروج الأدمن
const logoutBtn = document.getElementById("adminLogoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    if (auth) {
      await auth.signOut();
    }
    updateAdminUI(null);
  });
}

if (auth) {
  auth.onAuthStateChanged((user) => {
    if (user && user.email && user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      auth.signOut();
      updateAdminUI(null);
    } else {
      updateAdminUI(user);
    }
  });
}

// تشغيل العرض الأولي عند تحميل الصفحة
renderSubjects();
loadAllData();
