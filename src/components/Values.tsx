import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sprout, Globe, Smile, Heart, Home, BarChart3 } from "lucide-react";
const values = [{
  icon: Sprout,
  title: "Ecological Intelligence",
  description: "We plant what heals.",
  color: "text-primary"
}, {
  icon: Globe,
  title: "Systems Thinking",
  description: "We act in wholes, not parts.",
  color: "text-primary-glow"
}, {
  icon: Smile,
  title: "Joyful Learning",
  description: "Education should feel like freedom.",
  color: "text-accent-foreground"
}, {
  icon: Heart,
  title: "Relational Wholeness",
  description: "Belonging is the soil of all transformation.",
  color: "text-primary"
}, {
  icon: Home,
  title: "Radical Localism",
  description: "Global change begins in your mohalla.",
  color: "text-primary-glow"
}, {
  icon: BarChart3,
  title: "Warm Data",
  description: "What we measure must include what we feel.",
  color: "text-accent-foreground"
}];
const Values = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 ref={titleRef} className="scroll-reveal font-cabinet text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles guide every action we take and every relationship we build 
            in our journey toward regenerative communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
          const cardRef = useScrollReveal<HTMLDivElement>();
          return;
        })}
        </div>
      </div>
    </section>;
};
export default Values;