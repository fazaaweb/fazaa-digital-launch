import { siteConfig } from "@/config/site-config";

export const navigation = siteConfig.navigationLinks;

export const company = {
  name: siteConfig.name,
  nameEnglish: siteConfig.englishName,
  primaryCta: "اطلب موقعك الآن",
} as const;

export { siteConfig };