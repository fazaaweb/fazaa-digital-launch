import { CheckCircle2, Cpu, Gauge, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: "99.8%",
    label: "معدل سرعة الأداء",
    detail: "Core Web Vitals مثالي على الهاتف والكمبيوتر",
    badge: "سرعة قياسية",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Trophy,
    value: "+240%",
    label: "زيادة معدل التحويل",
    detail: "تصاميم مبنية على سيكولوجيا الشراء وتوجيه العميل",
    badge: "عائد استثماري",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    icon: Cpu,
    value: "100%",
    label: "كود برمجي مخصص",
    detail: "خالٍ تماماً من القوالب البطيئة والحشو الزائد",
    badge: "معمارية نظيفة",
    gradient: "from-blue-600/20 to-indigo-500/10",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "استقرار وحماية مدارة",
    detail: "سيرفرات سحابية عالمية مع نسخ احتياطي وتشفير SSL",
    badge: "أمان بنكي",
    gradient: "from-indigo-500/20 to-cyan-500/10",
  },
];

const industries = [
  "المتاجر والبراندات الفاخرة",
  "الشركات والمؤسسات التجارية",
  "الشركات التقنية والمنصات",
  "القطاع العقاري والاستثماري",
  "المراكز الطبية والاستشارات",
  "المطاعم والضيافة الراقية",
];

export function TrustStats() {
  return (
    <section className="relative z-10 -mt-6 px-4 pb-20 sm:-mt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${stat.gradient} blur-2xl transition-all duration-500 group-hover:scale-150`}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-highlight transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[0.6875rem] font-medium text-primary-highlight">
                      <Sparkles className="h-2.5 w-2.5" />
                      {stat.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground/90 sm:text-base">
                      {stat.label}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries ticker banner */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-secondary/30 p-4 backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold text-foreground/90">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>خبرة متخصصة في قطاعات الأعمال الرائدة:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {industries.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-background/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <CheckCircle2 className="h-3 w-3 text-primary-highlight" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
