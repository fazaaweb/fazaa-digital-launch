import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "موقع شركة أو مؤسسة",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `مرحباً فريق فزعة ويب 👋
لدي رغبة في استشارة وطلب مشروع جديد:
👤 الاسم: ${formData.name}
📱 رقم التواصل: ${formData.phone}
📌 نوع المشروع: ${formData.projectType}
📝 التفاصيل: ${formData.details || "أرغب في مناقشة التفاصيل معكم"}

أرجو التواصل معي لبدء الترتيبات. شكراً لكم!`;

    const whatsappUrl = `https://wa.me/967777000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[30rem] w-[50rem] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ابدأ مشروعك الآن</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            دعنا نصنع لمشروعك حضورًا رقميًا <span className="text-primary-highlight">يخطف الأنظار</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            تواصل معنا اليوم للحصول على استشارة فنية مجانية وعرض سعر مخصص لمشروعك.
            فريقنا الهندسي جاهز للإجابة على كافة استفساراتك.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Contact Details & Value Props (5 Cols) */}
          <div className="flex flex-col justify-between space-y-8 rounded-3xl border border-white/10 bg-card/60 p-8 sm:p-10 backdrop-blur-2xl lg:col-span-5 shadow-xl">
            <div>
              <h3 className="text-2xl font-black text-foreground">قنوات التواصل المباشر</h3>
              <p className="mt-2 text-xs sm:text-sm text-secondary-foreground/80 leading-relaxed">
                يسعدنا الرد على استفساراتك ومناقشة تفاصيل فكرتك عبر القنوات التالية:
              </p>

              <div className="mt-8 space-y-4">
                {/* WhatsApp Channel */}
                <a
                  href="https://wa.me/967777000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D8%B2%D8%B9%D8%A9%20%D9%88%D9%8A%D8%A8%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/15"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">محادثة واتساب مباشرة</div>
                    <div className="text-sm font-bold text-foreground">تواصل فوري مع فريق المبيعات</div>
                  </div>
                </a>

                {/* Email Channel */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-highlight">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">البريد الإلكتروني الرسمي</div>
                    <div className="text-sm font-bold text-foreground">contact@fazaaweb.com</div>
                  </div>
                </div>

                {/* Response Time Guarantee */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">سرعة الاستجابة</div>
                    <div className="text-sm font-bold text-foreground">نرد خلال أقل من 15 دقيقة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary-highlight shrink-0" />
                  <span>سرية وأمان تام للبيانات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>استشارة هندسية مجانية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Request Form (7 Cols) */}
          <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 sm:p-10 backdrop-blur-2xl lg:col-span-7 shadow-2xl">
            <h3 className="text-2xl font-black text-foreground">أرسل تفاصيل مشروعك</h3>
            <p className="mt-1 text-xs sm:text-sm text-secondary-foreground/80">
              املأ النموذج أدناه وسيقوم مهندسونا بالتواصل معك ودراسة طلبك فورًا.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-3 text-xl font-bold text-foreground">تم تحويل طلبك بنجاح!</h4>
                <p className="mt-2 text-xs sm:text-sm text-secondary-foreground">
                  تم فتح محادثة الواتساب مع فريقنا. سنتواصل معك فورًا لمناقشة كافة التفاصيل.
                </p>
                <Button
                  variant="heroOutline"
                  className="mt-5"
                  onClick={() => setSubmitted(false)}
                >
                  إرسال طلب آخر
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2 text-right">
                    <Label htmlFor="name" className="text-xs font-bold text-foreground">
                      الاسم الكريم *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="مثال: عبدالله اليافعي"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-white/15 bg-background/60 text-right focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2 text-right">
                    <Label htmlFor="phone" className="text-xs font-bold text-foreground">
                      رقم الهاتف / واتساب *
                    </Label>
                    <Input
                      id="phone"
                      required
                      type="tel"
                      placeholder="مثال: +967 777 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-white/15 bg-background/60 text-right focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <Label htmlFor="projectType" className="text-xs font-bold text-foreground">
                    نوع المشروع المطلوب
                  </Label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-background/60 px-3 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="موقع شركة أو مؤسسة" className="bg-card text-foreground">
                      موقع شركة أو مؤسسة متكامل
                    </option>
                    <option value="متجر إلكتروني ذكي" className="bg-card text-foreground">
                      متجر إلكتروني ذكي متعدد الدفع
                    </option>
                    <option value="صفحة هبوط تسويقية (Landing Page)" className="bg-card text-foreground">
                      صفحة هبوط تسويقية سينمائية
                    </option>
                    <option value="منصة ويب مخصصة أو تطبيق SaaS" className="bg-card text-foreground">
                      منصة ويب مخصصة أو تطبيق SaaS
                    </option>
                    <option value="إعادة تصميم وتطوير موقع حالي" className="bg-card text-foreground">
                      إعادة تصميم وتطوير موقع حالي
                    </option>
                  </select>
                </div>

                <div className="space-y-2 text-right">
                  <Label htmlFor="details" className="text-xs font-bold text-foreground">
                    نبذة عن فكرة المشروع أو متطلباتك
                  </Label>
                  <Textarea
                    id="details"
                    rows={4}
                    placeholder="اكتب نبذة موجزة عن فكرتك، الميزات المستهدفة، أو أي مواقع تعجبك وتود تصميمًا بمستواها..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="border-white/15 bg-background/60 text-right focus-visible:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="hero"
                  className="w-full justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>إرسال الطلب وبدء المحادثة الفورية</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
