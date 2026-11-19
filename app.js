// إعدادات الربط الكاملة بمشروع Firebase: second-year-networks
const firebaseConfig = {
  apiKey: "AIzaSyBkZCo86Mv6k1temXCiu4tqZ5pT9enJDmk",
  authDomain: "second-year-networks.firebaseapp.com",
  projectId: "second-year-networks",
  storageBucket: "second-year-networks.firebasestorage.app",
  messagingSenderId: "178346960678",
  appId: "1:178346960678:web:3993fa9b3a7f5741a0c3e7"
};

// حساب الأدمن الوحيد المعتمد للدخول إلى لوحة التحكم والاطلاع على كشف الطلاب وبياناتهم
const ADMIN_EMAIL = "mohamedsameh1805@gmail.com";

// كشف أسماء طلاب الفرقة الثانية — شبكات كهربائية (286 طالباً) مرتب أبجدياً
const officialStudentsRoster = [
  {
    "seq": 1,
    "name": "ابراهیم احمد محمود فتح الله حسن",
    "orig": "204"
  },
  {
    "seq": 2,
    "name": "ابراهيم صابر عبد الصادق أحمد بدر",
    "orig": "188"
  },
  {
    "seq": 3,
    "name": "ابراهيم محمد ابراهيم عياد",
    "orig": "1"
  },
  {
    "seq": 4,
    "name": "احمد السيد زايد ابو السعود زايد",
    "orig": "205"
  },
  {
    "seq": 5,
    "name": "احمد حسن حمدی محمود محمد",
    "orig": "206"
  },
  {
    "seq": 6,
    "name": "احمد حمدى احمد رمضان محمد",
    "orig": "2"
  },
  {
    "seq": 7,
    "name": "احمد خيرى كمال عبد المنعم البوهي",
    "orig": "3"
  },
  {
    "seq": 8,
    "name": "احمد رضا عباس شعبان ابراهيم",
    "orig": "4"
  },
  {
    "seq": 9,
    "name": "احمد رضا فتحى عفيفي خليل",
    "orig": "5"
  },
  {
    "seq": 10,
    "name": "احمد رؤوف محمود سحاعی",
    "orig": "6"
  },
  {
    "seq": 11,
    "name": "احمد سلیمان حلمى عماره",
    "orig": "7"
  },
  {
    "seq": 12,
    "name": "احمد سمير فتحى عبد المجيد رضوان",
    "orig": "207"
  },
  {
    "seq": 13,
    "name": "احمد شريف محمد اسماعیل شاهین",
    "orig": "8"
  },
  {
    "seq": 14,
    "name": "احمد صبحي ابراهيم ابواحمد",
    "orig": "9"
  },
  {
    "seq": 15,
    "name": "احمد عبد الرحمن احمد يوسف",
    "orig": "208"
  },
  {
    "seq": 16,
    "name": "احمد عبد المنعم محمد عبد القوى حباره",
    "orig": "10"
  },
  {
    "seq": 17,
    "name": "احمد عماد طه بلتاجي محمد",
    "orig": "11"
  },
  {
    "seq": 18,
    "name": "احمد عماد الدين مبروك عبد القادر مبروك",
    "orig": "12"
  },
  {
    "seq": 19,
    "name": "احمد محمد احمد محمد سعد",
    "orig": "13"
  },
  {
    "seq": 20,
    "name": "احمد محمد عويس احمد",
    "orig": "209"
  },
  {
    "seq": 21,
    "name": "احمد محمود عبد المولى عبد السلام علي",
    "orig": "210"
  },
  {
    "seq": 22,
    "name": "أحمد مصطفى محروس حبو",
    "orig": "189"
  },
  {
    "seq": 23,
    "name": "احمد ناصر محمد عبدالدايم",
    "orig": "14"
  },
  {
    "seq": 24,
    "name": "احمد هانی شراکی منصور الغرباوي",
    "orig": "15"
  },
  {
    "seq": 25,
    "name": "احمد هشام محمد رمضان امنه",
    "orig": "16"
  },
  {
    "seq": 26,
    "name": "احمد ياسر عبدالروف حسين عبد الفتاح",
    "orig": "211"
  },
  {
    "seq": 27,
    "name": "احمد يوسف محمد عبد القادر ادريس",
    "orig": "212"
  },
  {
    "seq": 28,
    "name": "ادهم عمر الطنطاوي حسن الطنطاوي",
    "orig": "190"
  },
  {
    "seq": 29,
    "name": "اسامة السان معوض السطوحي سليم",
    "orig": "17"
  },
  {
    "seq": 30,
    "name": "اسامه فايز محمد السيد عامر",
    "orig": "18"
  },
  {
    "seq": 31,
    "name": "اسر احمد حامد محمود",
    "orig": "213"
  },
  {
    "seq": 32,
    "name": "اسراء ناصر فوزى عبد القادر شلبي",
    "orig": "19"
  },
  {
    "seq": 33,
    "name": "اسلام حسین کمال عبدالستار مليجي",
    "orig": "20"
  },
  {
    "seq": 34,
    "name": "اسلام خميس فرج خير الله محمود",
    "orig": "21"
  },
  {
    "seq": 35,
    "name": "اسلام عبد الرزاق عبد السميع ناجي محمود",
    "orig": "214"
  },
  {
    "seq": 36,
    "name": "اسماء محمد عبد الفتاح عبد العزيز عوده",
    "orig": "215"
  },
  {
    "seq": 37,
    "name": "اشرقت محمد عبد العليم محمد ابو العينين",
    "orig": "216"
  },
  {
    "seq": 38,
    "name": "اشرف عبد الصادق اشرف فرماوی",
    "orig": "22"
  },
  {
    "seq": 39,
    "name": "الاء رمضان فايد حسن زعتر",
    "orig": "217"
  },
  {
    "seq": 40,
    "name": "امل احمد عبد الرحمن شحاتة عبد الرحمن",
    "orig": "23"
  },
  {
    "seq": 41,
    "name": "امنيه خالد عبد المنعم حلمى البدوى",
    "orig": "24"
  },
  {
    "seq": 42,
    "name": "امير إبراهيم عبد الستار محمد رزق الخفاجي",
    "orig": "191"
  },
  {
    "seq": 43,
    "name": "امیر جمال احمد عكاشه",
    "orig": "25"
  },
  {
    "seq": 44,
    "name": "امیره احمد محمود احمد يحيى",
    "orig": "26"
  },
  {
    "seq": 45,
    "name": "اميره محمد على سليم مسلم على",
    "orig": "218"
  },
  {
    "seq": 46,
    "name": "امیره محمد موسى العزاني",
    "orig": "27"
  },
  {
    "seq": 47,
    "name": "امیره محمود عبدالله عبدالله عياد",
    "orig": "219"
  },
  {
    "seq": 48,
    "name": "ایمان محمد سعيد احمد ابوالنجا",
    "orig": "28"
  },
  {
    "seq": 49,
    "name": "ایمان مشحوت ابراهيم خميس سليمان",
    "orig": "29"
  },
  {
    "seq": 50,
    "name": "ايه السيد حلمی محمد بسیونی",
    "orig": "30"
  },
  {
    "seq": 51,
    "name": "ايه شعبان احمد محروس احمد",
    "orig": "220"
  },
  {
    "seq": 52,
    "name": "ايه طارق محمد حسین حسین",
    "orig": "31"
  },
  {
    "seq": 53,
    "name": "بدوى محمد ابراهيم بدوى خضر",
    "orig": "32"
  },
  {
    "seq": 54,
    "name": "بسام ایمن سامی رشاد محمود",
    "orig": "33"
  },
  {
    "seq": 55,
    "name": "تغريد محمد ابراهيم محمد خزیمه",
    "orig": "34"
  },
  {
    "seq": 56,
    "name": "جنات عيد محمد محسب الورداني",
    "orig": "35"
  },
  {
    "seq": 57,
    "name": "جنه ربيع سعيد عبده هویدی",
    "orig": "36"
  },
  {
    "seq": 58,
    "name": "چنی ولید سامى عبد العاطي كابوه",
    "orig": "221"
  },
  {
    "seq": 59,
    "name": "جوده السيد السيد الشبيني",
    "orig": "37"
  },
  {
    "seq": 60,
    "name": "حاتم علي علي خلف الله",
    "orig": "201"
  },
  {
    "seq": 61,
    "name": "حازم جمعة عبد المحسن عبد الحميد العجرودي",
    "orig": "38"
  },
  {
    "seq": 62,
    "name": "حبيبه باسم صلاح بيومى الجزار",
    "orig": "39"
  },
  {
    "seq": 63,
    "name": "حبيبه حامد فهمى عبد الله أحمد",
    "orig": "40"
  },
  {
    "seq": 64,
    "name": "حبيبه حسانين السيد صادق عبد الله",
    "orig": "222"
  },
  {
    "seq": 65,
    "name": "حبيبه خالد عبد الجيد عبد الحميد ابو الحسن",
    "orig": "41"
  },
  {
    "seq": 66,
    "name": "حبيبه عصام محمد كمال مصطفى يوسف",
    "orig": "223"
  },
  {
    "seq": 67,
    "name": "حبيبه محمد عبد الجابر عبد الحليم ابراهيم",
    "orig": "42"
  },
  {
    "seq": 68,
    "name": "حبيبه محمد عبد السلام السيد",
    "orig": "43"
  },
  {
    "seq": 69,
    "name": "حبيبه يوسف عبد العظيم على عامر",
    "orig": "44"
  },
  {
    "seq": 70,
    "name": "حسام رمضان اسبيتان حسین",
    "orig": "192"
  },
  {
    "seq": 71,
    "name": "حسنی یاسر حسنى عبد المجيد على",
    "orig": "45"
  },
  {
    "seq": 72,
    "name": "حسين رفعت يوسف عبد المنعم ابوطالب",
    "orig": "46"
  },
  {
    "seq": 73,
    "name": "حمديه ابراهيم السيد ابراهيم السيد",
    "orig": "47"
  },
  {
    "seq": 74,
    "name": "حمزه محمد ناجي محمد عبد الحليم",
    "orig": "224"
  },
  {
    "seq": 75,
    "name": "حنين محمود رشاد محمد علی",
    "orig": "48"
  },
  {
    "seq": 76,
    "name": "حنين هاني سليم عبد الحليم سليم",
    "orig": "225"
  },
  {
    "seq": 77,
    "name": "حوريه السيد محمود صابر حسانين",
    "orig": "49"
  },
  {
    "seq": 78,
    "name": "خاطر على نبيه محمد العبد",
    "orig": "50"
  },
  {
    "seq": 79,
    "name": "دسوقی محمد دسوقي شبل مصطفى",
    "orig": "51"
  },
  {
    "seq": 80,
    "name": "دنيا ممدوح سالم على مزيد",
    "orig": "52"
  },
  {
    "seq": 81,
    "name": "رحاب مسعد عبد القادر عمار",
    "orig": "53"
  },
  {
    "seq": 82,
    "name": "رحمه عادل شكرى محمد عفيفي",
    "orig": "54"
  },
  {
    "seq": 83,
    "name": "رحمه محمد محمد محمد الطور",
    "orig": "55"
  },
  {
    "seq": 84,
    "name": "رضا ايمن عبد العزيز ابراهيم عبد الشافي",
    "orig": "226"
  },
  {
    "seq": 85,
    "name": "رضا محمد ابراهيم ابو المجد القصاص",
    "orig": "56"
  },
  {
    "seq": 86,
    "name": "رنا محمد فريد عيد",
    "orig": "57"
  },
  {
    "seq": 87,
    "name": "روان ملیجی محمود ملیجی ناصف",
    "orig": "58"
  },
  {
    "seq": 88,
    "name": "ريم ياسر جوده شفيق محمد",
    "orig": "59"
  },
  {
    "seq": 89,
    "name": "ريهام مجدى محمد ابراهيم ايوب",
    "orig": "60"
  },
  {
    "seq": 90,
    "name": "زياد رمضان عبدالوهاب الخضراوي",
    "orig": "227"
  },
  {
    "seq": 91,
    "name": "زياد نزيه عبد القادر عبد الرحمن سويلم",
    "orig": "61"
  },
  {
    "seq": 92,
    "name": "زينب احمد ابراهیم درویش ابراهیم",
    "orig": "193"
  },
  {
    "seq": 93,
    "name": "زينب حسن عبد الغني فرحات",
    "orig": "228"
  },
  {
    "seq": 94,
    "name": "ساره على ابونوح عبد الواحد الرغ",
    "orig": "62"
  },
  {
    "seq": 95,
    "name": "سامي وليد سامي البربري",
    "orig": "229"
  },
  {
    "seq": 96,
    "name": "سعيد ايهاب سعيد المسيني",
    "orig": "230"
  },
  {
    "seq": 97,
    "name": "سعيد محمد سعید شعبان سليمان",
    "orig": "63"
  },
  {
    "seq": 98,
    "name": "سلمى حمدى احمد عبد الحليم الشرقاوي",
    "orig": "64"
  },
  {
    "seq": 99,
    "name": "سلمى محمد صابر السيد الكيناني",
    "orig": "65"
  },
  {
    "seq": 100,
    "name": "سمير مجدى عبد السلام خليل عقل",
    "orig": "231"
  },
  {
    "seq": 101,
    "name": "سهير محمد عبد العاطى محمد سعد جرزة",
    "orig": "232"
  },
  {
    "seq": 102,
    "name": "سیف احمد رسمی حنفی محمد حسن",
    "orig": "66"
  },
  {
    "seq": 103,
    "name": "شروق ابراهيم محمد فهمى الرفيق",
    "orig": "67"
  },
  {
    "seq": 104,
    "name": "شروق هلال عبد السلام حسانين ابو سعد",
    "orig": "68"
  },
  {
    "seq": 105,
    "name": "شریف محمد صالح شريف عبد الدايم",
    "orig": "233"
  },
  {
    "seq": 106,
    "name": "شعبان محمد شعبان احمد شاويش",
    "orig": "69"
  },
  {
    "seq": 107,
    "name": "شمس عبد الظاهر سعيد الاخنالي",
    "orig": "70"
  },
  {
    "seq": 108,
    "name": "شهد جميل يوسف محمد حسونه",
    "orig": "71"
  },
  {
    "seq": 109,
    "name": "شهد حامد محمد محمود علی زهران",
    "orig": "72"
  },
  {
    "seq": 110,
    "name": "شهد سمير عطيه محمد مرسی",
    "orig": "234"
  },
  {
    "seq": 111,
    "name": "شهد عبد العاطى على محمد فرماوی",
    "orig": "73"
  },
  {
    "seq": 112,
    "name": "صفا سلامه عبد الرحمن محمد عمران",
    "orig": "74"
  },
  {
    "seq": 113,
    "name": "صفا عبد العزيز محمد احمد",
    "orig": "75"
  },
  {
    "seq": 114,
    "name": "صلاح علي صلاح محمد علي فرج",
    "orig": "235"
  },
  {
    "seq": 115,
    "name": "عبد التواب تامر عبد التواب عبد الحميد عبد التواب",
    "orig": "236"
  },
  {
    "seq": 116,
    "name": "عبد الحكيم هلال عبد الحكيم محمد العجوزة",
    "orig": "76"
  },
  {
    "seq": 117,
    "name": "عبد الحي احمد محمد احمد البسيوني",
    "orig": "286"
  },
  {
    "seq": 118,
    "name": "عبد الرحمن ابراهيم عبد الله ابراهيم الشيخ",
    "orig": "237"
  },
  {
    "seq": 119,
    "name": "عبد الرحمن اسماعيل ابراهيم فخر الدين ابراهيم",
    "orig": "238"
  },
  {
    "seq": 120,
    "name": "عبد الرحمن بدر عبد الحي ابو زيد",
    "orig": "77"
  },
  {
    "seq": 121,
    "name": "عبد الرحمن ثروت جابر عبد الحليم فرج",
    "orig": "78"
  },
  {
    "seq": 122,
    "name": "عبد الرحمن عبد القادر عبد الستار سعيد الحديدي",
    "orig": "239"
  },
  {
    "seq": 123,
    "name": "عبد الرحمن ياسر عبد الرحمن على مسعود",
    "orig": "79"
  },
  {
    "seq": 124,
    "name": "عبد الرؤوف عبد الحميد عبد الرؤوف خضير",
    "orig": "80"
  },
  {
    "seq": 125,
    "name": "عبد القادر عيد عبد القادر عبد القادر",
    "orig": "240"
  },
  {
    "seq": 126,
    "name": "عبد الله ايمن صابر كشك",
    "orig": "81"
  },
  {
    "seq": 127,
    "name": "عبد الله كرم جابر طه شعبان",
    "orig": "241"
  },
  {
    "seq": 128,
    "name": "عبدالله محمد محمد حسن سلطان",
    "orig": "82"
  },
  {
    "seq": 129,
    "name": "عبد المحسن محمد عبد المحسن عبد الغنى موسى",
    "orig": "83"
  },
  {
    "seq": 130,
    "name": "عبد المنعم هانى عبد المنعم عبد المجيد عبد العزيز",
    "orig": "84"
  },
  {
    "seq": 131,
    "name": "عبير كامل سليمان السعداوى سليمان",
    "orig": "85"
  },
  {
    "seq": 132,
    "name": "عزه بیومی عبدالهادی بیومی عبدالهادی",
    "orig": "86"
  },
  {
    "seq": 133,
    "name": "عصمت عبد الله امام عبد المجيد الاودن",
    "orig": "87"
  },
  {
    "seq": 134,
    "name": "على محمد على محمود على العبد",
    "orig": "88"
  },
  {
    "seq": 135,
    "name": "عماد عبد الخالق عماد محمد عبد الخالق",
    "orig": "242"
  },
  {
    "seq": 136,
    "name": "عماد محمد شعبان على عبد المحسن",
    "orig": "243"
  },
  {
    "seq": 137,
    "name": "عمار ايوب عيد محمد عبد الجواد",
    "orig": "244"
  },
  {
    "seq": 138,
    "name": "عمار شكرى عبد المعبود امین سعيد",
    "orig": "245"
  },
  {
    "seq": 139,
    "name": "عمار عبد النبي الملوم سالم موسى",
    "orig": "246"
  },
  {
    "seq": 140,
    "name": "عمار ياسر عبد الله الوصال العزاوي",
    "orig": "187"
  },
  {
    "seq": 141,
    "name": "عمر عبد المنعم مبروك عبد الرسول القاضي",
    "orig": "89"
  },
  {
    "seq": 142,
    "name": "عمر مشرف عبد السلام محمد مشرف",
    "orig": "90"
  },
  {
    "seq": 143,
    "name": "عمرو احمد محمد جبريل",
    "orig": "91"
  },
  {
    "seq": 144,
    "name": "عمرو محمد سعد زكى المغربي",
    "orig": "247"
  },
  {
    "seq": 145,
    "name": "عيسى صبحى عيسى حسانين على",
    "orig": "92"
  },
  {
    "seq": 146,
    "name": "فاطمه السيد عبد العظيم السيد طلبه",
    "orig": "93"
  },
  {
    "seq": 147,
    "name": "فاطمه طارق عبد الفتاح عبد الغنى ابراهيم",
    "orig": "94"
  },
  {
    "seq": 148,
    "name": "فاطمه عصام محمد عبد المنعم الجتمة",
    "orig": "95"
  },
  {
    "seq": 149,
    "name": "فاطمه فتحى مسعد فتحي الصباحي",
    "orig": "96"
  },
  {
    "seq": 150,
    "name": "فتحى ابراهيم فتحى ابراهيم عبد الخالق",
    "orig": "248"
  },
  {
    "seq": 151,
    "name": "فتحى باسم فتحى مصطفى علام",
    "orig": "97"
  },
  {
    "seq": 152,
    "name": "فتحى محمد فتحى الدسوقى متولى",
    "orig": "98"
  },
  {
    "seq": 153,
    "name": "فرحه عيد السيد عيد السيد",
    "orig": "99"
  },
  {
    "seq": 154,
    "name": "فوزى جمال سعد سید احمد",
    "orig": "100"
  },
  {
    "seq": 155,
    "name": "كريم حجاج عبد النبي حجاج الجمسي",
    "orig": "101"
  },
  {
    "seq": 156,
    "name": "كريم صابر عبد الصادق الشرقاوي",
    "orig": "102"
  },
  {
    "seq": 157,
    "name": "كريم محمد رضا مسلم محمد",
    "orig": "103"
  },
  {
    "seq": 158,
    "name": "كريم ناصر على سالم احمد",
    "orig": "104"
  },
  {
    "seq": 159,
    "name": "محمد ابراهيم محمد ياسين",
    "orig": "105"
  },
  {
    "seq": 160,
    "name": "محمد ابراهيم ناصف عيسى عبد العزيز",
    "orig": "249"
  },
  {
    "seq": 161,
    "name": "محمد احمد السيد ابراهيم الحليمي",
    "orig": "106"
  },
  {
    "seq": 162,
    "name": "محمد احمد محمد محمد ابو العنين",
    "orig": "107"
  },
  {
    "seq": 163,
    "name": "محمد احمد محمود عبد الرحمن البوهي",
    "orig": "108"
  },
  {
    "seq": 164,
    "name": "محمد اسامه عبد العظيم طه عيسى",
    "orig": "109"
  },
  {
    "seq": 165,
    "name": "محمد اشرف محمد عبد الباسط عبد الغنى",
    "orig": "250"
  },
  {
    "seq": 166,
    "name": "محمد السيد حسنى زلط",
    "orig": "110"
  },
  {
    "seq": 167,
    "name": "محمد السيد سعيد محمد قوقه",
    "orig": "111"
  },
  {
    "seq": 168,
    "name": "محمد السيد عبد النبي رحيم عفیفی",
    "orig": "112"
  },
  {
    "seq": 169,
    "name": "محمد امین محمد امین نویر",
    "orig": "113"
  },
  {
    "seq": 170,
    "name": "محمد ايهاب جمال السيد البلكيمي",
    "orig": "194"
  },
  {
    "seq": 171,
    "name": "محمد جمال ابو المكارم عزب عمرو",
    "orig": "114"
  },
  {
    "seq": 172,
    "name": "محمد جمال عبد الحميد عبد العزيز على",
    "orig": "115"
  },
  {
    "seq": 173,
    "name": "محمد حاتم يحيى عبد الله يسن",
    "orig": "116"
  },
  {
    "seq": 174,
    "name": "محمد حسن عبد الرازق عبد الحكيم",
    "orig": "117"
  },
  {
    "seq": 175,
    "name": "محمد حماده عبد الرؤوف عبيد ابو المنجي",
    "orig": "118"
  },
  {
    "seq": 176,
    "name": "محمد حماده محمود عبده الشريف ابراهيم",
    "orig": "119"
  },
  {
    "seq": 177,
    "name": "محمد حمدى محمد عليوه",
    "orig": "120"
  },
  {
    "seq": 178,
    "name": "محمد خالد احمد سعد بدوى",
    "orig": "121"
  },
  {
    "seq": 179,
    "name": "محمد راغب سالم عوض مستور",
    "orig": "251"
  },
  {
    "seq": 180,
    "name": "محمد رضا بيومى ابراهيم الغزولي",
    "orig": "122"
  },
  {
    "seq": 181,
    "name": "محمد رضا عبد الرشيد عامر",
    "orig": "123"
  },
  {
    "seq": 182,
    "name": "محمد رضا محمد عبد العزيز راضي",
    "orig": "124"
  },
  {
    "seq": 183,
    "name": "محمد رمضان شعبان ابو السعود الدمنهوري",
    "orig": "125"
  },
  {
    "seq": 184,
    "name": "محمد رمضان على السيد ابوجندي",
    "orig": "126"
  },
  {
    "seq": 185,
    "name": "محمد زكى عبد المولى الصادق فرج",
    "orig": "252"
  },
  {
    "seq": 186,
    "name": "محمد سامح محمد عبد الحليم غنيم",
    "orig": "253"
  },
  {
    "seq": 187,
    "name": "محمد سامی بدوى محمد خير الله",
    "orig": "127"
  },
  {
    "seq": 188,
    "name": "محمد سعيد حمدى محمد عطيه",
    "orig": "254"
  },
  {
    "seq": 189,
    "name": "محمد سعيد محمد حسنين",
    "orig": "255"
  },
  {
    "seq": 190,
    "name": "محمد سعيد محمود عبد العزيز حسين",
    "orig": "128"
  },
  {
    "seq": 191,
    "name": "محمد سلامة محمد عبد الدايم عبد الفتاح",
    "orig": "129"
  },
  {
    "seq": 192,
    "name": "محمد سید احمد كامل خبيري",
    "orig": "195"
  },
  {
    "seq": 193,
    "name": "محمد شعبان محمود عز الدين احمد",
    "orig": "130"
  },
  {
    "seq": 194,
    "name": "محمد طارق محمد احمد حماد",
    "orig": "256"
  },
  {
    "seq": 195,
    "name": "محمد طلعت محمد السيد علي",
    "orig": "196"
  },
  {
    "seq": 196,
    "name": "محمد طه عبد الموجود عبد الحليم",
    "orig": "131"
  },
  {
    "seq": 197,
    "name": "محمد عادل اسلیم سالم محمد",
    "orig": "257"
  },
  {
    "seq": 198,
    "name": "محمد عادل سعید احمد خضر",
    "orig": "258"
  },
  {
    "seq": 199,
    "name": "محمد عادل على المهدى",
    "orig": "259"
  },
  {
    "seq": 200,
    "name": "محمد عاطف فتوح على حشيش",
    "orig": "132"
  },
  {
    "seq": 201,
    "name": "محمد عبد العزيز محمد حربي",
    "orig": "133"
  },
  {
    "seq": 202,
    "name": "محمد عبدالله حمدان اسماعيل النحاس",
    "orig": "134"
  },
  {
    "seq": 203,
    "name": "محمد عبد النبي عبد المرضى حسن سليم",
    "orig": "135"
  },
  {
    "seq": 204,
    "name": "محمد على السيد حامد الملط",
    "orig": "260"
  },
  {
    "seq": 205,
    "name": "محمد علي العليمي محمد علي",
    "orig": "136"
  },
  {
    "seq": 206,
    "name": "محمد علي احمد محمد خميس",
    "orig": "202"
  },
  {
    "seq": 207,
    "name": "محمد عمرو انسان ممدوح",
    "orig": "137"
  },
  {
    "seq": 208,
    "name": "محمد عمرو محمد عبد الخالق إبراهيم",
    "orig": "261"
  },
  {
    "seq": 209,
    "name": "محمد فضلول أحمد فضلول سالم",
    "orig": "262"
  },
  {
    "seq": 210,
    "name": "محمد فهمى فتحى فهمى منصور",
    "orig": "263"
  },
  {
    "seq": 211,
    "name": "محمد فوزى صبحي حامد الاشقر",
    "orig": "264"
  },
  {
    "seq": 212,
    "name": "محمد لطفى محمد السيد الخولي",
    "orig": "138"
  },
  {
    "seq": 213,
    "name": "محمد مجدى ابراهيم أبو عزيز",
    "orig": "265"
  },
  {
    "seq": 214,
    "name": "محمد مجدى محمد عبد الغفار لاشين",
    "orig": "139"
  },
  {
    "seq": 215,
    "name": "محمد مختار رمضان مجاهد يوسف",
    "orig": "140"
  },
  {
    "seq": 216,
    "name": "محمد مسعد محمد السيد معارك",
    "orig": "141"
  },
  {
    "seq": 217,
    "name": "محمد مصطفى السيد محمود ضيف الله",
    "orig": "198"
  },
  {
    "seq": 218,
    "name": "محمد محمود السيد محمد بندق",
    "orig": "266"
  },
  {
    "seq": 219,
    "name": "محمد محمود شحات احمد السيد",
    "orig": "197"
  },
  {
    "seq": 220,
    "name": "محمد مهنى طاهر عبدالعاطی",
    "orig": "142"
  },
  {
    "seq": 221,
    "name": "محمد وائل محمد عبد القادر سيد احمد",
    "orig": "143"
  },
  {
    "seq": 222,
    "name": "محمود حمدی حامد محمد مدكور",
    "orig": "144"
  },
  {
    "seq": 223,
    "name": "محمود رزق فهمي عبد الشافي صالح",
    "orig": "145"
  },
  {
    "seq": 224,
    "name": "محمود رمضان عبد الله رمضان نعيم",
    "orig": "146"
  },
  {
    "seq": 225,
    "name": "محمود عبد المعتمد محمد حسن علی",
    "orig": "267"
  },
  {
    "seq": 226,
    "name": "محمود عمرو عبد الرسول على",
    "orig": "147"
  },
  {
    "seq": 227,
    "name": "محمود فتحى سالم سالم ضيف",
    "orig": "268"
  },
  {
    "seq": 228,
    "name": "محمود محمد احمد محمد الملاح",
    "orig": "199"
  },
  {
    "seq": 229,
    "name": "محمود محمد ماهر عبد الجواد قناوى",
    "orig": "148"
  },
  {
    "seq": 230,
    "name": "محمود محمد محمود محمد قنديل",
    "orig": "149"
  },
  {
    "seq": 231,
    "name": "محمود محمد نبوی محمد زهران",
    "orig": "269"
  },
  {
    "seq": 232,
    "name": "محمود نوفل محمد نوفل عباده",
    "orig": "270"
  },
  {
    "seq": 233,
    "name": "محمود هاني فتحى احمد سعد",
    "orig": "203"
  },
  {
    "seq": 234,
    "name": "محمود ياسر مرسی محمد مرسی",
    "orig": "271"
  },
  {
    "seq": 235,
    "name": "مرفت سامي يونس ضبيش",
    "orig": "150"
  },
  {
    "seq": 236,
    "name": "مروان سالم محمد عبد الجواد منصور",
    "orig": "272"
  },
  {
    "seq": 237,
    "name": "مروان عثمان عبد السلام قطب محمد",
    "orig": "151"
  },
  {
    "seq": 238,
    "name": "مریم جمعه عبد المرضی مصیلحی مرسال",
    "orig": "185"
  },
  {
    "seq": 239,
    "name": "مریم قرنی محمد احمد الشلقاني",
    "orig": "152"
  },
  {
    "seq": 240,
    "name": "مريم مصطفى صبر طلبه محمود",
    "orig": "153"
  },
  {
    "seq": 241,
    "name": "مصطفى اشرف مصطفى دسوقى محمد",
    "orig": "154"
  },
  {
    "seq": 242,
    "name": "مصطفى ايمن معوض زكي يونس",
    "orig": "155"
  },
  {
    "seq": 243,
    "name": "مصطفى حسام عبد الله محمود عبد السلام",
    "orig": "156"
  },
  {
    "seq": 244,
    "name": "مصطفى رجب سعد توفيق على",
    "orig": "157"
  },
  {
    "seq": 245,
    "name": "مصطفى عاطف رزق محمد منصور",
    "orig": "273"
  },
  {
    "seq": 246,
    "name": "مصطفى عبدالروف مبروك الواعر",
    "orig": "158"
  },
  {
    "seq": 247,
    "name": "مصطفى محمد عبد الفتاح سعد خليل",
    "orig": "159"
  },
  {
    "seq": 248,
    "name": "مصطفى محمد مصطفى محمد الاشقر",
    "orig": "160"
  },
  {
    "seq": 249,
    "name": "مصطفى محمد مصطفى موسى عبده",
    "orig": "161"
  },
  {
    "seq": 250,
    "name": "معاذ احمد عبد الله محمود جازيه",
    "orig": "274"
  },
  {
    "seq": 251,
    "name": "معاذ رضا العربي محمد منصور",
    "orig": "162"
  },
  {
    "seq": 252,
    "name": "ملك ابو بكر عوض الله حجاج عوض الله",
    "orig": "163"
  },
  {
    "seq": 253,
    "name": "ملك يوسف قنديل يوسف",
    "orig": "164"
  },
  {
    "seq": 254,
    "name": "منار خالد سعد زايد",
    "orig": "165"
  },
  {
    "seq": 255,
    "name": "منة الله عبد الحافظ محمد صلاح",
    "orig": "166"
  },
  {
    "seq": 256,
    "name": "منه فرحات محمد حسن الديب",
    "orig": "167"
  },
  {
    "seq": 257,
    "name": "منى احمد ابراهيم فرج عثمان",
    "orig": "168"
  },
  {
    "seq": 258,
    "name": "مهند حمدی احمد عبد اللطيف",
    "orig": "275"
  },
  {
    "seq": 259,
    "name": "نصر رمضان کرم ابواليمين الجزيري",
    "orig": "169"
  },
  {
    "seq": 260,
    "name": "نعيم عبد العاطي نعيم الجندي",
    "orig": "170"
  },
  {
    "seq": 261,
    "name": "نور حلمي حلمی محمد حجاج",
    "orig": "276"
  },
  {
    "seq": 262,
    "name": "نورهان السيد محمد موسى صقر",
    "orig": "171"
  },
  {
    "seq": 263,
    "name": "نورهان شعبان فريد محمد سعد",
    "orig": "172"
  },
  {
    "seq": 264,
    "name": "نورهان محمد احمد محمد مؤيد",
    "orig": "173"
  },
  {
    "seq": 265,
    "name": "نورهان هانی شوقی محمود جاد",
    "orig": "174"
  },
  {
    "seq": 266,
    "name": "هاجر عبد الناصر عبدالله عماره",
    "orig": "175"
  },
  {
    "seq": 267,
    "name": "هاجر محمود حسن محمود ابراهيم",
    "orig": "176"
  },
  {
    "seq": 268,
    "name": "هدوء محمد عفيفي محمد عفيفي",
    "orig": "277"
  },
  {
    "seq": 269,
    "name": "هشام عماد حمدى جابر محروس",
    "orig": "177"
  },
  {
    "seq": 270,
    "name": "هنا عزمي السيد ابراهيم عبد الله",
    "orig": "178"
  },
  {
    "seq": 271,
    "name": "وصال اکرامی محمود السيد رضوان",
    "orig": "179"
  },
  {
    "seq": 272,
    "name": "وعد السيد ابو المجد عبد العظيم بركات",
    "orig": "180"
  },
  {
    "seq": 273,
    "name": "وليد سعيد معوض جاد فرج",
    "orig": "186"
  },
  {
    "seq": 274,
    "name": "ياسين رضا الشحات فرج على",
    "orig": "278"
  },
  {
    "seq": 275,
    "name": "يعقوب طلعت محمد يعقوب عبد المنعم",
    "orig": "279"
  },
  {
    "seq": 276,
    "name": "يوسف احمد السيد شعبان ابو حلاوه",
    "orig": "280"
  },
  {
    "seq": 277,
    "name": "يوسف احمد حسن الشريف",
    "orig": "281"
  },
  {
    "seq": 278,
    "name": "يوسف ايمن شعبان محمد البابلي",
    "orig": "181"
  },
  {
    "seq": 279,
    "name": "يوسف طارق فهيم منصور سليمان",
    "orig": "182"
  },
  {
    "seq": 280,
    "name": "يوسف عادل عبد الدايم حسین مرسی",
    "orig": "183"
  },
  {
    "seq": 281,
    "name": "يوسف عادل محمود عجمي",
    "orig": "200"
  },
  {
    "seq": 282,
    "name": "يوسف عزوز عزوز محمد السيد",
    "orig": "282"
  },
  {
    "seq": 283,
    "name": "يوسف فراج محمد ابراهیم زید",
    "orig": "283"
  },
  {
    "seq": 284,
    "name": "يوسف كمال يوسف عواد محمد سراج الدين",
    "orig": "184"
  },
  {
    "seq": 285,
    "name": "يوسف محمود عبد الرحمن سلام",
    "orig": "284"
  },
  {
    "seq": 286,
    "name": "يوسف منصور ابراهيم عبد المنعم عرابي",
    "orig": "285"
  }
];

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

