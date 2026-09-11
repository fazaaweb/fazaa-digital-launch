import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "فزعة ويب | تصميم وتطوير مواقع احترافية" },
      {
        name: "description",
        content: "فزعة ويب لتصميم وبرمجة مواقع احترافية سريعة وعصرية للشركات والمؤسسات في اليمن والسوق العربي.",
      },
      { property: "og:title", content: "فزعة ويب | تصميم وتطوير مواقع احترافية" },
      {
        property: "og:description",
        content: "نصنع حضورًا رقميًا يليق بمشروعك بتصميم مميز، أداء سريع، وتجربة استخدام سلسة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh overflow-x-clip bg-background">
      <Navbar />
      <Hero />
      <div id="services" aria-hidden="true" className="h-px" />
      <div id="work" aria-hidden="true" className="h-px" />
      <div id="why-us" aria-hidden="true" className="h-px" />
      <div id="process" aria-hidden="true" className="h-px" />
      <div id="contact" aria-hidden="true" className="h-px" />
    </main>
  );
}
