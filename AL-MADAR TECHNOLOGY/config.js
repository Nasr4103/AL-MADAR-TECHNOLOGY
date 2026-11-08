// إعدادات الموقع — عدّلوا هذا الملف فقط دون لمس index.html
window.ALMADAR_CONFIG = {
  storeName: "المدار",
  storeNameEn: "AL-MADAR TECHNOLOGY",
  city: "صنعاء، اليمن",

  // رقم واتساب بالصيغة الدولية بدون + أو مسافات، مثال: "967XXXXXXXXX"
  // اتركه فارغاً "" حتى يُشترى رقم المتجر: ستظهر أزرار الطلب معطّلة تلقائياً.
  whatsapp: "",

  // بريد المتجر (اتركه فارغاً "" لإخفائه)
  email: "almadar.technologystore@gmail.com",

  // false = لا تُعرض الأسعار أبداً. true = تُعرض فقط للمنتجات التي لها سعر في products.js
  showPrices: false,

  // الأقسام: أسماؤها مأخوذة من قائمة المنتجات المؤكدة. وصفها لا يعني توفر صنف معين.
  categories: [
    { id: "headphones", name: "السماعات", note: "سماعات أذن · سماعات طوق · سماعات كمبيوتر جانبية" },
    { id: "laptop",     name: "قطع غيار اللابتوب", note: "بطاريات · شاشات · محولات" },
    { id: "cables",     name: "الكابلات والتوصيلات", note: "طابعات · باور · VGA · HDMI · كهرباء" },
    { id: "network",    name: "كابلات الشبكات", note: "Cat 6 · Cat 7 · Cat 8 · كابلات خارجية" },
    { id: "devices",    name: "الأجهزة والمعدات", note: "كاميرات · موازين · منظومات" }
  ]
};