// المواد الدراسية الأساسية السبعة المعتمدة للفرقة الثانية — شعبة الشبكات الكهربائية
const subjectsData = [
  {
    "id": "sub_1",
    "title": "شبكات كهربية",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة شبكات كهربية."
  },
  {
    "id": "sub_2",
    "title": "معالجات ومتحكمات",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة معالجات ومتحكمات."
  },
  {
    "id": "sub_3",
    "title": "تحكم آلي",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة تحكم آلي."
  },
  {
    "id": "sub_4",
    "title": "تك ورش كهربية",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة تك ورش كهربية."
  },
  {
    "id": "sub_5",
    "title": "الكترونيات القوي الكهربية",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة الكترونيات القوي الكهربية."
  },
  {
    "id": "sub_6",
    "title": "انظمة توليد",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة انظمة توليد."
  },
  {
    "id": "sub_7",
    "title": "ضبط جودة",
    "desc": "ملفات المنهج PDF والامتحانات الخاصة بمادة ضبط جودة."
  }
];

// الحالة المحلية للبيانات
let stateData = {
  scheduleImage: localStorage.getItem("quesna_schedule_img") || "",
  scheduleFileName: localStorage.getItem("quesna_schedule_name") || "",
  subjectFiles: JSON.parse(localStorage.getItem("quesna_subject_files_v5") || "{}"),
  announcements: JSON.parse(localStorage.getItem("quesna_announcements") || "[]"),
  cvRecords: JSON.parse(localStorage.getItem("quesna_cv_records") || "[]"),
  supportMessages: JSON.parse(localStorage.getItem("quesna_support_msgs") || "[]")
};

