import Checking from "@/components/Checking";
import About from "@/components/Views/About";
import Blog from "@/components/Views/Blog";
import Footer from "@/components/Views/Footer";
import Hero from "@/components/Views/Hero";
import Projects from "@/components/Views/Projects";
import Services from "@/components/Views/Services";
import Skills from "@/components/Views/Skills";
import Testimonial from "@/components/Views/Testimonial";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="relative z-[30]">
        <About />
        <Checking />
        <Services />
        <Skills />
        <Projects />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
