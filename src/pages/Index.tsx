import Navigation from "@/components/Navigation";
import LandingAnimation from "@/components/LandingAnimation";
import AboutSection from "@/components/AboutSection";
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
      <LandingAnimation />
      <AboutSection />
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