let pendingVerifyCode = "";
let verifiedStudentInfo = null;

// تعبئة قائمة اقتراح الأسماء لسهولة تسجيل دخول الطالب
function populateRosterDatalist() {
  const datalist = document.getElementById("rosterNamesList");
  if (!datalist) return;
  datalist.innerHTML = officialStudentsRoster.map((s) => `<option value="${s.name}"></option>`).join("");
}

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

// التحقق من صلاحية الأدمن
function isAuthorizedAdmin() {
  return Boolean(auth && auth.currentUser && auth.currentUser.email && auth.currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());
}

// عرض صورة جدول المحاضرات وإظهار خانة إضافة الصورة للأدمن فقط
function renderScheduleSection() {
  const viewer = document.getElementById("scheduleImageViewer");
  const adminBox = document.getElementById("adminScheduleUploadBox");
  const nameLabel = document.getElementById("scheduleFileNameLabel");

  if (adminBox) {
    adminBox.style.display = isAuthorizedAdmin() ? "block" : "none";
  }
  if (nameLabel) {
    nameLabel.textContent = stateData.scheduleFileName || "لم يتم اختيار صورة";
  }
  if (viewer) {
    if (stateData.scheduleImage) {
      viewer.innerHTML = `<img src="${stateData.scheduleImage}" alt="جدول المحاضرات" class="schedule-img" />`;
    } else {
      viewer.innerHTML = `<p class="muted-text">لم يتم رفع صورة جدول المحاضرات بعد. يمكن للأدمن إضافة صورة الجدول من خانة الإضافة بالأسفل.</p>`;
    }
  }
}

