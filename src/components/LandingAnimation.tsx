import { useState, useEffect } from "react";
import { useScrollIndicatorPulse } from "@/hooks/usePulsatingScroll";
import { Button } from "@/components/ui/button";

const LandingAnimation = () => {
  const scrollIndicatorRef = useScrollIndicatorPulse<HTMLDivElement>();
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
            
            {/* Main Heading */}
            <div className={`transition-all duration-800 ease-out delay-300 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <h1 className="font-cabinet text-4xl md:text-6xl font-light tracking-wide mb-6 leading-tight">
                WOMEN GROWING FUTURES
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className={`font-lora text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto transition-all duration-800 ease-out delay-500 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              A circle of women regenerating the future — one tree, one child, one act of leadership at a time
            </p>
            
            {/* CTA Button - Green style like David Suzuki */}
            <div className={`pt-8 transition-all duration-800 ease-out delay-700 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <Button 
                size="lg" 
                className="font-cabinet bg-primary hover:bg-primary/90 text-white font-medium px-12 py-6 text-lg tracking-wider uppercase shadow-soft transition-all duration-300 hover:scale-105"
              >
                SIGN UP FOR THE LIVING GREEN MONTHLY DIGEST
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`fixed bottom-[10px] left-1/2 transform -translate-x-1/2 z-20 transition-all duration-800 ease-out delay-900 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div 
              ref={scrollIndicatorRef}
              onClick={() => {
                const nextSection = document.getElementById('featured-work');
                if (nextSection) {
                  nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="scroll-indicator pulse-glow w-20 h-20 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center cursor-pointer hover:border-white/80 hover:scale-105 transition-all duration-300"
            >
              <span className="font-cabinet text-white text-sm font-medium tracking-widest uppercase static-text">SCROLL</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingAnimation;