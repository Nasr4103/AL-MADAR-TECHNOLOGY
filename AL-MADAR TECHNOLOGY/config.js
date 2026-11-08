"use strict";
// إعدادات الموقع — عدّلوا هذا الملف فقط دون لمس index.html
window.ALMADAR_CONFIG = Object.freeze({
  storeName: "المدار",
  storeNameEn: "AL-MADAR TECHNOLOGY",
  city: "صنعاء، اليمن",

  // رقم واتساب بالصيغة الدولية بدون + أو مسافات، مثال: "967770000000"
  // اتركه فارغاً "" حتى يُشترى رقم المتجر
  whatsapp: "",

  // روابط صفحات التواصل الاجتماعي (اتركها فارغة "" لإخفائها، أو ضع الرابط الكامل يبدأ بـ https://)
  facebook: "https://www.facebook.com/",
  instagram: "",

  // بريد المتجر (اتركه فارغاً "" لإخفائه)
  email: "almadar.technologystore@gmail.com",

  // false = لا تُعرض الأسعار أبداً. true = تُعرض فقط للمنتجات التي لها سعر في products.js
  showPrices: false,

  // الأقسام المعتمدة في المتجر
  categories: Object.freeze([
    { id: "headphones", name: "السماعات", note: "سماعات أذن · سماعات طوق · سماعات كمبيوتر جانبية" },
    { id: "laptop",     name: "قطع غيار وإكسسوارات اللابتوب", note: "بطاريات · شاشات · شواحن ومحولات" },
    { id: "cables",     name: "الكابلات والتوصيلات", note: "طابعات · باور · VGA · HDMI · كهرباء" },
    { id: "network",    name: "مستلزمات وكابلات الشبكات", note: "Cat 6 · Cat 7 · Cat 8 · سويتشات وكابلات خارجية" },
    { id: "devices",    name: "الكاميرات والأجهزة والمعدات", note: "كاميرات مراقبة · موازين · منظومات" }
  ])
});
