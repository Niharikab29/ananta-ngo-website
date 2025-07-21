import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for the background image
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  // Transform values for the text panel
  const panelX = useTransform(scrollYProgress, [0.1, 0.7], [120, 0]);
  const panelOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const panelScale = useTransform(scrollYProgress, [0.1, 0.5], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Forest Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <img 
          src="/forest-hero.jpg" 
          alt="Lush forest landscape" 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"
          style={{ opacity: backgroundOpacity }}
        />
      </motion.div>

      {/* Text Panel */}
      <motion.div
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 max-w-sm md:max-w-md lg:max-w-lg"
        style={{
          x: panelX,
          opacity: panelOpacity,
          scale: panelScale,
        }}
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-white/10">
          {/* Logo Placeholder */}
          <div className="mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
              <span className="text-xl md:text-2xl font-bold text-white">A</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">Ananta</h1>
          </div>

          {/* Content */}
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm leading-relaxed">
            <p className="font-semibold text-white/90">
              <strong>Ananta is a women-led nonprofit based in Aurangabad, Maharashtra.</strong>
            </p>
            
            <p className="text-white/80">
              We design and implement interventions to increase greenbelts, reimagine education, and build leadership among underserved communities — especially women and youth.
            </p>
            
            <p className="text-white/80">
              In July 2025, Ananta was founded by 20 women leaders across disciplines — from architects and artists, educators and engineers, to finance professionals, lawyers, wellness coaches, systems thinkers, and entrepreneurs.
            </p>
            
            <p className="text-white/80">
              Their diversity reflects more than professional expertise — it embodies a systems-level understanding of how people, places, and change truly work.
            </p>
            
            <p className="text-white/80">
              We imagine a world where every child breathes clean air, where women lead without apology, and where communities grow not through extraction — but through care.
            </p>
            
            <p className="text-white/80">
              Ananta exists to restore what we've forgotten: That regeneration begins with relationship — to land, to self, to each other.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollHero; 