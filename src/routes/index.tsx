import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "فزعة ويب | تصميم وتطوير مواقع إلكترونية احترافية" },
      {
        name: "description",
        content:
          "فزعة ويب متخصصة في تصميم وبرمجة وتطوير مواقع الويب والمتاجر الإلكترونية للشركات والمؤسسات في اليمن والسوق العربي.",
      },
      {
        property: "og:title",
        content: "فزعة ويب | نصنع حضورًا رقميًا يليق بمشروعك",
      },
      {
        property: "og:description",
        content:
          "نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة المستخدم السلسة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
