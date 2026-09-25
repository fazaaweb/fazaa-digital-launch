import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { siteConfig } from "@/config/site-config";
import { Phone, MessageSquare } from "lucide-react";

export function Footer() {
  const availableSocials = siteConfig.socialLinks.filter(
    (item) => item.isAvailable && item.name !== "WhatsApp" && item.name !== "اتصال مباشر",
  );

  return (
    <footer className="relative z-10 border-t border-border/20 bg-background pt-16 pb-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={transparentLogo}
                width="1144"
                height="768"
                alt="فزعة ويب"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain opacity-90"
              />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.footerDescription}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-foreground mb-6">NAVIGATE</h4>
            <ul className="space-y-3">
              {siteConfig.navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-foreground mb-6">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card/40 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <span>محادثة واتساب</span>
              </a>
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card/40 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>اتصال مباشر</span>
              </a>

              <div className="pt-2 flex flex-col gap-1 text-sm">
                <span className="text-xs text-muted-foreground">ساعات العمل</span>
                <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <span className="text-xs">🟢</span>
                  <span>مفتوح 24 ساعة</span>
                </span>
              </div>
            </div>

            {availableSocials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {availableSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-border/20 pt-8 text-center sm:text-right text-xs text-muted-foreground/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
