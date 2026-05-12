import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-cream">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