// زر إضافة صورة الجدول يفتح ملفات الهاتف لاختيار الصورة
const addScheduleImageBtn = document.getElementById("addScheduleImageBtn");
const scheduleImageFileInput = document.getElementById("scheduleImageFileInput");

if (addScheduleImageBtn && scheduleImageFileInput) {
  addScheduleImageBtn.addEventListener("click", () => {
    if (!isAuthorizedAdmin()) {
      alert("إضافة أو تعديل صورة الجدول متاح للأدمن فقط.");
      return;
    }
    scheduleImageFileInput.click();
  });

  scheduleImageFileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("من فضلك اختر ملف صورة صالح لجدول المحاضرات.");
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      stateData.scheduleImage = dataUrl;
      stateData.scheduleFileName = file.name;
      localStorage.setItem("quesna_schedule_img", dataUrl);
      localStorage.setItem("quesna_schedule_name", file.name);

      if (isFirebaseReady && db && isAuthorizedAdmin()) {
        try {
          await db.collection("platform_settings").doc("schedule").set({
            image: dataUrl,
            fileName: file.name,
            updatedAt: Date.now()
          });
        } catch (err) {
          console.warn("Firestore schedule save warning:", err);
        }
      }
      renderScheduleSection();
      alert("تمت إضافة صورة جدول المحاضرات بنجاح.");
    };
    reader.readAsDataURL(file);
  });
}

