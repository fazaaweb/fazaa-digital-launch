import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ArrowLeft } from "lucide-react";

export function Footer() {
  const availableSocials = siteConfig.socialLinks.filter(
    (item) => item.isAvailable && item.name !== "WhatsApp" && item.name !== "اتصال مباشر"
  );

  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/95 pt-16 pb-12">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Footer Top / CTA */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border/60 bg-card/40 p-8 text-center sm:flex-row sm:text-right">
          <div>
            <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">
              لديك مشروع؟ لنتحدث عنه.
            </h3>
            <p className="mt-2 text-sm text-secondary-foreground/80">
              فريق فزعة ويب مستعد لتحويل فكرتك إلى واقع رقمي متكامل.
            </p>
          </div>
          <Button asChild variant="hero" size="hero" className="shrink-0 px-6">
            <a href="#contact">
              اطلب موقعك الآن
              <ArrowLeft className="mr-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={transparentLogo}
                width="1144"
                height="768"
                alt="فزعة ويب"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-secondary-foreground/85">
              {siteConfig.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
              روابط سريعة
            </h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
              التواصل المباشر
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-secondary-foreground/90 transition-colors hover:text-primary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span>محادثة واتساب</span>
              </a>

              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="inline-flex items-center gap-2.5 text-sm text-secondary-foreground/90 transition-colors hover:text-primary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span>اتصال مباشر</span>
              </a>

              {availableSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-primary"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
