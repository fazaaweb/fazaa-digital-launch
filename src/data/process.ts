export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  isOptional?: boolean;
}

export const processData: ProcessStepItem[] = [
  {
    number: "01",
    title: "تواصل معنا",
    description: "أخبرنا عن مشروعك.",
  },
  {
    number: "02",
    title: "نفهم احتياجك",
    description: "نتعرف على نشاطك وأهدافك.",
  },
  {
    number: "03",
    title: "نحدد المتطلبات",
    description: "نحدد ما يحتاجه الموقع من صفحات ووظائف.",
  },
  {
    number: "04",
    title: "النموذج المبدئي — اختياري حسب المشروع",
    description:
      "يمكننا تقديم نموذج مبدئي لتصور شكل الموقع وتجربته قبل البدء في التنفيذ، حسب طبيعة المشروع ومتطلباته.",
    isOptional: true,
  },
  {
    number: "05",
    title: "التصميم",
    description: "نبني الواجهة والتجربة البصرية.",
  },
  {
    number: "06",
    title: "التطوير",
    description: "نحول التصميم إلى موقع فعلي.",
  },
  {
    number: "07",
    title: "الاختبار والتحسين",
    description: "نختبر الموقع ونراجع التفاصيل.",
  },
  {
    number: "08",
    title: "الإطلاق",
    description: "نجهز الموقع ليظهر أمام عملائك.",
  },
  {
    number: "09",
    title: "التطوير المستقبلي",
    description: "يمكن إضافة وتطوير المزايا مع نمو مشروعك.",
  },
];