// عرض المواد الدراسية ولكل مادة خانتان: إضافة PDF وإضافة الامتحانات
function renderSubjects() {
  const grid = document.getElementById("subjectsGrid");
  if (!grid) return;

  const canManage = isAuthorizedAdmin();

  grid.innerHTML = subjectsData
    .map((sub) => {
      const subBucket = stateData.subjectFiles[sub.id] || { pdfs: [], exams: [] };
      const pdfItems = subBucket.pdfs
        .map(
          (f, i) => `
          <li class="slot-file-item">
            <a href="${f.dataUrl}" download="${f.name}" class="slot-file-link">📄 ${f.name}</a>
            ${canManage ? `<button type="button" class="btn btn-danger" onclick="removeSubjectFile('${sub.id}', 'pdfs', ${i})">حذف</button>` : ""}
          </li>
        `
        )
        .join("");

      const examItems = subBucket.exams
        .map(
          (f, i) => `
          <li class="slot-file-item">
            <a href="${f.dataUrl}" download="${f.name}" class="slot-file-link">📝 ${f.name}</a>
            ${canManage ? `<button type="button" class="btn btn-danger" onclick="removeSubjectFile('${sub.id}', 'exams', ${i})">حذف</button>` : ""}
          </li>
        `
        )
        .join("");

      return `
        <div class="subject-card">
          <div>
            <h3>${sub.title}</h3>
            <p>${sub.desc}</p>
          </div>

          <div class="slot-box">
            <div class="slot-header">
              <span class="slot-title">ملفات PDF الخاصة بالمادة</span>
              <button type="button" class="btn btn-primary btn-sm" onclick="triggerSubjectUpload('${sub.id}', 'pdfs')">إضافة PDF</button>
            </div>
            <input type="file" id="input_${sub.id}_pdfs" accept="application/pdf,.pdf" hidden onchange="handleSubjectFileSelected(event, '${sub.id}', 'pdfs')" />
            <ul class="slot-files">
              ${pdfItems || `<li class="muted-text" style="margin:0;">لا توجد ملفات PDF مضافة بعد.</li>`}
            </ul>
          </div>

          <div class="slot-box">
            <div class="slot-header">
              <span class="slot-title">الامتحانات الخاصة بالمادة</span>
              <button type="button" class="btn btn-secondary btn-sm" onclick="triggerSubjectUpload('${sub.id}', 'exams')">إضافة امتحان</button>
            </div>
            <input type="file" id="input_${sub.id}_exams" accept="application/pdf,image/*,.pdf" hidden onchange="handleSubjectFileSelected(event, '${sub.id}', 'exams')" />
            <ul class="slot-files">
              ${examItems || `<li class="muted-text" style="margin:0;">لا توجد امتحانات مضافة بعد.</li>`}
            </ul>
          </div>
        </div>
      `;
    })
    .join("");
}

