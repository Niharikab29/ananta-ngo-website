import { useScrollReveal, useCountUpAnimation } from "@/hooks/useScrollReveal";
import { CheckCircle, TreePine, Users, Lightbulb } from "lucide-react";
const stats = [{
  icon: TreePine,
  value: 5000,
  label: "Trees Planted",
  description: "Across urban and rural landscapes",
  color: "text-primary"
}, {
  icon: Users,
  value: 25,
  label: "Communities Reached",
  description: "Building regenerative networks",
  color: "text-primary-glow"
}, {
  icon: Lightbulb,
  value: 150,
  label: "Learning Sessions",
  description: "Transformative education experiences",
  color: "text-accent-foreground"
}, {
  icon: CheckCircle,
  value: 50,
  label: "Projects Completed",
  description: "Creating lasting positive change",
  color: "text-primary"
}];
const ImpactStats = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const stat1Ref = useCountUpAnimation<HTMLDivElement>(5000, 2000, 200);
  const stat2Ref = useCountUpAnimation<HTMLDivElement>(25, 2000, 400);
  const stat3Ref = useCountUpAnimation<HTMLDivElement>(150, 2000, 600);
  const stat4Ref = useCountUpAnimation<HTMLDivElement>(50, 2000, 800);
  const statRefs = [stat1Ref, stat2Ref, stat3Ref, stat4Ref];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-reveal font-cabinet text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Growing Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every tree planted, every child educated, and every community empowered 
            creates ripples of positive change that extend far beyond what we can measure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const countRef = statRefs[index];
            const Icon = stat.icon;
            
            return (
              <div 
                key={index}
                className="scroll-reveal text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className={`w-12 h-12 ${stat.color}`} />
                </div>
                <div ref={countRef} className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};
export default ImpactStats;