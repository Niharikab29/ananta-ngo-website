import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Values />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