window.triggerSubjectUpload = function (subjectId, category) {
  if (!isAuthorizedAdmin()) {
    alert("إضافة الملفات والامتحانات متاحة للأدمن فقط بعد تسجيل الدخول من لوحة الأدمن.");
    return;
  }
  const inputEl = document.getElementById(`input_${subjectId}_${category}`);
  if (inputEl) inputEl.click();
};

window.handleSubjectFileSelected = function (event, subjectId, category) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async () => {
    if (!stateData.subjectFiles[subjectId]) {
      stateData.subjectFiles[subjectId] = { pdfs: [], exams: [] };
    }
    stateData.subjectFiles[subjectId][category].unshift({
      name: file.name,
      dataUrl: reader.result,
      addedAt: Date.now()
    });
    localStorage.setItem("quesna_subject_files_v5", JSON.stringify(stateData.subjectFiles));

    if (isFirebaseReady && db && isAuthorizedAdmin()) {
      try {
        await db.collection("platform_settings").doc("subjects_v5").set({
          files: stateData.subjectFiles,
          updatedAt: Date.now()
        });
      } catch (err) {
        console.warn("Firestore subject file save warning:", err);
      }
    }
    renderSubjects();
    alert(category === "pdfs" ? "تمت إضافة ملف الـ PDF بنجاح." : "تمت إضافة ملف الامتحان بنجاح.");
  };
  reader.readAsDataURL(file);
};

