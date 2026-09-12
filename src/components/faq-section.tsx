import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كم يستغرق تصميم وتطوير الموقع الإلكتروني حتى الإطلاق؟",
    answer:
      "تستغرق صفحات الهبوط والمواقع التعريفية من 4 إلى 7 أيام عمل، بينما تستغرق المتاجر الإلكترونية والمنصات المخصصة من 8 إلى 14 يوم عمل وفقاً للميزات المطلوبة. نحرص دائمًا على مشاركة مراحل العمل أولاً بأول للمعاينة المباشرة قبل الإطلاق الرسمي.",
  },
  {
    question: "هل أمتلك كامل الكود البرمجي وحقوق الموقع بعد الانتهاء؟",
    answer:
      "نعم، بنسبة 100%. عند اكتمال المشروع نسلمك كامل الشيفرة المصدرية (Source Code)، قواعد البيانات، وصلاحيات النطاق والاستضافة بالكامل، ولن تكون مرتبطاً بأي قيود أو اشتراكات إجبارية.",
  },
  {
    question: "هل يشمل العمل الاستضافة، النطاق (Domain)، وشهادات الحماية؟",
    answer:
      "نعم، نضمن لمشروعك استضافة سحابية عالمية فائقة السرعة، شهادة حماية SSL مشفرة مدى الحياة، ربط النطاق المفضل لك، وتهيئة شبكة CDN لتسريع فتح الموقع من أي مكان في العالم.",
  },
  {
    question: "هل يمكنني تعديل محتوى الموقع وإضافة المنتجات بنفسي بسهولة؟",
    answer:
      "بالتأكيد. نزودك بلوحة تحكم عربية مخصصة وسلسة تتيح لك تعديل النصوص، رفع الصور، تحديث الأسعار، أو إضافة منتجات ومقالات بنقرة زر ودون الحاجة لأي معرفة تقنية أو برمجية، مع تدريب كامل لفريقك.",
  },
  {
    question: "كيف تضمنون سرعة الموقع الفائقة وظهوره في قوقل (SEO)؟",
    answer:
      "نبني الموقع من الصفر بكود برمجي مخصص (React 19 & TypeScript) خالٍ من أي قوالب بطيئة، ونلتزم بمعايير Core Web Vitals مع تهيئة هياكل بيانات قوقل (Schema Markup) لتضمن أسرع أرشفة وأفضل تصدر في نتائج البحث.",
  },
  {
    question: "ما هي طرق الدفع وآلية بدء العمل والتعاقد؟",
    answer:
      "آلية العمل واضحة ومقسمة على دفعات مرحلية (دفعة بدء العمل، دفعة بعد اعتماد التصاميم، ودفعة التسليم النهائي). نوفر خيارات دفع متعددة وموثوقة تشمل التحويلات البنكية الرسمية، البطاقات الائتمانية، والمحافظ الرقمية.",
  },
];

export function FaqSection() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-background via-card/20 to-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>الأسئلة الأكثر شيوعًا</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            كل ما تود معرفته عن <span className="text-primary-highlight">استثمارك الرقمي</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            إجابات واضحة وشفافة على أبرز تساؤلات عملائنا حول المدة، التكاليف، الدعم الفني، وطرق التنفيذ.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-card/60 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-white/10 bg-background/50 px-5 py-1 text-right transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-right text-sm font-bold text-foreground hover:no-underline hover:text-primary-highlight sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-xs leading-relaxed text-secondary-foreground/90 sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
