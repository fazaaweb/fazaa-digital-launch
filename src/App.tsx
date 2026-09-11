import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export function App() {
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

export default App;
