import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  Check,
  Code2,
  Database,
  Globe2,
  Layers,
  Palette,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Code2;
  badge: string;
  features: string[];
  techStack: string[];
  highlightMetric: string;
  color: string;
}

const services: Service[] = [
  {
    id: "web-dev",
    title: "تطوير المواقع والمنصات المخصصة",
    subtitle: "Custom Web & Full-Stack Architecture",
    description:
      "نبني مواقع ومنصات رقمية متقدمة من الصفر بأحدث تقنيات الويب الحديثة (React، TypeScript، Next.js) لتقديم سرعة خارقة، كود نظيف، وحماية لا تُخترق.",
    icon: Code2,
    badge: "الأكثر طلبًا",
    features: [
      "معمارية كود نظيفة بدون أي قوالب بطيئة",
      "سرعة تحميل أقل من نصف ثانية (0.4s)",
      "لوحة تحكم سهلة باللغة العربية لإدارة المحتوى",
      "توافق بنسبة 100% مع كافة الشاشات والأجهزة",
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Next.js"],
    highlightMetric: "سرعة 100/100 في قوقل",
    color: "from-blue-600/30 via-cyan-500/10 to-transparent",
  },
  {
    id: "ui-ux",
    title: "تصميم واجهات وتجربة المستخدم الفاخرة",
    subtitle: "Cinematic UI/UX & Motion Design",
    description:
      "نصمم هوية بصرية وتجربة مستخدم سينمائية تأسر زوارك من اللحظة الأولى، مع انسيابية تامة وتدرجات متناغمة تعكس فخامة واحترافية علامتك التجارية.",
    icon: Palette,
    badge: "تصميم نخبوي",
    features: [
      "دراسة دقيقة لسيكولوجيا العميل ومسار التحويل",
      "تفاعلات وانميشن حركي سلس وفاخر (Micro-Interactions)",
      "نظام تصميم متكامل (Design System) مخصص لك",
      "دعم الوضع الليلي والنهاري بأناقة متناهية",
    ],
    techStack: ["Figma", "Motion UI", "Design Systems", "Typography"],
    highlightMetric: "معدل تفاعل +300%",
    color: "from-cyan-500/30 via-blue-500/10 to-transparent",
  },
  {
    id: "ecommerce",
    title: "المتاجر الإلكترونية المتكاملة فائقة التحويل",
    subtitle: "High-Conversion E-Commerce Platforms",
    description:
      "متجر إلكتروني ذكي مصمم لزيادة المبيعات وتسهيل الشراء بنقرة واحدة، مع ربط بوابات الدفع الإلكتروني، إدارة المخزون، وتتبع الشحنات بسلاسة.",
    icon: ShoppingBag,
    badge: "مضاعفة المبيعات",
    features: [
      "ربط آمن لكافة بوابات الدفع (مدى، آبل باي، فيزا، ماستركارد)",
      "شراء سريع بدون تعقيد بخطوة واحدة (1-Click Checkout)",
      "إشعارات تلقائية للطلبات عبر واتساب والبريد",
      "إدارة العروض والكوبونات وحملات الخصم بذكاء",
    ],
    techStack: ["Stripe / Mada", "Apple Pay", "WhatsApp API", "Cloud Database"],
    highlightMetric: "+240% متوسط نمو المبيعات",
    color: "from-indigo-600/30 via-blue-500/10 to-transparent",
  },
  {
    id: "seo-growth",
    title: "تحسين محركات البحث والنمو الرقمي",
    subtitle: "Technical SEO & High-Intent Copywriting",
    description:
      "نهيئ موقعك للظهور في الصفحة الأولى في قوقل من خلال بنية تقنية محكمة (Technical SEO)، نصوص بيعية مقنعة، وسرعة تجعل محركات البحث تفضله على منافسيك.",
    icon: TrendingUp,
    badge: "تصدر قوقل",
    features: [
      "تهيئة البنية التقنية وهياكل البيانات (Schema Markup)",
      "أرشفة فورية لصفحات الموقع وتوليد خرائط XML تلقائيًا",
      "صياغة نصوص تسويقية مقنعة تحفز العميل على الاتصال",
      "ربط متكامل مع إحصائيات قوقل (Google Analytics 4 & Search Console)",
    ],
    techStack: ["Google Analytics", "Search Console", "Schema.org", "Core Web Vitals"],
    highlightMetric: "أرشفة وتصدر أسرع بـ 4 أضعاف",
    color: "from-blue-500/30 via-indigo-600/10 to-transparent",
  },
  {
    id: "cloud-security",
    title: "استضافة سحابية مدارة وحماية فائقة",
    subtitle: "Enterprise Cloud Hosting & 24/7 Security",
    description:
      "نوفر لمشروعك استضافة على خوادم سحابية عالمية فائقة السرعة مع شبكة توصيل المحتوى (CDN)، حماية من الهجمات، ونسخ احتياطي يومي مستمر.",
    icon: ShieldCheck,
    badge: "أمان بنكي",
    features: [
      "شهادة أمان SSL مشفرة مجانية مدى الحياة",
      "شبكة CDN عالمية تضمن فتح الموقع فورياً من أي بلد",
      "حماية متقدمة ضد هجمات حجب الخدمة (DDoS Protection)",
      "نسخ احتياطي تلقائي يومي مع دعم فني متواصل 24/7",
    ],
    techStack: ["Cloudflare Edge", "AWS / Global Nodes", "Auto-Backup", "SSL TLS 1.3"],
    highlightMetric: "استقرار وثبات 99.99%",
    color: "from-cyan-600/30 via-blue-600/10 to-transparent",
  },
  {
    id: "ai-automations",
    title: "تكامل الذكاء الاصطناعي وأتمتة الأعمال",
    subtitle: "AI Integrations & Workflow Automation",
    description:
      "ندمج أحدث أدوات الذكاء الاصطناعي في موقعك: من روبوتات الرد الذكي المخصصة لخدمة عملائك على مدار الساعة، إلى أتمتة جمع البيانات والطلبات.",
    icon: Bot,
    badge: "تقنيات المستقبل",
    features: [
      "مساعد ذكي مدرب على بيانات ومنتجات شركتك للرد على العملاء",
      "أتمتة إرسال العروض والفواتير ورسائل المتابعة عبر واتساب",
      "تكامل مع أنظمة الـ CRM وجداول قوقل لإدارة العملاء المحتملين",
      "تحليلات ذكية لسلوك الزوار لتقديم توصيات فورية لزيادة الأرباح",
    ],
    techStack: ["OpenAI API", "Webhook Automations", "WhatsApp CRM", "Smart Workflows"],
    highlightMetric: "توفير 70% من وقت خدمة العملاء",
    color: "from-blue-600/30 via-cyan-400/10 to-transparent",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  return (
    <section id="services" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[40rem] w-[50rem] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>حلول برمجية وتسويقية متكاملة</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            خدمات تصنع الفارق بين <span className="text-primary-highlight">الموقع العادي</span> والمنصة الرائدة
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            لا نكتفي بإنشاء موقع يعرض معلوماتك فقط، بل نبني لك منصة رقمية ذات أداء استثنائي وتصميم
            جذاب يحقق أهدافك التجارية ويحول الزوار إلى عملاء فعليين.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                  isActive
                    ? "border-primary/50 bg-card/80 shadow-[0_16px_40px_rgba(59,130,246,0.18)]"
                    : "border-white/10 bg-card/40 hover:border-white/20 hover:bg-card/60"
                } backdrop-blur-xl`}
              >
                {/* Radial Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${service.color} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary-highlight shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-highlight">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary-highlight sm:text-2xl">
                      {service.title}
                    </h3>
                    <div className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase font-mono">
                      {service.subtitle}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary-foreground/90 sm:text-sm">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-highlight">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Footer: Metric & Tech Stack */}
                <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between text-xs font-bold text-primary-highlight">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5" />
                      {service.highlightMetric}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-foreground transition-colors hover:text-primary-highlight"
                    >
                      <span>طلب الخدمة</span>
                      <ArrowLeft className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/5 bg-background/50 px-2 py-0.5 text-[0.6875rem] font-mono font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/20 via-card/80 to-primary/10 p-8 sm:p-10 backdrop-blur-xl text-center md:flex md:items-center md:justify-between md:text-right">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black text-foreground sm:text-3xl">
              هل لديك فكرة أو متطلب خاص لمشروعك؟
            </h4>
            <p className="mt-2 text-sm text-secondary-foreground/90 sm:text-base">
              نحن نبتكر حلولاً برمجية مخصصة بالكامل تناسب احتياجات نشاطك التجاري بدقة متناهية.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex shrink-0 justify-center">
            <Button asChild variant="hero" size="hero">
              <a href="#contact" className="flex items-center gap-2">
                <span>استشر مهندسينا مجانًا</span>
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
