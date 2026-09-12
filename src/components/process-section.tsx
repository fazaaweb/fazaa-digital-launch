import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Lightbulb;
  deliverables: string[];
  duration: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "التحليل الاستراتيجي وهندسة المتطلبات",
    subtitle: "Discovery & Strategy Blueprint",
    description:
      "نجلس معك لفهم طبيعة نشاطك التجاري، أهدافك البيعية، دراسة منافسيك، ورسم الخارطة الهندسية للموقع لتحديد هيكل الصفحات ومسار العميل.",
    icon: Lightbulb,
    deliverables: [
      "مستند مواصفات وخطة العمل الهندسية",
      "تحديد الهيكل التنظيمي للصفحات والمحتوى",
      "دراسة مسار التحويل (Conversion Funnel)",
    ],
    duration: "1 - 2 يوم",
  },
  {
    number: "02",
    title: "تصميم الواجهات والتجربة السينمائية",
    subtitle: "Cinematic UI/UX Prototyping",
    description:
      "نصمم هوية بصرية مخصصة وواجهات تفاعلية كاملة على Figma للمعاينة الحية وإجراء أي تعديلات حتى نصل للتصميم المثالي الذي يلبي طموحك.",
    icon: Palette,
    deliverables: [
      "تصميم كامل لشاشات الهاتف والكمبيوتر",
      "تدرجات لونية متناسقة ونظام خطوط فاخر",
      "معاينة تفاعلية حية قبل كتابة الكود",
    ],
    duration: "2 - 3 أيام",
  },
  {
    number: "03",
    title: "التطوير البرمجي وبناء المعمارية السريعة",
    subtitle: "High-Performance Full-Stack Coding",
    description:
      "تحويل التصاميم إلى منصة ويب فائقة السرعة بكود نظيف ومعياري (React 19 & TypeScript)، مع ربط قواعد البيانات وبوابات الدفع ولوحات التحكم.",
    icon: Code2,
    deliverables: [
      "كود برمجي معياري نظيف وخالٍ من الأخطاء",
      "لوحة تحكم سهلة لإدارة المحتوى والطلبات",
      "ربط آمن لبوابات الدفع الإلكتروني والرسائل",
    ],
    duration: "3 - 5 أيام",
  },
  {
    number: "04",
    title: "اختبارات الجودة والأمان والأداء",
    subtitle: "QA, Security & Core Web Vitals",
    description:
      "فحص شامل لكل أزرار الموقع، سرعة الاستجابة، توافق الشاشات على الآيفون والأندرويد وكل المتصفحات، وتأمين الموقع بشهادات الحماية.",
    icon: ShieldCheck,
    deliverables: [
      "تحقيق درجة 99%+ في مقاييس قوقل للسرعة",
      "فحص الحماية من الاختراق وتأمين النماذج",
      "ضمان تجربة مستخدم خالية من أي أخطاء",
    ],
    duration: "1 - 2 يوم",
  },
  {
    number: "05",
    title: "الإطلاق الرسمي والتدريب والدعم المستمر",
    subtitle: "Global Launch, Handover & Scaling",
    description:
      "نربط النطاق (Domain) الخاص بك، نطلق الموقع على الخوادم السحابية العالمية، ندربك على لوحة التحكم، ونبقى معك بدعم فني مستمر.",
    icon: Rocket,
    deliverables: [
      "إطلاق فوري وتهيئة الأرشفة في محرك قوقل",
      "تسليم كامل الملفات وصلاحيات الملكية",
      "دعم فني وضمان متواصل لراحة بالك",
    ],
    duration: "إطلاق فوري",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[35rem] w-[45rem] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>منهجية العمل والخطوات الهندسية</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            كيف نحول فكرتك إلى <span className="text-primary-highlight">منصة رقمية رائدة؟</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            نتبع منهجية عمل دقيقة وموثوقة تضمن لك الشفافية التامة، تسليم المشروع في الموعد المحدد،
            وتجربة سلسة من البداية وحتى ما بعد الإطلاق.
          </p>
        </div>

        {/* Steps Visual Navigator */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 ${
                  isActive
                    ? "scale-[1.02] border-primary bg-primary/15 shadow-[0_16px_35px_rgba(59,130,246,0.2)]"
                    : "border-white/10 bg-card/40 hover:border-white/20 hover:bg-card/70"
                } backdrop-blur-xl`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-2xl font-black ${
                      isActive ? "text-primary-highlight" : "text-muted-foreground/50"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-white/10 bg-white/5 text-primary-highlight group-hover:border-primary/30"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="mt-6">
                  <div className="font-mono text-xs font-semibold text-primary-highlight">
                    {step.duration}
                  </div>
                  <h3 className="mt-1 text-base font-bold text-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3 text-right">
                  <span className="inline-flex items-center gap-1 text-[0.6875rem] font-bold text-primary-highlight">
                    <span>عرض التفاصيل والمخرجات</span>
                    <ArrowLeft className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="mt-8 rounded-3xl border border-primary/30 bg-card/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold text-primary-highlight">
                  المرحلة {steps[activeStep].number}
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  المدة: {steps[activeStep].duration}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
                {steps[activeStep].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/90 sm:text-base">
                {steps[activeStep].description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
                  مخرجات هذه المرحلة المسلمة لك:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl border border-white/5 bg-background/50 p-3 text-xs text-foreground/90 sm:text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center lg:col-span-4">
              <Sparkles className="mx-auto h-8 w-8 text-primary-highlight" />
              <h4 className="mt-3 text-lg font-bold text-foreground">هل ترغب في بدء مرحلتك الأولى؟</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                فريقنا جاهز لدراسة فكرتك وتقديم خطة العمل مجانًا خلال 24 ساعة.
              </p>
              <div className="mt-5">
                <Button asChild variant="hero" size="hero" className="w-full justify-center">
                  <a href="#contact">ابدأ مشروعك معنا الآن</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