window.removeSubjectFile = async function (subjectId, category, index) {
  if (!isAuthorizedAdmin()) return;
  if (!stateData.subjectFiles[subjectId]) return;
  stateData.subjectFiles[subjectId][category].splice(index, 1);
  localStorage.setItem("quesna_subject_files_v5", JSON.stringify(stateData.subjectFiles));

  if (isFirebaseReady && db) {
    try {
      await db.collection("platform_settings").doc("subjects_v5").set({
        files: stateData.subjectFiles,
        updatedAt: Date.now()
      });
    } catch (err) {
      console.warn("Firestore subject delete warning:", err);
    }
  }
  renderSubjects();
};

// إرسال / توليد رمز التحقق للجيميل ورقم الواتساب
const sendVerifyCodeBtn = document.getElementById("sendVerifyCodeBtn");
if (sendVerifyCodeBtn) {
  sendVerifyCodeBtn.addEventListener("click", () => {
    const gmail = document.getElementById("studentGmail").value.trim();
    const whatsapp = document.getElementById("studentWhatsapp").value.trim();
    const hint = document.getElementById("verifyHintText");

    if (!gmail || !gmail.toLowerCase().endsWith("@gmail.com")) {
      alert("من فضلك أدخل بريد جيميل صحيح ينتهي بـ @gmail.com");
      return;
    }
    if (!whatsapp || whatsapp.replace(/\D/g, "").length < 8) {
      alert("من فضلك أدخل رقم واتساب صحيح.");
      return;
    }

    pendingVerifyCode = String(Math.floor(100000 + Math.random() * 900000));
    if (hint) {
      hint.textContent = `تم تجهيز رمز التحقق لحساب (${gmail}) وواتساب (${whatsapp}): ${pendingVerifyCode}`;
    }
    alert(`رمز التحقق الخاص بك هو: ${pendingVerifyCode}`);
  });
}

// تأكيد تسجيل دخول الطالب والتحقق من الجيميل والواتساب ورمز التحقق
const studentVerifyForm = document.getElementById("studentVerifyForm");
if (studentVerifyForm) {
  studentVerifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("studentFullName").value.trim();
    const gmail = document.getElementById("studentGmail").value.trim();
    const whatsapp = document.getElementById("studentWhatsapp").value.trim();
    const codeEntered = document.getElementById("verifyCodeInput").value.trim();

    if (!gmail.toLowerCase().endsWith("@gmail.com")) {
      alert("يجب إدخال بريد إلكتروني Gmail صحيح.");
      return;
    }
    if (whatsapp.replace(/\D/g, "").length < 8) {
      alert("يجب إدخال رقم واتساب صحيح.");
      return;
    }
    if (!pendingVerifyCode || codeEntered !== pendingVerifyCode) {
      alert("رمز التحقق غير صحيح. اضغط على (إرسال / توليد رمز التحقق) وأدخل الرمز الصحيح.");
      return;
    }

    verifiedStudentInfo = { name, gmail, whatsapp, verifiedAt: new Date().toISOString() };
    document.getElementById("studentAuthCard").style.display = "none";
    document.getElementById("cvFormCard").style.display = "block";
    document.getElementById("verifiedStudentSummary").textContent = `${name} — الجيميل: ${gmail} — الواتساب: ${whatsapp}`;
  });
}

const studentLogoutBtn = document.getElementById("studentLogoutBtn");
if (studentLogoutBtn) {
  studentLogoutBtn.addEventListener("click", () => {
    verifiedStudentInfo = null;
    pendingVerifyCode = "";
    document.getElementById("cvFormCard").style.display = "none";
    document.getElementById("studentAuthCard").style.display = "block";
    document.getElementById("verifyHintText").textContent = "";
    studentVerifyForm.reset();
  });
}

// إرسال الـ CV: إرسال نسخة للطالب على الجيميل وحفظ نسخة حصرية للأدمن
const cvSubmissionForm = document.getElementById("cvSubmissionForm");
if (cvSubmissionForm) {
  cvSubmissionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!verifiedStudentInfo) {
      alert("يرجى التحقق من الجيميل ورقم الواتساب أولاً.");
      return;
    }

    const cvPayload = {
      studentName: verifiedStudentInfo.name,
      studentGmail: verifiedStudentInfo.gmail,
      studentWhatsapp: verifiedStudentInfo.whatsapp,
      summary: document.getElementById("cvSummary").value.trim(),
      skills: document.getElementById("cvSkills").value.trim(),
      experience: document.getElementById("cvExperience").value.trim(),
      education: document.getElementById("cvEducation").value.trim(),
      adminInboxEmail: ADMIN_EMAIL,
      createdAt: Date.now()
    };

    if (isFirebaseReady && db) {
      try {
        await db.collection("student_cvs").add(cvPayload);
      } catch (err) {
        console.warn("Firestore CV save warning:", err);
      }
    }

    stateData.cvRecords.unshift(cvPayload);
    localStorage.setItem("quesna_cv_records", JSON.stringify(stateData.cvRecords));

    const cvTextReport =
      `السيرة الذاتية (CV) - منصة المعهد الفني الصناعي بقويسنا\n` +
      `المصمم: الطالب محمد سامح\n` +
      `----------------------------------------\n` +
      `الاسم: ${cvPayload.studentName}\n` +
      `الجيميل: ${cvPayload.studentGmail}\n` +
      `الواتساب: ${cvPayload.studentWhatsapp}\n` +
      `المؤهل: ${cvPayload.education}\n\n` +
      `نبذة تعريفية:\n${cvPayload.summary}\n\n` +
      `المهارات:\n${cvPayload.skills}\n\n` +
      `التدريب والخبرات:\n${cvPayload.experience}`;

    const subjectEncoded = encodeURIComponent(`نسخة الـ CV - ${cvPayload.studentName}`);
    const bodyEncoded = encodeURIComponent(cvTextReport);
    window.open(`mailto:${cvPayload.studentGmail}?cc=${ADMIN_EMAIL}&subject=${subjectEncoded}&body=${bodyEncoded}`, "_blank");

    cvSubmissionForm.reset();
    alert("تم حفظ الـ CV وإرساله إلى صندوق الوارد الخاص بالأدمن وتجهيز نسخة الجيميل للطالب.");
  });
}

