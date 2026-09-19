import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative z-10 bg-card py-24 sm:py-32 border-t border-border/20 overflow-hidden">
      {/* Dark elegant background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          مستعد للبدء؟
        </h2>
        <p className="max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed mb-10">
          خطوة واحدة تفصلك عن إطلاق هويتك الرقمية بصورة احترافية تعكس جودة أعمالك وتجذب المزيد من
          العملاء.
        </p>

        <div className="relative">
          <span className="absolute -inset-2 -z-10 animate-[pulse_4s_ease-in-out_infinite] rounded-xl bg-primary/20 blur-xl" />
          <Button
            asChild
            variant="hero"
            size="hero"
            className="group text-lg px-8 shadow-2xl shadow-primary/20"
          >
            <a href="#contact">
              <span className="absolute inset-0 -z-10 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                اطلب موقعك الآن
                <ArrowLeft className="h-5 w-5" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
