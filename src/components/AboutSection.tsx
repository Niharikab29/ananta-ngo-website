import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import forestImage from "@/assets/forest-about.jpg";
const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate when section enters viewport
      const entryPoint = windowHeight * 0.8;
      const isInView = rect.top < entryPoint && rect.bottom > 0;
      if (isInView !== isVisible) {
        setIsVisible(isInView);
      }

      // Calculate scroll progress within the section
      if (isInView) {
        const scrolled = Math.max(0, entryPoint - rect.top);
        const maxScroll = sectionHeight + windowHeight - entryPoint;
        const progress = Math.min(1, scrolled / maxScroll);
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Handle ambient sound
  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled && isVisible) {
        audioRef.current.play().catch(() => {
          // Audio autoplay blocked, ignore silently
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled, isVisible]);
  const contentBlocks = [{
    type: "header",
    content: "ABOUT US"
  }, {
    type: "intro",
    content: "Ananta is a women-led nonprofit based in Aurangabad, Maharashtra, dedicated to regenerating landscapes and empowering communities through sustainable practices. Founded with the belief that environmental restoration and social transformation go hand in hand, we work at the intersection of conservation, education, and community development."
  }, {
    type: "quote",
    content: "We imagine a world where every child breathes clean air and has access to nature's abundance."
  }, {
    type: "vision",
    label: "🌱 VISION",
    content: "To create resilient ecosystems and empowered communities that thrive in harmony with nature, led by women who understand the deep connection between land and life."
  }, {
    type: "mission",
    label: "MISSION",
    content: ["Establish and nurture greenbelts that restore biodiversity and combat climate change", "Provide environmental education that connects communities to their natural heritage", "Develop women's leadership in environmental stewardship and sustainable development"]
  }, {
    type: "values",
    label: "OUR VALUES",
    intro: "We move at the speed of trust, knowing that lasting change grows from deep roots in community and care.",
    values: [{
      icon: "🤝",
      title: "Collaboration",
      desc: "Building bridges between communities, knowledge systems, and generations"
    }, {
      icon: "🌍",
      title: "Regeneration",
      desc: "Healing the earth while healing ourselves and our relationships"
    }, {
      icon: "💚",
      title: "Equity",
      desc: "Ensuring every voice is heard and every community has access to environmental justice"
    }, {
      icon: "🌱",
      title: "Growth",
      desc: "Nurturing potential in people, plants, and possibilities"
    }]
  }];
  return <section ref={sectionRef} className="relative min-h-[300vh] bg-background">
      {/* Fixed Forest Image Container */}
      <div ref={imageRef} className={`fixed top-0 left-0 w-full lg:w-[40%] h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 overflow-hidden ${isVisible ? "scale-105" : "scale-100"}`} style={{
      backgroundImage: `url(${forestImage})`,
      backgroundPosition: `${50 + scrollProgress * 5}% ${50 - scrollProgress * 5}%`
    }}>
        {/* Ambient breathing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/5 to-yellow-200/3 animate-[breathe_12s_ease-in-out_infinite]" />
        
        {/* Enhanced sunbeams matching the image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main sunbeam rays - matching the image's central light */}
          <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-yellow-200/20 via-yellow-100/10 to-transparent transform -translate-x-1/2 rotate-2 animate-[shimmer_8s_ease-in-out_infinite]" />
          <div className="absolute top-0 left-[45%] w-1.5 h-full bg-gradient-to-b from-yellow-200/15 via-yellow-100/8 to-transparent transform rotate-[-3deg] animate-[shimmer_10s_ease-in-out_infinite]" style={{
          animationDelay: '2s'
        }} />
          <div className="absolute top-0 left-[55%] w-1 h-full bg-gradient-to-b from-yellow-200/12 via-yellow-100/6 to-transparent transform rotate-1 animate-[shimmer_9s_ease-in-out_infinite]" style={{
          animationDelay: '4s'
        }} />
          
          {/* Side sunbeams - softer */}
          <div className="absolute top-10 left-[25%] w-0.5 h-3/4 bg-gradient-to-b from-yellow-200/8 to-transparent rotate-12 animate-[shimmer_12s_ease-in-out_infinite]" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute top-16 left-[75%] w-0.5 h-2/3 bg-gradient-to-b from-yellow-200/6 to-transparent rotate-[-8deg] animate-[shimmer_11s_ease-in-out_infinite]" style={{
          animationDelay: '5s'
        }} />
        </div>

        {/* Floating dust particles in sunbeams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => <div key={i} className="absolute w-0.5 h-0.5 bg-yellow-100/30 rounded-full blur-[0.5px] animate-[dustFloat_15s_ease-in-out_infinite]" style={{
          left: `${40 + i * 2}%`,
          top: `${10 + i * 7}%`,
          animationDelay: `${i * 2}s`,
          animationDuration: `${12 + i % 4 * 3}s`
        }} />)}
        </div>

        {/* Realistic leaf shadows and movement */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Fern-like foreground plants */}
          <div className="absolute bottom-0 left-[10%] w-8 h-16">
            <div className="w-full h-full bg-gradient-to-t from-green-800/30 via-green-700/20 to-transparent rounded-t-full animate-[fernSway_6s_ease-in-out_infinite]" />
          </div>
          <div className="absolute bottom-0 right-[15%] w-6 h-12">
            <div className="w-full h-full bg-gradient-to-t from-green-800/25 via-green-700/15 to-transparent rounded-t-full animate-[fernSway_7s_ease-in-out_infinite]" style={{
            animationDelay: '2s'
          }} />
          </div>
          
          {/* Branch silhouettes */}
          <div className="absolute top-[20%] left-[5%] w-20 h-0.5 bg-gradient-to-r from-transparent via-green-900/40 to-transparent animate-[branchSway_8s_ease-in-out_infinite]" />
          <div className="absolute top-[35%] right-[8%] w-16 h-0.5 bg-gradient-to-r from-transparent via-green-900/30 to-transparent animate-[branchSway_9s_ease-in-out_infinite]" style={{
          animationDelay: '3s'
        }} />
        </div>

        {/* Realistic birds - small silhouettes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[25%] animate-[birdFly_25s_linear_infinite]">
            <svg width="8" height="4" viewBox="0 0 8 4" className="text-gray-800/40">
              <path d="M0 2 C2 0, 6 0, 8 2 C6 4, 2 4, 0 2 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-[40%] animate-[birdFly_30s_linear_infinite]" style={{
          animationDelay: '10s'
        }}>
            <svg width="6" height="3" viewBox="0 0 6 3" className="text-gray-700/30">
              <path d="M0 1.5 C1.5 0, 4.5 0, 6 1.5 C4.5 3, 1.5 3, 0 1.5 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Single falling leaf - realistic shape */}
        <div className="absolute top-[-10px] left-[35%] animate-[leafFall_20s_ease-in-out_infinite]">
          <svg width="6" height="8" viewBox="0 0 6 8" className="text-yellow-600/50">
            <path d="M3 0 C4.5 1, 5 3, 4 5 C3.5 6.5, 2.5 7.5, 3 8 C3.5 7.5, 2.5 6.5, 2 5 C1 3, 1.5 1, 3 0 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Moss glow on path */}
        <div className="absolute bottom-0 left-1/2 w-32 h-8 bg-gradient-radial from-green-400/10 via-green-500/5 to-transparent transform -translate-x-1/2 animate-[mossGlow_10s_ease-in-out_infinite]" />

        {/* Overlay for better text contrast on mobile */}
        <div className="absolute inset-0 bg-black/20 lg:hidden" />

        {/* Sound toggle button */}
        <button onClick={() => setSoundEnabled(!soundEnabled)} className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300" aria-label={soundEnabled ? "Mute forest sounds" : "Play forest sounds"}>
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        {/* Hidden audio element */}
        <audio ref={audioRef} loop preload="none">
          <source src="https://www.soundjay.com/misc/sounds/nature-forest-ambience.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Scrolling Content Container */}
      <div ref={contentRef} className="relative lg:ml-[40%] bg-green-50/95 lg:bg-green-50 min-h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full px-6 lg:px-12 py-12 lg:py-0">
            <div className="max-w-2xl space-y-16">
              {contentBlocks.map((block, index) => <div key={index} className={`transform transition-all duration-700 ${scrollProgress > index * 0.15 ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`} style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  {block.type === "header" &&
              // Header moved to FeaturedWork section
              <div></div>}
                  
                  {block.type === "intro"}
                  
                  {block.type === "quote" && <blockquote className="text-xl lg:text-2xl font-light text-green-900 italic border-l-4 border-green-500 pl-6">
                      {block.content}
                    </blockquote>}
                  
                  {block.type === "vision" && <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-cabinet font-medium">
                        {block.label}
                      </div>
                      <p className="text-lg text-green-700 leading-relaxed">
                        {block.content}
                      </p>
                    </div>}
                  
                  {block.type === "mission" && <div className="space-y-6">
                      <h3 className="font-cabinet text-2xl font-light text-green-900 tracking-wide">
                        {block.label}
                      </h3>
                      <ul className="space-y-4">
                        {(block.content as string[]).map((item, idx) => <li key={idx} className={`flex items-start gap-3 transform transition-all duration-500 ${scrollProgress > index * 0.15 + idx * 0.05 ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`} style={{
                    transitionDelay: `${index * 100 + idx * 200}ms`
                  }}>
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                            <p className="text-green-700 leading-relaxed">
                              {item}
                            </p>
                          </li>)}
                      </ul>
                    </div>}
                  
                  {block.type === "values" && <div className="space-y-8">
                      <h3 className="font-cabinet text-2xl font-light text-green-900 tracking-wide">
                        {block.label}
                      </h3>
                      <p className="text-lg text-green-700 leading-relaxed italic">
                        {block.intro}
                      </p>
                      <div className="grid gap-6 lg:gap-8">
                        {block.values.map((value, idx) => <div key={idx} className={`flex items-start gap-4 transform transition-all duration-500 ${scrollProgress > index * 0.15 + idx * 0.05 ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`} style={{
                    transitionDelay: `${index * 100 + idx * 200}ms`
                  }}>
                            <span className="text-2xl">{value.icon}</span>
                            <div className="space-y-1">
                              <h4 className="font-cabinet text-lg font-medium text-green-900">
                                {value.title}
                              </h4>
                              <p className="text-green-700">
                                {value.desc}
                              </p>
                            </div>
                          </div>)}
                      </div>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;