// إرسال رسالة الدعم الفني (تصل إلى لوحة الأدمن فقط)
const supportForm = document.getElementById("supportForm");
if (supportForm) {
  supportForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const item = {
      name: document.getElementById("supportName").value.trim(),
      contact: document.getElementById("supportContact").value.trim(),
      message: document.getElementById("supportMessage").value.trim(),
      createdAt: Date.now()
    };

    if (isFirebaseReady && db) {
      try {
        await db.collection("support_messages").add(item);
      } catch (err) {
        console.warn("Firestore support save warning:", err);
      }
    }

    stateData.supportMessages.unshift(item);
    localStorage.setItem("quesna_support_msgs", JSON.stringify(stateData.supportMessages));
    supportForm.reset();
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
    const item = {
      title: document.getElementById("announcementTitle").value.trim(),
      body: document.getElementById("announcementBody").value.trim(),
      createdAt: Date.now()
    };

    if (isFirebaseReady && db) {
      try {
        await db.collection("announcements").add(item);
      } catch (err) {
        console.warn("Firestore announcement save warning:", err);
      }
    }

    stateData.announcements.unshift(item);
    localStorage.setItem("quesna_announcements", JSON.stringify(stateData.announcements));
    announcementForm.reset();
    renderAnnouncements();
    alert("تم نشر الإعلان بنجاح.");
  });
}

function renderAnnouncements() {
  const box = document.getElementById("announcementsList");
  if (!box) return;
  if (!stateData.announcements.length) {
    box.innerHTML = "";
    return;
  }
  box.innerHTML = stateData.announcements
    .map(
      (a) => `
      <div class="announcement-item">
        <h4>${a.title}</h4>
        <p>${a.body}</p>
      </div>
    `
    )
    .join("");
}

// عرض كشف أسماء الطلاب الكامل وبيانات الـ CV ورسائل الدعم في لوحة الأدمن فقط
function renderAdminPrivateData(rosterFilter = "") {
  const rosterBody = document.getElementById("adminRosterTableBody");
  const cvListEl = document.getElementById("adminCvRecordsList");
  const supportListEl = document.getElementById("adminSupportList");

  if (!isAuthorizedAdmin()) {
    if (rosterBody) rosterBody.innerHTML = "";
    if (cvListEl) cvListEl.innerHTML = "";
    if (supportListEl) supportListEl.innerHTML = "";
    return;
  }

  const q = rosterFilter.trim().toLowerCase();
  const filteredRoster = q
    ? officialStudentsRoster.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          String(s.seq).includes(q) ||
          String(s.orig).includes(q)
      )
    : officialStudentsRoster;

  if (rosterBody) {
    rosterBody.innerHTML = filteredRoster.length
      ? filteredRoster
          .map(
            (s) => `
          <tr>
            <td>${s.seq}</td>
            <td>${s.name}</td>
            <td>${s.orig}</td>
          </tr>
        `
          )
          .join("")
      : `<tr><td colspan="3" style="text-align:center;">لا توجد نتائج مطابقة للبحث.</td></tr>`;
  }

  if (cvListEl) {
    cvListEl.innerHTML = stateData.cvRecords.length
      ? stateData.cvRecords
          .map(
            (rec) => `
          <div class="record-item">
            <h4>${rec.studentName}</h4>
            <p class="record-meta">الجيميل: ${rec.studentGmail} | الواتساب: ${rec.studentWhatsapp} | المؤهل: ${rec.education}</p>
            <p><strong>نبذة:</strong> ${rec.summary}</p>
            <p><strong>المهارات:</strong> ${rec.skills}</p>
            <p><strong>التدريب والخبرات:</strong> ${rec.experience}</p>
          </div>
        `
          )
          .join("")
      : `<p class="muted-text">لا توجد بيانات طلاب أو CV واردة حتى الآن.</p>`;
  }

  if (supportListEl) {
    supportListEl.innerHTML = stateData.supportMessages.length
      ? stateData.supportMessages
          .map(
            (msg) => `
          <div class="support-item">
            <strong>${msg.name}</strong> — <span>${msg.contact}</span>
            <p>${msg.message}</p>
          </div>
        `
          )
          .join("")
      : `<p class="muted-text">لا توجد رسائل دعم فني واردة حتى الآن.</p>`;
  }
}

const adminRosterSearch = document.getElementById("adminRosterSearch");
if (adminRosterSearch) {
  adminRosterSearch.addEventListener("input", () => {
    renderAdminPrivateData(adminRosterSearch.value);
  });
}

async function loadCloudDataIfAdmin() {
  if (!isFirebaseReady || !db || !isAuthorizedAdmin()) return;
  try {
    const schedDoc = await db.collection("platform_settings").doc("schedule").get();
    if (schedDoc.exists && schedDoc.data().image) {
      stateData.scheduleImage = schedDoc.data().image;
      stateData.scheduleFileName = schedDoc.data().fileName || "";
    }

    const subDoc = await db.collection("platform_settings").doc("subjects_v5").get();
    if (subDoc.exists && subDoc.data().files) {
      stateData.subjectFiles = subDoc.data().files;
    }

    const cvSnap = await db.collection("student_cvs").orderBy("createdAt", "desc").get();
    if (!cvSnap.empty) {
      stateData.cvRecords = cvSnap.docs.map((d) => d.data());
    }

    const supSnap = await db.collection("support_messages").orderBy("createdAt", "desc").get();
    if (!supSnap.empty) {
      stateData.supportMessages = supSnap.docs.map((d) => d.data());
    }
  } catch (err) {
    console.warn("Firestore admin load warning:", err);
  }
}

function updateAdminUI(user) {
  const loginBox = document.getElementById("adminLoginBox");
  const adminPanel = document.getElementById("adminPanel");
  const emailLabel = document.getElementById("loggedAdminEmail");

  const allowed = Boolean(user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());
  if (allowed) {
    if (loginBox) loginBox.style.display = "none";
    if (adminPanel) adminPanel.style.display = "block";
    if (emailLabel) emailLabel.textContent = `الحساب النشط: ${user.email}`;
  } else {
    if (loginBox) loginBox.style.display = "block";
    if (adminPanel) adminPanel.style.display = "none";
    if (emailLabel) emailLabel.textContent = "";
  }

  renderScheduleSection();
  renderSubjects();
  renderAdminPrivateData(adminRosterSearch ? adminRosterSearch.value : "");
}

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
        await loadCloudDataIfAdmin();
        renderScheduleSection();
        renderSubjects();
        renderAdminPrivateData(adminRosterSearch ? adminRosterSearch.value : "");
        adminLoginForm.reset();
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

const logoutBtn = document.getElementById("adminLogoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    if (auth) await auth.signOut();
    updateAdminUI(null);
  });
}

if (auth) {
  auth.onAuthStateChanged(async (user) => {
    if (user && user.email && user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      await auth.signOut();
      updateAdminUI(null);
    } else {
      updateAdminUI(user);
      if (user) {
        await loadCloudDataIfAdmin();
        renderScheduleSection();
        renderSubjects();
        renderAdminPrivateData(adminRosterSearch ? adminRosterSearch.value : "");
      }
    }
  });
}

// تشغيل العرض الأولي
populateRosterDatalist();
renderAnnouncements();
renderScheduleSection();
renderSubjects();
renderAdminPrivateData();
