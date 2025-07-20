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

  const contentBlocks = [
    {
      type: "header",
      content: "ABOUT US"
    },
    {
      type: "intro",
      content: "Ananta is a women-led nonprofit based in Aurangabad, Maharashtra, dedicated to regenerating landscapes and empowering communities through sustainable practices. Founded with the belief that environmental restoration and social transformation go hand in hand, we work at the intersection of conservation, education, and community development."
    },
    {
      type: "quote",
      content: "We imagine a world where every child breathes clean air and has access to nature's abundance."
    },
    {
      type: "vision",
      label: "🌱 VISION",
      content: "To create resilient ecosystems and empowered communities that thrive in harmony with nature, led by women who understand the deep connection between land and life."
    },
    {
      type: "mission",
      label: "MISSION",
      content: [
        "Establish and nurture greenbelts that restore biodiversity and combat climate change",
        "Provide environmental education that connects communities to their natural heritage", 
        "Develop women's leadership in environmental stewardship and sustainable development"
      ]
    },
    {
      type: "values",
      label: "OUR VALUES",
      intro: "We move at the speed of trust, knowing that lasting change grows from deep roots in community and care.",
      values: [
        { icon: "🤝", title: "Collaboration", desc: "Building bridges between communities, knowledge systems, and generations" },
        { icon: "🌍", title: "Regeneration", desc: "Healing the earth while healing ourselves and our relationships" },
        { icon: "💚", title: "Equity", desc: "Ensuring every voice is heard and every community has access to environmental justice" },
        { icon: "🌱", title: "Growth", desc: "Nurturing potential in people, plants, and possibilities" }
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] bg-background"
    >
      {/* Fixed Forest Image Container */}
      <div
        ref={imageRef}
        className={`fixed top-0 left-0 w-full lg:w-[40%] h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 overflow-hidden ${
          isVisible ? "scale-105" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(${forestImage})`,
          backgroundPosition: `${50 + scrollProgress * 5}% ${50 - scrollProgress * 5}%`,
        }}
      >
        {/* Ambient breathing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-yellow-200/5 animate-[breathe_8s_ease-in-out_infinite]" />
        
        {/* Animated sunbeams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-1 h-96 bg-gradient-to-b from-yellow-200/30 to-transparent rotate-12 animate-[shimmer_6s_ease-in-out_infinite] transform origin-top" />
          <div className="absolute top-16 right-1/3 w-0.5 h-80 bg-gradient-to-b from-yellow-100/25 to-transparent rotate-[-8deg] animate-[shimmer_8s_ease-in-out_infinite] transform origin-top" style={{ animationDelay: '2s' }} />
          <div className="absolute top-8 left-2/3 w-0.5 h-72 bg-gradient-to-b from-yellow-200/20 to-transparent rotate-6 animate-[shimmer_7s_ease-in-out_infinite] transform origin-top" style={{ animationDelay: '4s' }} />
        </div>

        {/* Floating particles/pollen */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200/40 rounded-full blur-sm animate-[float_10s_ease-in-out_infinite]"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i * 8)}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + (i % 3) * 2}s`
              }}
            />
          ))}
        </div>

        {/* Foreground leaf layers with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Close leaves */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/20 to-transparent">
            <div className="absolute bottom-4 left-8 w-6 h-8 bg-green-700/40 rounded-full transform rotate-12 animate-[sway_4s_ease-in-out_infinite]" />
            <div className="absolute bottom-8 right-12 w-4 h-6 bg-green-800/30 rounded-full transform rotate-[-15deg] animate-[sway_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Layer 2 - Mid leaves */}
          <div className="absolute top-1/3 right-0 w-full h-40">
            <div className="absolute top-8 right-16 w-3 h-4 bg-green-600/25 rounded-full transform rotate-8 animate-[sway_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
            <div className="absolute top-20 right-8 w-5 h-7 bg-green-700/20 rounded-full transform rotate-[-12deg] animate-[sway_4.5s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Animated birds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 animate-[flyAcross_20s_linear_infinite]">
            <div className="w-2 h-1 bg-gray-800/60">
              <div className="w-1 h-0.5 bg-gray-800/60 transform rotate-12 animate-[wingFlap_0.5s_ease-in-out_infinite]" />
              <div className="w-1 h-0.5 bg-gray-800/60 transform rotate-[-12deg] animate-[wingFlap_0.5s_ease-in-out_infinite]" style={{ animationDelay: '0.25s' }} />
            </div>
          </div>
          <div className="absolute top-1/3 animate-[flyAcross_25s_linear_infinite]" style={{ animationDelay: '8s' }}>
            <div className="w-1.5 h-0.5 bg-gray-700/50">
              <div className="w-0.5 h-0.5 bg-gray-700/50 transform rotate-8 animate-[wingFlap_0.4s_ease-in-out_infinite]" />
              <div className="w-0.5 h-0.5 bg-gray-700/50 transform rotate-[-8deg] animate-[wingFlap_0.4s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>

        {/* Falling leaf */}
        <div className="absolute top-0 left-1/3 animate-[fallAndSway_15s_ease-in-out_infinite]">
          <div className="w-2 h-3 bg-yellow-600/60 rounded-full transform rotate-45" />
        </div>

        {/* Overlay for better text contrast on mobile */}
        <div className="absolute inset-0 bg-black/20 lg:hidden" />

        {/* Sound toggle button */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
          aria-label={soundEnabled ? "Mute forest sounds" : "Play forest sounds"}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          loop
          preload="none"
        >
          <source src="https://www.soundjay.com/misc/sounds/nature-forest-ambience.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Scrolling Content Container */}
      <div
        ref={contentRef}
        className="relative lg:ml-[40%] bg-green-50/95 lg:bg-green-50 min-h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full px-6 lg:px-12 py-12 lg:py-0">
            <div className="max-w-2xl space-y-16">
              {contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    scrollProgress > (index * 0.15) 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {block.type === "header" && (
                    <h1 className="font-cabinet text-5xl lg:text-6xl font-light text-green-900 tracking-wide">
                      {block.content}
                    </h1>
                  )}
                  
                  {block.type === "intro" && (
                    <p className="text-lg lg:text-xl text-green-700 leading-relaxed">
                      {block.content}
                    </p>
                  )}
                  
                  {block.type === "quote" && (
                    <blockquote className="text-xl lg:text-2xl font-light text-green-900 italic border-l-4 border-green-500 pl-6">
                      {block.content}
                    </blockquote>
                  )}
                  
                  {block.type === "vision" && (
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-cabinet font-medium">
                        {block.label}
                      </div>
                      <p className="text-lg text-green-700 leading-relaxed">
                        {block.content}
                      </p>
                    </div>
                  )}
                  
                  {block.type === "mission" && (
                    <div className="space-y-6">
                      <h3 className="font-cabinet text-2xl font-light text-green-900 tracking-wide">
                        {block.label}
                      </h3>
                      <ul className="space-y-4">
                        {(block.content as string[]).map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-3 transform transition-all duration-500 ${
                              scrollProgress > (index * 0.15 + idx * 0.05)
                                ? "translate-x-0 opacity-100"
                                : "translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${(index * 100) + (idx * 200)}ms`
                            }}
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                            <p className="text-green-700 leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {block.type === "values" && (
                    <div className="space-y-8">
                      <h3 className="font-cabinet text-2xl font-light text-green-900 tracking-wide">
                        {block.label}
                      </h3>
                      <p className="text-lg text-green-700 leading-relaxed italic">
                        {block.intro}
                      </p>
                      <div className="grid gap-6 lg:gap-8">
                        {block.values.map((value, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-4 transform transition-all duration-500 ${
                              scrollProgress > (index * 0.15 + idx * 0.05)
                                ? "translate-x-0 opacity-100"
                                : "translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${(index * 100) + (idx * 200)}ms`
                            }}
                          >
                            <span className="text-2xl">{value.icon}</span>
                            <div className="space-y-1">
                              <h4 className="font-cabinet text-lg font-medium text-green-900">
                                {value.title}
                              </h4>
                              <p className="text-green-700">
                                {value.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;