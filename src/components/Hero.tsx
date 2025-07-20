import { ArrowRight, Heart, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ananta women leaders working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-glow/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/0bfced52-de5f-480f-b199-bd5d951ba6f0.png" 
              alt="Ananta Logo"
              className="h-24 md:h-32 w-auto animate-gentle-bounce"
            />
          </div>
          
          {/* Mission Statement */}
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed opacity-95">
            Reweaving the fabric of local life through 
            <span className="text-accent font-semibold"> ecology</span>, 
            <span className="text-accent font-semibold"> education</span>, and 
            <span className="text-accent font-semibold"> intergenerational leadership</span>
          </h2>
          
          {/* Vision */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            A world where every child breathes clean air, where women lead unapologetically, 
            and where communities grow through care — not extraction.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-soft transition-all duration-300 hover:scale-105"
            >
              <Heart className="mr-2 h-5 w-5" />
              Support Our Mission
            </Button>
            <Button 
              variant="hero"
              size="lg"
              className="font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Join as Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-accent">20+</div>
              <div className="text-sm md:text-base opacity-90">Women Leaders</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold text-accent">1000+</div>
              <div className="text-sm md:text-base opacity-90">Trees Planted</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm md:text-base opacity-90">Lives Touched</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;