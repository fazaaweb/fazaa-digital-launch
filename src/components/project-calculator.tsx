import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  DollarSign,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectType {
  id: string;
  name: string;
  description: string;
  baseDays: number;
  icon: typeof Rocket;
}

interface FeatureAddon {
  id: string;
  name: string;
  description: string;
  days: number;
  icon: typeof Zap;
}

const projectTypes: ProjectType[] = [
  {
    id: "landing",
    name: "موقع تعريفي سينمائي (Landing Page)",
    description: "صفحة هبوط فاخرة موجهة لزيادة التحويل وعرض مشروعك باحترافية",
    baseDays: 4,
    icon: Sparkles,
  },
  {
    id: "corporate",
    name: "موقع شركة ومؤسسة متكامل",
    description: "موقع شامل للخدمات، الفريق، سابقة الأعمال، ونظام طلب العروض",
    baseDays: 7,
    icon: Rocket,
  },
  {
    id: "ecommerce",
    name: "متجر إلكتروني ذكي فائق السرعة",
    description: "متجر متكامل بوابات دفع، إدارة مخزون، وسلة شراء بنقرة واحدة",
    baseDays: 10,
    icon: ShoppingBag,
  },
  {
    id: "webapp",
    name: "منصة ويب مخصصة أو تطبيق SaaS",
    description: "نظام تفاعلي خاص مع لوحة تحكم، تسجيل مستخدمين، وحسابات",
    baseDays: 14,
    icon: Layers,
  },
];

const featureAddons: FeatureAddon[] = [
  {
    id: "payments",
    name: "بوابات دفع إلكتروني (Mada, Apple Pay, Visa)",
    description: "ربط دفع آمن ومشفر بنقرة واحدة",
    days: 2,
    icon: ShieldCheck,
  },
  {
    id: "multilingual",
    name: "دعم لغات متعددة (عربي / إنجليزي)",
    description: "تبديل فوري للغات مع مراعاة اتجاه النصوص RTL / LTR",
    days: 2,
    icon: Globe2,
  },
  {
    id: "seo",
    name: "تهيئة محركات البحث المتقدمة (SEO Pro)",
    description: "أرشفة قوقل، Schema Markup، وسرعة 100%",
    days: 2,
    icon: Zap,
  },
  {
    id: "ai_bot",
    name: "مساعد ذكي للرد الآلي (AI Chatbot)",
    description: "بوت مدرب على بيانات مشروعك للرد 24/7",
    days: 3,
    icon: Bot,
  },
  {
    id: "booking",
    name: "نظام حجز مواعيد وإدارة تقويم آلي",
    description: "جدولة المواعيد مع تنبيهات واتساب تلقائية",
    days: 2,
    icon: Calendar,
  },
];

export function ProjectCalculator() {
  const [selectedType, setSelectedType] = useState<string>("corporate");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["seo", "payments"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];

  const totalDays =
    currentType.baseDays +
    selectedAddons.reduce((acc, addonId) => {
      const addon = featureAddons.find((a) => a.id === addonId);
      return acc + (addon ? addon.days : 0);
    }, 0);

  // Generate customized WhatsApp pre-filled message
  const getWhatsAppUrl = () => {
    const selectedAddonNames = selectedAddons
      .map((id) => featureAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join("، ");

    const text = `مرحباً فريق فزعة ويب 👋
أرغب في الاستفسار عن تنفيذ مشروع جديد:
📌 نوع المشروع: ${currentType.name}
✨ الميزات المطلوبة: ${selectedAddonNames || "الأساسية"}
⏱️ مدة التنفيذ المتوقعة: حوالي ${totalDays} أيام عمل

أرجو تزويدي بعرض سعر تفصيلي وبدء التنسيق. شكراً لكم!`;

    return `https://wa.me/967777000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-highlight backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>حاسبة ومهيئ المشروع التفاعلي</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            هيئ ميزات مشروعك واحصل على <span className="text-primary-highlight">خطة فورية</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            اختر نوع الموقع والميزات التي تحتاجها لتحصل على تقدير فوري لمدة التنفيذ وخطة العمل،
            مع إمكانية إرسال اختياراتك مباشرة لفريقنا لبدء التنفيذ فورًا.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left / Main Configurator (8 Cols) */}
          <div className="space-y-8 lg:col-span-8">
            {/* Step 1: Project Type Selection */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                  1
                </span>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  اختر نوع المنصة أو الموقع:
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`group relative flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-[0_8px_24px_rgba(59,130,246,0.15)]"
                          : "border-white/10 bg-card/40 hover:border-white/25 hover:bg-card/70"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-white/10 bg-white/5 text-primary-highlight group-hover:border-primary/40"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground sm:text-base">
                          {type.name}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Features Selection */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                  2
                </span>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  حدد الميزات الإضافية المطلوبة:
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featureAddons.map((addon) => {
                  const Icon = addon.icon;
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex cursor-pointer items-start gap-3.5 rounded-2xl border p-4 transition-all duration-200 ${
                        isChecked
                          ? "border-primary/70 bg-primary/10"
                          : "border-white/10 bg-card/40 hover:border-white/20 hover:bg-card/60"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isChecked
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-white/20 bg-background"
                        }`}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground sm:text-sm">
                            {addon.name}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[0.75rem] text-muted-foreground leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right / Live Estimation Summary (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-primary/40 bg-card/80 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-bold text-foreground">ملخص التهيأة المباشرة</span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  حساب فوري
                </span>
              </div>

              {/* Summary Items */}
              <div className="mt-5 space-y-3.5 text-xs text-secondary-foreground/90">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">نوع المنصة:</span>
                  <span className="font-bold text-foreground">{currentType.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">الميزات المختارة:</span>
                  <span className="font-bold text-primary-highlight">
                    {selectedAddons.length} ميزات إضافية
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">المعمارية:</span>
                  <span className="font-bold text-foreground">React 19 + Fast API</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">الاستضافة والحماية:</span>
                  <span className="font-bold text-foreground">مشمولة مع شهادة SSL</span>
                </div>
              </div>

              {/* Time & Price Highlights */}
              <div className="mt-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-primary-highlight">
                  <Clock className="h-4 w-4" />
                  <span>المدة التقديرية للإنجاز والتسليم:</span>
                </div>
                <div className="mt-1 text-2xl font-black text-foreground">
                  {totalDays} - {totalDays + 3} أيام عمل
                </div>
                <p className="mt-1 text-[0.6875rem] text-muted-foreground leading-normal">
                  مع تسليم مراحل العمل للمعاينة الحية خطوة بخطوة قبل الإطلاق النهائي.
                </p>
              </div>

              {/* Guaranteed Service Points */}
              <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-[0.75rem] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>دعم فني مجاني ومتابعة مستمرة بعد الإطلاق</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>تسليم كامل الكود البرمجي وصلاحيات الملكية 100%</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-6">
                <Button asChild variant="hero" size="hero" className="w-full justify-center gap-2">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                    <span>طلب هذا التكوين عبر واتساب</span>
                  </a>
                </Button>
                <div className="mt-2.5 text-center text-[0.6875rem] text-muted-foreground">
                  رد سريع من فريقنا الهندسي خلال دقائق معدودة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
