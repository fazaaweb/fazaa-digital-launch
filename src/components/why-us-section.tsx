import { Check, Sparkles, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  fazaa: string;
  traditional: string;
  fazaaGood: boolean;
}

const comparisons: ComparisonRow[] = [
  {
    feature: "المعمارية والكود البرمجي",
    fazaa: "كود نظيف مخصص 100% بأحدث تقنيات الويب (React 19 & TypeScript)",
    traditional: "قوالب جاهزة مليئة بالحشو والإضافات البطيئة والثقيلة",
    fazaaGood: true,
  },
  {
    feature: "سرعة تحميل الصفحات (Page Speed)",
    fazaa: "أقل من 0.4 ثانية (تحميل فوري يمنع هروب الزوار)",
    traditional: "4 إلى 7 ثوانٍ (فقدان أكثر من 50% من الزوار المحتملين)",
    fazaaGood: true,
  },
  {
    feature: "التصميم وتجربة المستخدم (UI/UX)",
    fazaa: "تصميم سينمائي فخم فريد لعلامتك مع انسيابية تامة",
    traditional: "تصميم مكرر يمتلكه مئات المنافسين بتجربة مستخدم عادية",
    fazaaGood: true,
  },
  {
    feature: "الأمان والحماية من الاختراق",
    fazaa: "أمان بنكي مشفر وخالٍ من ثغرات الإضافات الخارجية",
    traditional: "معرض دائمًا للثغرات والاختراق بسبب كثرة الـ Plugins",
    fazaaGood: true,
  },
  {
    feature: "التهيئة لمحركات البحث (SEO)",
    fazaa: "بنية برمجية معيارية ترشح موقعك للمركز الأول في قوقل",
    traditional: "أخطاء أرشفة وبطء يؤخر ظهور الموقع في نتائج البحث",
    fazaaGood: true,
  },
  {
    feature: "ملكية الكود والتوسع المستقبلي",
    fazaa: "ملكية كاملة للكود مع حرية التوسع والتعديل بلا قيود",
    traditional: "ارتهان لاشتراكات المنصات وتكاليف صيانة وتحديثات مستمرة",
    fazaaGood: true,
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center">
        <div className="h-[25rem] w-[50rem] rounded-full bg-cyan-600/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>معايير الجودة والتميز الهندسي</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            لماذا تختار <span className="text-primary-highlight">فزعة ويب</span> لمشروعك القادم؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            اكتشف الفرق الهندسي والتصميمي بين منصات فزعة ويب المخصصة والحلول التقليدية المنتشرة في السوق.
          </p>
        </div>

        {/* Live Performance Comparison Meter */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Fazaa Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card/80 p-8 shadow-[0_20px_50px_rgba(59,130,246,0.2)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
                  ف
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">معمارية فزعة ويب المخصصة</h3>
                  <div className="text-xs font-semibold text-primary-highlight">Custom Next-Gen Stack</div>
                </div>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                100/100 Core Web Vitals
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                <div className="text-2xl font-black text-emerald-400 sm:text-3xl">0.3s</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">سرعة التحميل</div>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                <div className="text-2xl font-black text-primary-highlight sm:text-3xl">100%</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">كود مخصص</div>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                <div className="text-2xl font-black text-blue-400 sm:text-3xl">A+</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">درجة الأمان</div>
              </div>
            </div>
          </div>

          {/* Traditional Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-8 opacity-80 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-muted-foreground">القوالب الجاهزة والحلول التقليدية</h3>
                <div className="text-xs font-medium text-muted-foreground/70">Traditional Template Engines</div>
              </div>
              <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                أداء ضعيف وتراجع
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/5 bg-background/50 p-3">
                <div className="text-2xl font-black text-red-400 sm:text-3xl">5.4s</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">بطء وثقل ملحوظ</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-background/50 p-3">
                <div className="text-2xl font-black text-yellow-400 sm:text-3xl">30+</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">إضافات مكدسة</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-background/50 p-3">
                <div className="text-2xl font-black text-red-400 sm:text-3xl">C-</div>
                <div className="mt-1 text-[0.6875rem] font-medium text-muted-foreground">ثغرات وتحديثات</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-card/60 shadow-xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="border-b border-white/10 bg-secondary/50 text-xs font-bold text-foreground sm:text-sm">
                  <th className="p-4 sm:p-5">المعيار الهندسي والتجاري</th>
                  <th className="bg-primary/10 p-4 text-primary-highlight sm:p-5">منصات فزعة ويب المخصصة</th>
                  <th className="p-4 text-muted-foreground sm:p-5">المواقع والقوالب التقليدية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/5">
                    <td className="p-4 font-bold text-foreground sm:p-5">{row.feature}</td>
                    <td className="bg-primary/5 p-4 font-medium text-secondary-foreground sm:p-5">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span>{row.fazaa}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground sm:p-5">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                          <X className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
