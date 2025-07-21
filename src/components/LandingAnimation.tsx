import { useEffect, useRef, useState } from "react";

const LandingAnimation = () => {
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(false);



  // Initial children image animation - show for 2.2 seconds then start transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Start content animation after a small delay
      setTimeout(() => {
        setShowContent(true);
      }, 200);
      // Hide initial animation after transition completes
      setTimeout(() => {
        setShowInitialAnimation(false);
      }, 1200);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);







  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FBFAF5]">
            {/* Initial Children Image Animation - Shows for 2.2 seconds */}
      {showInitialAnimation && (
        <div 
          className={`fixed inset-0 z-50 bg-[#FBFAF5] transition-all duration-1200 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/439cf58e-582e-4431-9d47-5c85e56acd79.png" 
              alt="Ananta children and community members in nature" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-glow/70"></div>
          </div>
        </div>
      )}

      {/* Content Container with Forest Image - First Fold */}
      <div 
        className={`relative z-10 min-h-screen transition-all duration-1200 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >


                {/* Text Content - Centered */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 ease-out ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: showContent ? '300ms' : '0ms' }}>
              <h1 className="font-cabinet text-4xl md:text-6xl font-light text-foreground tracking-wide mb-6 leading-tight">
                WOMEN GROWING FUTURES
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className={`transition-all duration-1000 ease-out ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: showContent ? '600ms' : '0ms' }}>
              <p className="font-lora text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                A circle of women regenerating the future — one tree, one child, one act of leadership at a time
              </p>
            </div>
          </div>
        </div>

        {/* Floating Forest Image - Positioned below text */}
        <div className="w-full max-w-6xl mx-auto px-4 -mt-32">
          <div 
            className={`relative w-full h-[800px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 ease-out ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05)',
              transitionDelay: showContent ? '900ms' : '0ms'
            }}
          >
            <img
              src="/src/assets/forest-about.jpg"
              alt="Forest window into nature"
              className="w-full h-full object-cover"
            />
            
            {/* Subtle corner blur for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAnimation;