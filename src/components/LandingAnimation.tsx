import { useState, useEffect } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingAnimation = () => {
  const [phase, setPhase] = useState<'initial' | 'content'>('initial');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Phase 1: Show hero image for 2 seconds
    const timer1 = setTimeout(() => {
      setPhase('content');
    }, 2000);

    // Phase 2: Start revealing content after transition begins
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative">
      {/* Phase 1: Full-screen hero image */}
      <div className={`fixed inset-0 z-50 transition-all duration-1000 ease-out ${
        phase === 'content' ? 'translate-y-[-100vh] opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="/lovable-uploads/439cf58e-582e-4431-9d47-5c85e56acd79.png" 
            alt="Ananta children and community members in nature" 
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary-glow/30"></div>
          
          {/* Subtle grain/ambient effect */}
          <div className="absolute inset-0 opacity-20 animate-gentle-pulse bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      {/* Phase 2: Main content */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/439cf58e-582e-4431-9d47-5c85e56acd79.png" 
            alt="Ananta children and community members in nature" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-glow/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Logo/Brand - slide from left */}
            <div className={`transition-all duration-800 ease-out delay-300 ${
              showContent ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <img 
                src="/lovable-uploads/0bfced52-de5f-480f-b199-bd5d951ba6f0.png" 
                alt="Ananta Foundation Logo" 
                className="h-24 md:h-32 mx-auto mb-8"
              />
            </div>
            
            {/* Mission Statement - slide from right */}
            <h2 className={`text-2xl md:text-3xl font-medium leading-relaxed opacity-95 transition-all duration-800 ease-out delay-500 ${
              showContent ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              Reweaving the fabric of local life through 
              <span className="text-accent font-semibold"> ecology</span>, 
              <span className="text-accent font-semibold"> education</span>, and 
              <span className="text-accent font-semibold"> intergenerational leadership</span>
            </h2>
            
            {/* Vision - slide from left */}
            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-90 transition-all duration-800 ease-out delay-700 ${
              showContent ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              A world where every child breathes clean air, where women lead unapologetically, 
              and where communities grow through care — not extraction.
            </p>
            
            {/* CTA Buttons - fade in from bottom */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-800 ease-out delay-900 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-soft transition-all duration-300 hover:scale-105">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
              <Button variant="hero" size="lg" className="font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                Join as Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Impact Stats - staggered fade in */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className={`text-center transition-all duration-600 ease-out delay-1100 ${
                showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}>
                <div className="text-3xl md:text-4xl font-bold text-accent">20+</div>
                <div className="text-sm md:text-base opacity-90">Women Leaders</div>
              </div>
              <div className={`text-center transition-all duration-600 ease-out delay-1200 ${
                showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}>
                <div className="text-3xl md:text-4xl font-bold text-accent">1000+</div>
                <div className="text-sm md:text-base opacity-90">Trees Planted</div>
              </div>
              <div className={`text-center transition-all duration-600 ease-out delay-1300 ${
                showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}>
                <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                <div className="text-sm md:text-base opacity-90">Lives Touched</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingAnimation;