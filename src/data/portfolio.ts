export interface PortfolioItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  category: string;
  image?: string;
  aspectRatio?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "واجهة متجر وتجربة تسوق رقمية",
    badge: "Concept Design",
    category: "تجارة إلكترونية",
    description: "تصميم متجر إلكتروني يركز على سهولة استعراض المنتجات وتجربة طلب مباشرة وسريعة على مختلف الأجهزة.",
  },
  {
    id: "portfolio-2",
    title: "منصة عرض مشاريع استثمارية وعقارية",
    badge: "Concept Design",
    category: "مواقع شركات واستثمار",
    description: "واجهة تعريفية أنيقة لعرض المشروعات والخدمات والتفاصيل المعمارية بصورة بصرية واضحة للعملاء.",
  },
  {
    id: "portfolio-3",
    title: "بوابة رقمية تفاعلية للخدمات والعمليات",
    badge: "Concept Design",
    category: "تطبيقات وحلول ويب",
    description: "نموذج لتطبيق ويب يعتمد على لوحة تحكم ذكية وتنظيم بيانات دقيق لإدارة المهام والخدمات بكفاءة.",
  },
];
