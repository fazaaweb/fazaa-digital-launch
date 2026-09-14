
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً، أريد طلب موقع إلكتروني.
الاسم: ${formData.name}
الجوال: ${formData.phone}
نوع المشروع: ${formData.projectType}
التفاصيل: ${formData.details}`;
    
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto text-center flex flex-col items-center">
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            لنبدأ العمل على مشروعك
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            أخبرنا عن مشروعك واحتياجاتك، وسنتواصل معك لمناقشة التفاصيل وتحديد الحل المناسب.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-border/40 bg-card/20 p-6 sm:p-10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">الاسم</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="اسمك الكريم"
                  className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">رقم الجوال</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="+966 5X XXX XXXX"
                  className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-right"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm font-semibold text-foreground">نوع المشروع (اختياري)</label>
              <select
                id="projectType"
                className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-base text-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="">اختر نوع المشروع...</option>
                <option value="موقع شركة">موقع شركة أو مؤسسة</option>
                <option value="متجر إلكتروني">متجر إلكتروني</option>
                <option value="تطبيق ويب">تطبيق ويب / لوحة تحكم</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-semibold text-foreground">تفاصيل المشروع (اختياري)</label>
              <textarea
                id="details"
                rows={4}
                placeholder="حدثنا باختصار عن فكرتك..."
                className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="hero" size="hero" className="w-full text-base sm:text-lg group">
                <span className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  إرسال الطلب عبر واتساب
                  <MessageSquare className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
