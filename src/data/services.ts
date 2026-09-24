export type ServiceCategory = "all" | "business" | "commerce" | "custom";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: "business" | "commerce" | "custom";
}

export interface ServiceCategoryMeta {
  id: ServiceCategory;
  label: string;
  count: number;
}

export const servicesCategories: ServiceCategoryMeta[] = [
  { id: "all", label: "جميع الخدمات", count: 14 },
  { id: "business", label: "مواقع الشركات والأعمال", count: 6 },
  { id: "commerce", label: "المتاجر والتحويل", count: 3 },
  { id: "custom", label: "البرمجة والحلول المخصصة", count: 5 },
];

export const servicesData: ServiceItem[] = [
  {
    id: "corporate",
    number: "01",
    title: "مواقع الشركات",
    description: "مواقع احترافية تقدم شركتك وخدماتها بصورة واضحة ومميزة أمام عملائك.",
    category: "business",
  },
  {
    id: "decor-design",
    number: "02",
    title: "مواقع الديكور والتصميم",
    description: "واجهات بصرية تعكس جودة أعمال الديكور والتصميم وتبرز مشاريعك بشكل جذاب.",
    category: "business",
  },
  {
    id: "contracting",
    number: "03",
    title: "مواقع شركات المقاولات",
    description: "مواقع منظمة لعرض خدمات المقاولات والمشاريع والأعمال بطريقة احترافية.",
    category: "business",
  },
  {
    id: "ecommerce",
    number: "04",
    title: "المتاجر الإلكترونية",
    description: "متاجر إلكترونية مصممة لعرض المنتجات وتسهيل تجربة التصفح والشراء.",
    category: "commerce",
  },
  {
    id: "clinics-medical",
    number: "05",
    title: "مواقع العيادات والمراكز الطبية",
    description: "مواقع احترافية لعرض الخدمات الطبية والمعلومات المهمة وطرق التواصل والحجز.",
    category: "business",
  },
  {
    id: "restaurants-cafes",
    number: "06",
    title: "مواقع المطاعم والمقاهي",
    description: "مواقع جذابة لعرض القائمة والخدمات والموقع ووسائل التواصل.",
    category: "business",
  },
  {
    id: "institutions-offices",
    number: "07",
    title: "مواقع المؤسسات والمكاتب",
    description: "مواقع تعريفية منظمة تساعد العملاء على معرفة خدمات المؤسسة والتواصل معها.",
    category: "business",
  },
  {
    id: "booking-systems",
    number: "08",
    title: "أنظمة حجز المواعيد",
    description: "إمكانية إضافة أنظمة حجز وتنظيم المواعيد حسب طبيعة المشروع.",
    category: "commerce",
  },
  {
    id: "landing-pages",
    number: "09",
    title: "Landing Pages",
    description: "صفحات هبوط مركزة للحملات والخدمات والمنتجات وتحويل الزوار إلى عملاء محتملين.",
    category: "commerce",
  },
  {
    id: "web-apps",
    number: "10",
    title: "تطبيقات الويب",
    description: "تطبيقات ويب مخصصة لتنفيذ وظائف وتجارب رقمية حسب احتياجات المشروع.",
    category: "custom",
  },
  {
    id: "ui-ux-design",
    number: "11",
    title: "تصميم UI/UX",
    description: "تصميم واجهات وتجارب مستخدم مدروسة قبل التطوير والتنفيذ.",
    category: "custom",
  },
  {
    id: "redesign",
    number: "12",
    title: "إعادة تصميم المواقع",
    description: "تحديث المواقع الحالية وتحسين التصميم وتجربة المستخدم والأداء.",
    category: "custom",
  },
  {
    id: "customization",
    number: "13",
    title: "تطوير وتخصيص المواقع",
    description: "تطوير وظائف وتخصيصات إضافية وفق احتياجات المشروع.",
    category: "custom",
  },
  {
    id: "custom-solutions",
    number: "14",
    title: "حلول ويب مخصصة",
    description: "حلول رقمية مصممة خصيصًا للمشاريع التي تحتاج إلى وظائف وتجارب مختلفة.",
    category: "custom",
  },
];
