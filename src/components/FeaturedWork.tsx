import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useContentPulse } from "@/hooks/usePulsatingScroll";
import { ArrowRight, Leaf, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import forestImage from "@/assets/forest-image.jpg";
import learningImage from "@/assets/learning-image.jpg";
import womenEmpowermentImage from "@/assets/women-empowerment.jpg";

const FeaturedWork = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();

  const projects = [
    {
      id: "01",
      title: "Greening Our Cities",
      description: "Creating urban forests and green spaces that heal both the environment and communities. Through tree plantation drives and Miyawaki forests, we're transforming urban landscapes.",
      image: forestImage,
      icon: Leaf,
      link: "#greening",
      stats: "1000+ Trees Planted"
    },
    {
      id: "02", 
      title: "Reimagining Learning",
      description: "Revolutionary education through mobile learning labs and systems-thinking workshops. We're creating playful curricula that makes learning feel like freedom.",
      image: learningImage,
      icon: GraduationCap,
      link: "#learning", 
      stats: "15+ Schools Reached"
    },
    {
      id: "03",
      title: "Empowering Women & Youth",
      description: "Building safe spaces for women and youth to develop leadership skills, digital literacy, and confidence. Local leadership development for community transformation.",
      image: womenEmpowermentImage,
      icon: Users,
      link: "#empowerment",
      stats: "500+ Lives Touched"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={headerRef} className="scroll-reveal inline-flex items-center space-x-2 text-primary font-medium mb-4">
            <span className="text-sm tracking-wide uppercase">01</span>
            <span className="text-sm tracking-wide uppercase">Our Work</span>
          </div>
          <h2 ref={titleRef} className="scroll-reveal delay-1 font-cabinet text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reweaving the fabric of local life
          </h2>
          <p ref={subtitleRef} className="scroll-reveal delay-2 text-lg text-muted-foreground leading-relaxed">
            Through ecology, education, and intergenerational leadership, we're creating 
            sustainable change that grows from within communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const cardRef = useScrollReveal<HTMLDivElement>();
            const pulseRef = useContentPulse<HTMLDivElement>();
            return (
              <Card 
                key={project.id} 
                ref={(el) => {
                  cardRef.current = el;
                  pulseRef.current = el;
                }}
                className={`content-pulse scroll-reveal-scale delay-${index + 1} group overflow-hidden border-0 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium">
                      {project.stats}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-primary font-bold text-sm">
                      {project.id} of 03
                    </span>
                  </div>
                  <h3 className="font-cabinet text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 p-0 h-auto"
                    asChild
                  >
                    <a href={project.link} className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore All Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;