export interface TechnologyItem {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const technologiesData: TechnologyItem[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend Framework",
    description: "بناء واجهات مستخدم تفاعلية، سريعة، ومكونات قابلة لإعادة الاستخدام.",
  },
  {
    id: "ts-js",
    name: "JavaScript / TypeScript",
    category: "Core Language",
    description: "كتابة منطق برمجي آمن وعالي الكفاءة يضمن دقة التنفيذ وخلوه من الأخطاء.",
  },
  {
    id: "html-css",
    name: "HTML5 / Modern CSS",
    category: "Structure & Semantics",
    description: "بنية دلالية متوافقة مع معايير الويب العالمية وتجربة وصول سلسة.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling Engine",
    description: "تنسيقات بصرية دقيقة، تصميم متجاوب، وأداء تحميل فائق بدون ملفات زائدة.",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    description: "إدارة التغييرات البرمجية بدقة وضمان استقرار الكود وحفظ سجل التطوير.",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code Hosting & Collaboration",
    description: "مستودعات برمجية آمنة وموثوقة لضمان استمرارية التطوير وسهولة الإطلاق.",
  },
];
