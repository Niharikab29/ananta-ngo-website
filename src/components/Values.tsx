import { Sprout, Globe, Smile, Heart, Home, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Ecological Intelligence",
    description: "We plant what heals.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Systems Thinking", 
    description: "We act in wholes, not parts.",
    color: "text-primary-glow"
  },
  {
    icon: Smile,
    title: "Joyful Learning",
    description: "Education should feel like freedom.",
    color: "text-accent-foreground"
  },
  {
    icon: Heart,
    title: "Relational Wholeness",
    description: "Belonging is the soil of all transformation.",
    color: "text-primary"
  },
  {
    icon: Home,
    title: "Radical Localism",
    description: "Global change begins in your mohalla.",
    color: "text-primary-glow"
  },
  {
    icon: BarChart3,
    title: "Warm Data",
    description: "What we measure must include what we feel.",
    color: "text-accent-foreground"
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles guide every action we take and every relationship we build 
            in our journey toward regenerative communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300`}>
                  <value.icon className={`h-8 w-8 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;