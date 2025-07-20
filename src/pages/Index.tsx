import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ImpactStats from "@/components/ImpactStats";
import Values from "@/components/Values";
import Newsletter from "@/components/Newsletter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <ImpactStats />
      <Values />
      <Newsletter />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
