import { useState, useMemo } from "react";
import { servicesData, servicesCategories, type ServiceCategory } from "@/data/services";
import { SectionHeading } from "@/components/section-heading";
import {
  Layers,
  Building2,
  ShoppingBag,
  Code2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  // Filter services according to the active tab
  const filteredServices = useMemo(() => {
    if (activeCategory === "all") {
      return servicesData;
    }
    return servicesData.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  // Icons map for category tabs
  const getCategoryIcon = (id: ServiceCategory) => {
    switch (id) {
      case "business":
        return <Building2 className="h-4 w-4" aria-hidden="true" />;
      case "commerce":
        return <ShoppingBag className="h-4 w-4" aria-hidden="true" />;
      case "custom":
        return <Code2 className="h-4 w-4" aria-hidden="true" />;
      default:
        return <Layers className="h-4 w-4" aria-hidden="true" />;
    }
  };

  // Determine which items to display on mobile
  // If 'all' is chosen and not expanded, show top 4 services on mobile, else show all filtered
  const mobileDisplayLimit = 4;
  const isMobileRestricted = activeCategory === "all" && !isExpandedMobile;
  const mobileServices = isMobileRestricted
    ? filteredServices.slice(0, mobileDisplayLimit)
    : filteredServices;

  const hiddenCountMobile = filteredServices.length - mobileDisplayLimit;

  const handleTabChange = (categoryId: ServiceCategory) => {
    setActiveCategory(categoryId);
    // Reset mobile expansion when switching tabs
    setIsExpandedMobile(false);
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="services-title"
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من خدمات وحلول الويب المصممة خصيصًا لتلبية احتياجات مختلف المشاريع والأعمال."
        />

        {/* Category Tabs: Mobile Horizontal Scrollable + Desktop Centered */}
        <div className="mt-10 sm:mt-12 flex justify-start sm:justify-center">
          <div
            role="tablist"
            aria-label="تصنيفات الخدمات"
            className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-1 max-w-full scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {servicesCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(category.id)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(var(--primary),0.35)] scale-[1.02]"
                      : "border border-border/50 bg-card/40 text-muted-foreground hover:border-primary/40 hover:bg-card/70 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`transition-colors ${isActive ? "text-primary-foreground" : "text-primary/70 group-hover:text-primary"}`}
                  >
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{category.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid: Desktop / Tablet view (shows all filtered items) */}
        <div className="hidden sm:grid mt-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-xl border border-border/40 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/40 hover:shadow-[0_8px_30px_rgba(var(--primary),0.06)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-bold text-primary/70 transition-colors group-hover:text-primary">
                      {service.number}
                    </span>
                    <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              {/* Direct Inquiry Link */}
              <div className="mt-5 pt-3 border-t border-border/20 flex items-center justify-between text-xs text-muted-foreground">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-primary/80 transition-all hover:text-primary hover:gap-1.5"
                >
                  <span>طلب الخدمة</span>
                  <ArrowLeft className="h-3 w-3" />
                </a>
              </div>

              {/* Subtle neon accent line */}
              <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-300 group-hover:via-primary/40" />
            </div>
          ))}
        </div>

        {/* Services List: Mobile view (optimized to prevent scroll fatigue) */}
        <div className="sm:hidden mt-8 flex flex-col gap-3">
          {mobileServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl border border-border/40 bg-card/25 p-4.5 transition-all duration-200 hover:border-primary/30 active:scale-[0.99]"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                    {service.number}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/80 hover:text-primary"
                >
                  <span>طلب</span>
                  <ArrowLeft className="h-3 w-3" />
                </a>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{service.description}</p>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          ))}

          {/* Progressive Disclosure Toggle Button on Mobile (Only for 'all' tab if more than 4) */}
          {activeCategory === "all" && hiddenCountMobile > 0 && (
            <button
              type="button"
              onClick={() => setIsExpandedMobile((prev) => !prev)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 py-3 px-4 text-xs font-bold text-primary transition-all duration-200 hover:bg-primary/20 active:scale-[0.98]"
            >
              {isExpandedMobile ? (
                <>
                  <span>عرض أقل</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>استعراض باقي الخدمات ({hiddenCountMobile} خدمات إضافية)</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Bottom Consulting Callout */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border/40 bg-gradient-to-r from-card/30 via-primary/5 to-card/30 p-5 sm:p-6 text-center sm:text-right">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              هل تبحث عن خدمة مخصصة أو تحتاج استشارة لمشروعك؟
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              فريق فزعة ويب مستعد لتحليل متطلباتك وتصميم الحل الأمثل الذي يناسب ميزانيتك وأهدافك.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.25)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] active:scale-95"
          >
            <span>احصل على استشارة مجانية</span>
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
