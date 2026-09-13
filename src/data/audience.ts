export interface AudienceItem {
  id: string;
  title: string;
}

export const audienceData: AudienceItem[] = [
  { id: "companies", title: "الشركات" },
  { id: "institutions", title: "المؤسسات" },
  { id: "contracting", title: "شركات المقاولات" },
  { id: "decor", title: "شركات الديكور" },
  { id: "stores", title: "المتاجر" },
  { id: "restaurants-cafes", title: "المطاعم والمقاهي" },
  { id: "medical", title: "العيادات والمراكز الطبية" },
  { id: "service-offices", title: "المكاتب الخدمية" },
  { id: "exhibitions", title: "المعارض" },
  { id: "startups", title: "المشاريع الناشئة" },
  { id: "brands", title: "العلامات التجارية" },
  { id: "special-projects", title: "المشاريع الخاصة" },
];
