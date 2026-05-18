import P2Navbar from "./components/P2Navbar";
import P2Hero from "./components/P2Hero";
import P2About from "./components/P2About";
import P2Transformations from "./components/P2Transformations";
import P2Services from "./components/P2Services";
import P2Projects from "./components/P2Projects";
import P2Testimonials from "./components/P2Testimonials";
import P2CTA from "./components/P2CTA";
import P2Footer from "./components/P2Footer";

export default function Page2() {
  return (
    <main className="relative bg-[#1A1814]">
      <P2Navbar />
      <P2Hero />
      <P2About />
      <P2Transformations />
      <P2Services />
      <P2Projects />
      <P2Testimonials />
      <P2CTA />
      <P2Footer />
    </main>
  );
}
