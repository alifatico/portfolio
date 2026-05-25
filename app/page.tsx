import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import BrandStatement from "@/components/BrandStatement";
import About from "@/components/About";
import Services from "@/components/Services";
import FutureVision from "@/components/FutureVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <BrandStatement />
        <About />
        <Services />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
