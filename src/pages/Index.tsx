import Navigation from "@/components/Navigation";
import ScrollHero from "@/components/ScrollHero";
import FeaturedWork from "@/components/FeaturedWork";
import ImpactStats from "@/components/ImpactStats";
import Values from "@/components/Values";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollHero />
      <FeaturedWork />
      <ImpactStats />
      <Values />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
