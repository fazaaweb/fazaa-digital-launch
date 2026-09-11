import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  Layers,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Category = "all" | "ecommerce" | "saas" | "corporate" | "webapps";

interface Project {
  id: string;
  title: string;
  category: Category;
  categoryName: string;
  client: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string };
  deliverables: string[];
  techStack: string[];
  gradient: string;
  mockupAccent: string;
  rating: number;
}

const categories = [
  { id: "all" as Category, label: "جميع المشاريع" },
  { id: "ecommerce" as Category, label: "متاجر إلكترونية" },
  { id: "saas" as Category, label: "منصات رقمية وSaaS" },
  { id: "corporate" as Category, label: "مواقع شركات ومؤسسات" },
  { id: "webapps" as Category, label: "تطبيقات ويب مخصصة" },
];

const projects: Project[] = [
  {
    id: "project-1",
    title: "منصة فخامة للعطور والمقتنيات النادرة",
    category: "ecommerce",
    categoryName: "متجر إلكتروني فاخر",
    client: "Fakhamah Luxury Group",
    tagline: "تجربة تسوق سينمائية مع شراء بنقرة واحدة وربط الدفع الآمن",
    description:
      "قمنا ببناء متجر إلكتروني فائق السرعة لبراند عطور عالمي، يدعم الدفع عبر آبل باي ومدى مع تجربة تصفح ثلاثية الأبعاد خالية من أي بطء، مما ساهم في رفع نسبة إتمام الطلبات بنسبة 320%.",
    metrics: { label: "نمو المبيعات في أول شهرين", value: "+320%" },
    deliverables: [
      "تصميم UI/UX فاخر مخصص بالكامل",
      "بوابة دفع متكاملة (Apple Pay, Mada, Visa)",
      "سرعة استجابة 0.28s على الهواتف",
      "إدارة المخزون والتوصيل تلقائيًا",
    ],
    techStack: ["React", "Tailwind CSS", "Apple Pay", "Cloud Database"],
    gradient: "from-blue-900/60 via-slate-900/80 to-background",
    mockupAccent: "border-cyan-500/30",
    rating: 5,
  },
  {
    id: "project-2",
    title: "بوابة رواند للاستثمار والتطوير العقاري",
    category: "corporate",
    categoryName: "موقع شركة استثمارية",
    client: "Rawand Real Estate Co.",
    tagline: "واجهة فاخرة لعرض المشاريع العقارية الكبرى وتوليد العملاء المهتمين",
    description:
      "تطوير منصة رقمية متكاملة لشركة تطوير عقاري كبرى في الخليج، تتضمن خريطة تفاعلية للوحدات، جولات افتراضية، ونظام استفسار فوري يربط العميل بفريق المبيعات خلال ثوانٍ.",
    metrics: { label: "زيادة طلبات المعاينة والاستفسار", value: "+215%" },
    deliverables: [
      "خريطة تفاعلية للمشاريع والوحدات المتاحة",
      "نظام حجز مواعيد المعاينة واستقبال العملاء",
      "لوحة تحكم لإضافة العقارات والمخططات",
      "تهيئة كاملة لمحركات البحث (SEO)",
    ],
    techStack: ["Next.js", "Interactive Maps", "TypeScript", "Tailwind"],
    gradient: "from-cyan-950/60 via-slate-900/80 to-background",
    mockupAccent: "border-blue-500/30",
    rating: 5,
  },
  {
    id: "project-3",
    title: "منصة كلاودلينك لإدارة العمليات وSaaS",
    category: "saas",
    categoryName: "منصة SaaS سحابية",
    client: "CloudLink Tech",
    tagline: "لوحة تحكم تفاعلية لإدارة اشتراكات وأتمتة مسارات العمل",
    description:
      "بناء تطبيق ويب سحابي يتيح لرواد الأعمال إدارة مسارات مشاريعهم وربط الأنظمة باشتراكات شهرية مؤتمتة وتوليد تقارير أداء فورية بدقة متناهية.",
    metrics: { label: "سرعة تحميل البيانات الحية", value: "0.19s" },
    deliverables: [
      "نظام اشتراكات شهرية وسنوية متكامل",
      "لوحة تحكم تفاعلية مع رسوم بيانية حية",
      "حماية وأمان بنكي للبيانات",
      "نظام صلاحيات متقدم متعدد المستخدمين",
    ],
    techStack: ["React 19", "Recharts", "Cloudflare", "Tailwind"],
    gradient: "from-indigo-950/60 via-slate-900/80 to-background",
    mockupAccent: "border-indigo-500/30",
    rating: 5,
  },
  {
    id: "project-4",
    title: "مجموعة النخبة الطبية والاستشارات",
    category: "corporate",
    categoryName: "موقع طبي واستشارات",
    client: "Elite Healthcare Clinics",
    tagline: "حجز مواعيد فوري مع الأطباء وتتبع السجلات الطبية بأعلى معايير الخصوصية",
    description:
      "تصميم وبناء بوابة طبية راقية تتيح للمرضى حجز المواعيد مع الأطباء، وتلقي الاستشارات الطبية، مع توافق كامل على جميع شاشات الهواتف وسرعة فائقة في الحجز.",
    metrics: { label: "تقليص زمن حجز الموعد", value: "30 ثانية" },
    deliverables: [
      "نظام حجز إلكتروني مرتبط بالتقويم",
      "تأكيد المواعيد عبر رسائل واتساب التلقائية",
      "دليل شامل للأطباء والخدمات الطبية",
      "تصميم مريح للعين يتوافق مع معايير A11y",
    ],
    techStack: ["React", "WhatsApp Integration", "Calendar API", "Zod"],
    gradient: "from-blue-950/60 via-slate-900/80 to-background",
    mockupAccent: "border-cyan-400/30",
    rating: 5,
  },
  {
    id: "project-5",
    title: "سلسلة مطاعم وكافيهات أرورا الفاخرة",
    category: "webapps",
    categoryName: "نظام طلبات وقائمة رقمية",
    client: "Aurora Gourmet Dining",
    tagline: "قائمة طعام تفاعلية (Smart Digital Menu) مع طلب ودفع فوري عبر الطاولة",
    description:
      "تطبيق ويب خفيف يعمل عبر مسح QR Code بدون الحاجة لتحميل أي تطبيق، يتيح للزبون تصفح القائمة بصور عالية الجودة، وتخصيص الوجبة، والدفع فورياً.",
    metrics: { label: "زيادة متوسط قيمة الطلب", value: "+42%" },
    deliverables: [
      "منيو رقمي فائق السرعة عبر الباركود",
      "دفع إلكتروني مباشر من الطاولة",
      "لوحة تحكم للمطبخ وتحديث الأسعار لحظياً",
      "توافق تام مع كل أنواع الهواتف",
    ],
    techStack: ["React", "QR Code Engine", "Mada Payment", "Tailwind"],
    gradient: "from-slate-950/80 via-blue-950/50 to-background",
    mockupAccent: "border-primary/30",
    rating: 5,
  },
  {
    id: "project-6",
    title: "أكاديمية مَدار للتعليم والتدريب الاحترافي",
    category: "saas",
    categoryName: "منصة تعليمية ذكية",
    client: "Madar Learning Academy",
    tagline: "منصة دورات تفاعلية، اختبارات ذكية، وإصدار شهادات معتمدة فورية",
    description:
      "بناء منصة تدريب رقمية تدعم مشاهدة الفيديوهات بجودة متكيفة، وإجراء الاختبارات التقييمية، وإصدار الشهادات بروابط تحقق مشفرة.",
    metrics: { label: "معدل إكمال الطلاب للدورات", value: "88%" },
    deliverables: [
      "مشغل فيديو مخصص مانع للقرصنة والتنزيل",
      "نظام إصدار شهادات إلكترونية بـ QR Code",
      "بوابات دفع واشتراكات شهرية بالدورات",
      "منتدى للنقاش والأسئلة بين الطلاب والمدربين",
    ],
    techStack: ["React", "Video Stream Engine", "PDF Generator", "TypeScript"],
    gradient: "from-blue-900/40 via-indigo-950/60 to-background",
    mockupAccent: "border-blue-400/30",
    rating: 5,
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center">
        <div className="h-[30rem] w-[60rem] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>معرض الأعمال وقصص النجاح</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            مشاريع نالت ثقة رواد الأعمال وحققت <span className="text-primary-highlight">أرقامًا قياسية</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            استعرض نماذج من أعمالنا البرمجية والتصميمية التي بنيناها وفق أعلى المعايير الهندسية
            العالمية لتحقق لعملائنا عوائد استثمارية ملموسة.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "border border-primary bg-primary text-primary-foreground shadow-cta"
                  : "border border-white/10 bg-secondary/40 text-secondary-foreground hover:border-primary/40 hover:bg-secondary/70 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
            >
              {/* Project Mockup Visual Header */}
              <div
                className={`relative h-60 w-full overflow-hidden bg-gradient-to-b ${project.gradient} p-6 border-b border-white/10 flex flex-col justify-between`}
              >
                {/* Visual Glass Frame Representation */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {project.categoryName}
                  </span>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[0.6875rem] font-bold text-emerald-400 border border-emerald-500/30">
                    <Zap className="h-3 w-3" />
                    <span>{project.metrics.value}</span>
                  </div>
                </div>

                {/* Center Stylized Interface Mockup Graphic */}
                <div className="mx-auto w-full max-w-[85%] rounded-t-xl border border-white/15 bg-black/60 p-3 shadow-2xl backdrop-blur-lg transform transition-transform duration-500 group-hover:scale-105">
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
                    <div className="h-2 w-2 rounded-full bg-red-400/80" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
                    <div className="h-2 w-2 rounded-full bg-green-400/80" />
                    <div className="mx-auto h-2 w-24 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-primary/40 animate-pulse" />
                    <div className="h-2 w-1/2 rounded bg-white/20" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-6 w-16 rounded bg-primary/30" />
                      <div className="h-6 w-12 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content Info */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="text-xs font-bold text-primary-highlight">{project.client}</div>
                  <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary-highlight transition-colors sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-secondary-foreground/80 sm:text-sm">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack & Action Modal */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/5 bg-background/60 px-2 py-0.5 text-[0.6875rem] font-mono font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="heroOutline"
                        className="w-full justify-center gap-2 text-xs font-bold cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>معاينة تفاصيل المشروع</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl border-white/10 bg-card/95 text-foreground backdrop-blur-2xl">
                      <DialogHeader className="text-right">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary-highlight">
                            {project.categoryName}
                          </span>
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(project.rating)].map((_, idx) => (
                              <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                        <DialogTitle className="mt-3 text-2xl font-black text-foreground">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-sm font-semibold text-primary-highlight">
                          {project.client}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-4 space-y-4 text-right">
                        <p className="text-sm leading-relaxed text-secondary-foreground/90">
                          {project.description}
                        </p>

                        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                          <div className="text-xs font-semibold text-muted-foreground">
                            {project.metrics.label}
                          </div>
                          <div className="text-2xl font-black text-primary-highlight">
                            {project.metrics.value}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-foreground">ما تم إنجازه في هذا المشروع:</h4>
                          <ul className="mt-2 space-y-2">
                            {project.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground/90">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                          <Button asChild variant="hero" className="flex-1">
                            <a href="#contact">
                              <span>طلب مشروع مماثل الآن</span>
                              <ArrowLeft className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
