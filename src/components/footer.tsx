import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { company, navigation } from "@/lib/site-config";
import {
  ArrowUp,
  Globe2,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesList = [
    "تطوير المواقع والمنصات المخصصة",
    "تصميم واجهات وتجربة المستخدم (UI/UX)",
    "المتاجر الإلكترونية المتكاملة",
    "تحسين محركات البحث والنمو (SEO)",
    "الاستضافة السحابية والحماية المدارة",
    "حلول الذكاء الاصطناعي والأتمتة",
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-card/90 text-foreground backdrop-blur-2xl">
      {/* Top Banner */}
      <div className="border-b border-white/5 bg-gradient-to-r from-primary/10 via-card/50 to-primary/5 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-highlight">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-bold text-foreground">
                جاهز لنقل مشروعك إلى مستوى رقمي عالمي؟
              </div>
              <div className="text-xs text-muted-foreground">
                احصل على استشارة فورية وعرض سعر مخصص لمشروعك الآن.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/967777000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D8%B2%D8%B9%D8%A9%20%D9%88%D9%8A%D8%A8%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-cta transition-all hover:bg-primary-highlight hover:shadow-cta-hover"
          >
            <MessageSquare className="h-4 w-4" />
            <span>تواصل عبر واتساب مباشرة</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info (2 Cols) */}
          <div className="space-y-4 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={transparentLogo}
                alt="فزعة ويب"
                className="h-14 w-auto object-contain drop-shadow-logo"
              />
              <span className="text-xl font-black text-foreground">{company.name}</span>
            </a>

            <p className="max-w-sm text-xs leading-relaxed text-secondary-foreground/80 sm:text-sm">
              وكالة تصميم وبرمجة ويب رائدة متخصصة في بناء المنصات الرقمية والمتاجر الإلكترونية
              فائقة السرعة والأناقة السينمائية للشركات ورواد الأعمال.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>نستقبل المشاريع الجديدة حاليًا</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground">روابط سريعة</h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-primary-highlight"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground">خدماتنا</h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-secondary-foreground/80 transition-colors hover:text-primary-highlight"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-foreground">التواصل والمساندة</h4>
            <ul className="mt-4 space-y-3 text-xs text-secondary-foreground/80 sm:text-sm">
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>واتساب: +967 777 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-highlight" />
                <span>contact@fazaaweb.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 shrink-0 text-cyan-400" />
                <span>خدمة عملائنا في اليمن والخليج والوطن العربي</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} منصة{" "}
            <span className="font-bold text-foreground">فزعة ويب | Fazaa Web</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex cursor-pointer items-center gap-1.5 text-primary-highlight transition-colors hover:text-foreground"
            >
              <span>الرجوع لأعلى الصفحة</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
