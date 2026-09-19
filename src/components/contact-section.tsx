import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, CheckCircle2, Instagram, Phone } from "lucide-react";
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
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto text-center flex flex-col items-center">
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            لنبدأ العمل على مشروعك
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            أخبرنا عن مشروعك واحتياجاتك، وسنتواصل معك لمناقشة التفاصيل وتحديد الحل المناسب.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-blue-500/70 bg-card/20 p-6 sm:p-10 backdrop-blur-sm shadow-[0_0_25px_rgba(59,130,246,0.15)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  الاسم
                </label>
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
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  رقم الجوال
                </label>
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
              <label htmlFor="projectType" className="text-sm font-semibold text-foreground">
                نوع المشروع (اختياري)
              </label>
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
              <label htmlFor="details" className="text-sm font-semibold text-foreground">
                تفاصيل المشروع (اختياري)
              </label>
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
              <Button
                type="submit"
                variant="hero"
                size="hero"
                className="w-full text-base sm:text-lg group animate-pulse-button"
              >
                <span className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
                  إرسال الطلب
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-8 w-8 text-white fill-current"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-32 0-63.1-8.6-90.5-24.8l-6.5-3.8-67.2 17.6 17.9-65.5-4.2-6.7C55.6 303.3 46.5 264.4 46.5 224c0-97.9 79.7-177.6 177.6-177.6 47.4 0 92.1 18.5 125.6 52 33.5 33.5 52 78.2 52 125.6 0 97.9-79.7 177.6-177.7 177.6zM320.7 274.6c-5.3-2.7-31.5-15.5-36.3-17.3-4.9-1.8-8.4-2.7-12 2.7-3.6 5.3-13.8 17.3-16.9 20.8-3.1 3.6-6.2 4-11.6 1.3-5.3-2.7-22.5-8.3-42.8-26.4-15.8-14.1-26.5-31.5-29.7-36.8-3.1-5.3-.3-8.2 2.4-10.8 2.4-2.4 5.3-6.2 8-9.3 2.7-3.1 3.6-5.3 5.3-8.9 1.8-3.6.9-6.7-.4-9.3-1.3-2.7-12-28.9-16.4-39.6-4.3-10.4-8.7-9-12-9.1-3.1-.1-6.7-.1-10.2-.1-3.6 0-9.3 1.3-14.2 6.7-4.9 5.3-18.6 18.2-18.6 44.4s19.1 51.5 21.8 55.1c2.7 3.6 37.6 57.4 91 80.5 12.7 5.5 22.6 8.8 30.3 11.3 12.7 4 24.3 3.4 33.5 2.1 10.3-1.5 31.5-12.9 35.9-25.3 4.4-12.4 4.4-23.1 3.1-25.3-1.3-2.2-4.9-3.5-10.2-6.2z" />
                  </svg>
                </span>
              </Button>
            </div>

            <div className="pt-5 flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm gap-3">
                <div className="h-[1px] flex-1 bg-gradient-to-l from-blue-500 via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-thread-glow" />
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap select-none">
                  تابعنا عبر منصاتنا الرسمية
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-thread-glow" />
              </div>

              <div className="flex items-center justify-center gap-3.5">
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  aria-label="اتصال مباشر"
                  className="group inline-flex items-center justify-center rounded-full border border-border/50 bg-background/60 p-2.5 text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <Phone className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="تواصل معنا عبر واتساب"
                  className="group inline-flex items-center justify-center rounded-full border border-border/50 bg-background/60 p-2.5 text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/Fazaa_Web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="حساب فزعة ويب على انستقرام"
                  className="group inline-flex items-center justify-center rounded-full border border-border/50 bg-background/60 p-2.5 text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
