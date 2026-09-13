import { useState, type FormEvent } from "react";
import { Send, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";

const siteTypeOptions = [
  "موقع شركة / تعريفي",
  "متجر إلكتروني",
  "نظام حجز مواعيد",
  "Landing Page",
  "تطبيق ويب",
  "غير متأكد",
];

const featureOptions = [
  "WhatsApp",
  "نموذج تواصل",
  "حجز مواعيد",
  "متجر",
  "دفع إلكتروني",
  "حسابات مستخدمين",
  "لوحة تحكم",
  "خرائط",
  "مدونة",
  "AI",
  "أخرى",
];

const designStatusOptions = [
  "لدي هوية بصرية",
  "أحتاج هوية بصرية",
  "لدي تصميم جاهز",
  "أحتاج UI/UX",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    businessType: "",
    siteType: siteTypeOptions[0],
    features: [] as string[],
    designStatus: designStatusOptions[0],
    details: "",
  });

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const featuresText =
      formData.features.length > 0 ? formData.features.join("، ") : "لم يتم التحديد";

    const message = `مرحبًا فزعة ويب 👋

أرغب في إنشاء موقع إلكتروني.

الاسم: ${formData.name.trim() || "غير محدد"}
الشركة / المشروع: ${formData.company.trim() || "غير محدد"}
رقم التواصل: ${formData.phone.trim() || "غير محدد"}
نوع النشاط: ${formData.businessType.trim() || "غير محدد"}
نوع الموقع: ${formData.siteType}
المميزات المطلوبة: ${featuresText}
الهوية والتصميم: ${formData.designStatus}
التفاصيل الإضافية: ${formData.details.trim() || "لا توجد تفاصيل إضافية"}

أرغب في مناقشة المشروع والحصول على عرض سعر مخصص.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 border-t border-border/40 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[920px] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            بدء المشروع
          </span>
          <h2
            id="contact-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            اطلب موقعك الآن
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            أخبرنا ببعض التفاصيل عن مشروعك، وسنساعدك في تحديد الحل المناسب.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-8 rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-10 backdrop-blur-xl"
        >
          {/* Basic Info */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="user-name" className="block text-sm font-semibold text-foreground">
                الاسم <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="user-name"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="اسمك الكريم"
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="company-name" className="block text-sm font-semibold text-foreground">
                اسم الشركة أو المشروع
              </label>
              <input
                type="text"
                id="company-name"
                name="organization"
                autoComplete="organization"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="اسم مشروعك أو علامتك"
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="user-phone" className="block text-sm font-semibold text-foreground">
                رقم التواصل / WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="user-phone"
                name="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="رقم الهاتف أو الواتساب"
                dir="ltr"
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-right text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="business-type" className="block text-sm font-semibold text-foreground">
                نوع النشاط
              </label>
              <input
                type="text"
                id="business-type"
                name="business-type"
                autoComplete="off"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                placeholder="مثال: مقاولات، عطور، مطعم، خدمات"
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Website Type */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-sm font-semibold text-foreground">
              نوع الموقع المطلوب
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {siteTypeOptions.map((type) => {
                const isSelected = formData.siteType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, siteType: type })}
                    className={`flex items-center justify-between rounded-xl border p-3.5 text-right text-xs font-semibold transition-all sm:text-sm ${
                      isSelected
                        ? "border-primary bg-primary/15 text-primary shadow-sm"
                        : "border-border/60 bg-background/50 text-secondary-foreground hover:border-border"
                    }`}
                  >
                    <span>{type}</span>
                    {isSelected && <Check className="h-4 w-4 shrink-0 text-primary" />}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Required Features */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-sm font-semibold text-foreground">
              المميزات المطلوبة (يمكن اختيار أكثر من ميزة)
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {featureOptions.map((feature) => {
                const isChecked = formData.features.includes(feature);
                return (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggleFeature(feature)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all sm:text-sm ${
                      isChecked
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border/60 bg-background/50 text-secondary-foreground hover:border-border"
                    }`}
                  >
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                        isChecked
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/40 bg-transparent"
                      }`}
                    >
                      {isChecked && <Check className="h-3 w-3" />}
                    </div>
                    <span>{feature}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Identity & Design Status */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-sm font-semibold text-foreground">
              الهوية والتصميم
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {designStatusOptions.map((status) => {
                const isSelected = formData.designStatus === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setFormData({ ...formData, designStatus: status })}
                    className={`rounded-xl border p-3 text-center text-xs font-semibold transition-all sm:text-sm ${
                      isSelected
                        ? "border-primary bg-primary/15 text-primary shadow-sm"
                        : "border-border/60 bg-background/50 text-secondary-foreground hover:border-border"
                    }`}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Additional Details */}
          <div>
            <label htmlFor="details" className="block text-sm font-semibold text-foreground">
              تفاصيل إضافية
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="اكتب أي ملاحظات أو متطلبات خاصة ترغب في إضافتها لمشروعك..."
              className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Submit */}
          <div>
            <Button
              type="submit"
              variant="hero"
              size="hero"
              className="w-full gap-2.5 py-4 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              <MessageSquare className="h-5 w-5" />
              <span>إرسال الطلب عبر WhatsApp</span>
              <Send className="h-4 w-4 rotate-180" />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              سيتم فتح تطبيق واتساب مباشرة مع تجهيز كافة بيانات طلبك دون الحاجة لإعادة كتابتها.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
