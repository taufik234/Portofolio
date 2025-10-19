import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
    </div>
  );
};

export default Index;
