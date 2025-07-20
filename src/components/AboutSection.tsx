import { useEffect, useRef, useState } from "react";
import forestImage from "@/assets/forest-about.jpg";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
        className={`fixed top-0 left-0 w-full lg:w-[40%] h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isVisible ? "scale-105" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(${forestImage})`,
          backgroundPosition: `${50 + scrollProgress * 5}% ${50 - scrollProgress * 5}%`,
        }}
      >
        {/* Overlay for better text contrast on mobile */}
        <div className="absolute inset-0 bg-black/20 lg:hidden" />
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