import P3Navbar from "./components/P3Navbar";
import P3Hero from "./components/P3Hero";
import P3Philosophy from "./components/P3Philosophy";
import P3Process from "./components/P3Process";
import P3Services from "./components/P3Services";
import P3Transformations from "./components/P3Transformations";
import P3Projects from "./components/P3Projects";
import P3Testimonials from "./components/P3Testimonials";
import P3CTA from "./components/P3CTA";
import P3Footer from "./components/P3Footer";

export default function Page3() {
  return (
    <main className="relative bg-[#0F1A14]">
      <P3Navbar />
      <P3Hero />
      <P3Philosophy />
      <P3Process />
      <P3Services />
      <P3Transformations />
      <P3Projects />
      <P3Testimonials />
      <P3CTA />
      <P3Footer />
    </main>
  );
}
