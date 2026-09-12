import { CheckCircle, Quote, Sparkles, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  project: string;
  content: string;
  result: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "المهندس عادل الشميري",
    role: "رئيس مجلس الإدارة",
    company: "شركة رواند للتطوير العقاري",
    project: "بوابة عقارية ذكية مع خريطة تفاعلية",
    content:
      "العمل مع فزعة ويب كان نقطة تحول حقيقية لشركتنا. صمموا لنا منصة عقارية فاخرة وسريعة جداً أبهرت المستثمرين وساعدتنا في إغلاق صفقات كبرى وتوليد عملاء مؤهلين يومياً.",
    result: "+215% زيادة في طلبات المعاينة",
    rating: 5,
  },
  {
    name: "أ. سارة المنصوري",
    role: "المؤسس والمدير التنفيذي",
    company: "براند فخامة للعطور والمقتنيات",
    project: "متجر إلكتروني فاخر فائق السرعة",
    content:
      "سرعة المتجر خرافية وتجربة الشراء بضغطة زر مع آبل باي رفعت مبيعاتنا بأكثر من 300% في أول شهرين فقط. الاهتمام بأدق التفاصيل والجماليات السينمائية جعل موقعنا يضاهي أشهر الماركات العالمية.",
    result: "+320% نمو في المبيعات الإلكترونية",
    rating: 5,
  },
  {
    name: "د. إبراهيم العواضي",
    role: "المدير الطبي العام",
    company: "مجموعة النخبة الطبية والاستشارات",
    project: "منصة طبية ونظام حجز واستشارات",
    content:
      "نظام حجز المواعيد الفوري والواجهة المريحة خففت العبء عن موظفي الاستقبال بنسبة 70%، وحصلنا على إشادات مستمرة من المرضى والمراجعين لسهولة وسلاسة الموقع.",
    result: "70% تقليص في وقت الحجز والانتظار",
    rating: 5,
  },
  {
    name: "م. طارق القحطاني",
    role: "الشريك التقني والمؤسس",
    company: "منصة كلاودلينك للحلول السحابية",
    project: "تطبيق ويب SaaS مع لوحة تحكم حية",
    content:
      "نادراً ما تجد فريقاً يجمع بين الذوق التصميمي الفاخر والتمكن البرمجي العميق. كود نظيف، سرعة استجابة لا تتعدى 0.2 ثانية، والتزام كامل بالمواعيد. أنصح بالتعامل معهم بلا تردد.",
    result: "0.19s زمن استجابة البيانات الحية",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>آراء العملاء وقصص النجاح</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            شركاء نجاح يثقون في <span className="text-primary-highlight">إبداعنا وجودتنا</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            فخورون بما حققناه مع شركائنا في مختلف القطاعات، وهذه بعض تجاربهم الحقيقية مع منصات فزعة ويب.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/75 hover:shadow-[0_16px_40px_rgba(59,130,246,0.15)]"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30 transition-colors group-hover:text-primary-highlight" />
                </div>

                {/* Testimonial Quote */}
                <p className="mt-4 text-xs leading-relaxed text-secondary-foreground/90 sm:text-sm">
                  "{item.content}"
                </p>
              </div>

              {/* Client Info & Metric Result */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[0.6875rem] font-bold text-emerald-400">
                  <CheckCircle className="h-3 w-3 shrink-0" />
                  <span>{item.result}</span>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-bold text-foreground">{item.name}</div>
                  <div className="text-[0.6875rem] font-semibold text-primary-highlight">
                    {item.role} • {item.company}
                  </div>
                  <div className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
                    المشروع: {item.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
