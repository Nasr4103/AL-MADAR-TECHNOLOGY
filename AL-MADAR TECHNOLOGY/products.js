// بيانات المنتجات. أضيفوا منتجاً بنسخ الكتلة الموجودة في التعليق أدناه.
// لا تضيفوا منتجاً إلا إذا كان متوفراً فعلاً. الصور: ضعوها في مجلد images/ واكتبوا مسارها.
//
// {
//   sku: "AM-010",
//   name: "كابل HDMI",
//   category: "cables",              // أحد المعرّفات في config.js
//   brand: "",
//   model: "",                       // مهم للبطاريات والشاشات والمحولات
//   compat: "",                      // الأجهزة المتوافقة
//   specs: "",
//   price: 0,                        // اتركه null إن لم يُحدَّد
//   currency: "",
//   availability: "available",       // available | limited | order | out
//   warranty: "",
//   images: ["images/AM-010-1.jpg"],
//   notes: ""
// }
window.ALMADAR_PRODUCTS = [
];

// منتجات تجريبية للتصميم فقط. تظهر فقط عند فتح الموقع بالرابط: index.html?demo=1
window.ALMADAR_DEMO = [
  { sku:"DEMO-1", name:"(تجريبي) كابل HDMI", category:"cables", model:"نموذج", compat:"للاختبار فقط", availability:"available", images:[] },
  { sku:"DEMO-2", name:"(تجريبي) سماعة أذن", category:"headphones", model:"نموذج", availability:"limited", images:[] },
  { sku:"DEMO-3", name:"(تجريبي) بطارية لابتوب", category:"laptop", model:"موديل الجهاز مطلوب", compat:"للاختبار فقط", availability:"order", price:1234, currency:"عملة تجريبية", images:[] },
  { sku:"DEMO-4", name:"(تجريبي) كابل شبكة", category:"network", model:"Cat 6", availability:"available", images:[] },
  { sku:"DEMO-5", name:"(تجريبي) كاميرا", category:"devices", model:"نموذج", availability:"out", images:[] }
];
