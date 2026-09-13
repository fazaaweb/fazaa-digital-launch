export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  isAvailable: boolean;
}

export const siteConfig = {
  name: "فزعة ويب",
  englishName: "Fazaa Web",
  tagline: "نصنع حضورًا رقميًا يليق بمشروعك.",
  description:
    "نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة المستخدم السلسة، لتقدم مشروعك بصورة احترافية أمام عملائك.",
  footerDescription:
    "نصمم ونطور مواقع إلكترونية احترافية تساعد المشاريع والعلامات التجارية على بناء حضور رقمي قوي.",
  copyright: "© 2026 فزعة ويب — جميع الحقوق محفوظة.",
  
  // المركز الموحد لإعدادات الاتصال - يتم تعديل الرقم الحقيقي هنا لاحقاً دون الحاجة لتغيير الكود
  whatsappNumber: "967700000000", // Placeholder: يتم استبداله بالرقم الرسمي
  contactPhone: "+967700000000", // Placeholder للاتصال المباشر tel:
  
  navigationLinks: [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا", href: "#services" },
    { label: "بعض أعمالنا", href: "#portfolio" },
    { label: "لماذا فزعة ويب؟", href: "#why-us" },
    { label: "كيف نعمل؟", href: "#process" },
    { label: "تواصل معنا", href: "#contact" },
  ] as NavigationLink[],

  socialLinks: [
    { name: "WhatsApp", url: "https://wa.me/967700000000", isAvailable: true },
    { name: "اتصال مباشر", url: "tel:+967700000000", isAvailable: true },
    { name: "Instagram", url: "", isAvailable: false },
    { name: "Facebook", url: "", isAvailable: false },
    { name: "LinkedIn", url: "", isAvailable: false },
  ] as SocialLink[],
};
