import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useContentPulse } from "@/hooks/usePulsatingScroll";
import { ArrowRight, Leaf, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const FeaturedWork = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();
  const projects = [{
    id: "01",
    title: "Greening Our Cities",
    description: "Creating urban forests and green spaces that heal both the environment and communities. Through tree plantation drives and Miyawaki forests, we're transforming urban landscapes.",
    icon: Leaf,
    link: "#greening",
    stats: "1000+ Trees Planted"
  }, {
    id: "02",
    title: "Reimagining Learning",
    description: "Revolutionary education through mobile learning labs and systems-thinking workshops. We're creating playful curricula that makes learning feel like freedom.",
    icon: GraduationCap,
    link: "#learning",
    stats: "15+ Schools Reached"
  }, {
    id: "03",
    title: "Empowering Women & Youth",
    description: "Building safe spaces for women and youth to develop leadership skills, digital literacy, and confidence. Local leadership development for community transformation.",
    icon: Users,
    link: "#empowerment",
    stats: "500+ Lives Touched"
  }];
  return <section id="featured-work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={headerRef} className="scroll-reveal mb-8">
            <h1 className="font-cabinet text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-4">
              ABOUT US
            </h1>
            <div className="inline-flex items-center space-x-2 text-primary font-medium">
              <span className="text-sm tracking-wide uppercase">01</span>
              <span className="text-sm tracking-wide uppercase">Our Work</span>
            </div>
          </div>
          
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
          return <Card key={project.id} ref={el => {
            cardRef.current = el;
            pulseRef.current = el;
          }} className={`content-pulse scroll-reveal-scale delay-${index + 1} group overflow-hidden border-0 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
                
                
                
              </Card>;
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
    </section>;
};
export default FeaturedWork;