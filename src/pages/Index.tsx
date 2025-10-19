import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
