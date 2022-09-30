const translations = {
  tr: {
    logo: "Ümit Adımı",
    fakulte: "Fakülteler",
    contact: "iletişim",
    main_h: "Ümit Adımı ' nın sitesine hoş geldiniz",
    main_text:
      "Bu proje, ders notları, kaynakları ve sağlanan özetlerine erişmeyi kolaylaştırmayı, ayrıca gönüllü bir proje olmasıyla öğrenciler arası yardımlaşma bilincinin artırılmasını hedefliyor.",
    contact_title: "İLETİŞİM",
    contct_text:
      "Önerilerinizi ve isteklerinizi aşağıdaki e-postaya gönderebilirsiniz",
    muendis: "MÜHENDİSLİK",
    fenEde: "Fen Ve Edebiyat",
    saglik: "Sağlık",
    egitim: "Eğitim",
    ziraat: "Ziraat",
    linkler: "Önemli Linkler",
    turkce: "TR",
    arabic: "AR",
  },
  ar: {
    logo: "خطوة أمل",
    fakulte: "الكليات",
    contact: "التواصل",
    main_h: "أهلا بكم في موقع خطوة أمل",
    main_text:
      "مشروع يهدف لتسهيل الوصول إلى ملخصات, شروحات و مصادر الدروس المتوفرة بسلاسة , و كونه عملاً تطوعياً بحتاً نأمل في أن يساهم بتحفيز الفكر التساهمي بين الطلبة",
    contact_title: "التواصل",
    contct_text: "نستقبل اقتراحاتكم و طلباتكم  على الايميل التالي",
    muendis: "الهندسة",
    fenEde: "العلم والأدب",
    saglik: "الصحة",
    egitim: "التعليم",
    ziraat: "الزراعة",
    linkler: "الروابط المهمة",
    turkce: "TR",
    arabic: "AR",
  },
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  localStorage.setItem("lang", event.target.value);
  setLanguage(event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang");
  setLanguage(language);

  if (localStorage.getItem("lang")) {
    languageSelector.value = language;
  }
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-lang");
    element.textContent = translations[language][translationKey];
  });

  document.dir = language === "ar" ? "rtl" : "ltr";
};

window.addEventListener("scroll", function () {
  if (this.scrollY >= 800) {
    let flipedBoxes = document.querySelectorAll(
      ".footer .footer-gallery .inset-box .fliped-box"
    );
    flipedBoxes.forEach((e) => {
      e.classList.add("anim");
    });
  }
  if (this.scrollY < 800) {
    let flipedBoxes = document.querySelectorAll(
      ".footer .footer-gallery .inset-box .fliped-box"
    );
    flipedBoxes.forEach((e) => {
      e.classList.remove("anim");
    });
  }
});
