import { TrendingUp, Users, TreePine, Heart } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: Users,
      number: "20+",
      label: "Women Leaders",
      description: "Diverse professionals driving change"
    },
    {
      icon: TreePine,
      number: "1000+",
      label: "Trees Planted", 
      description: "Creating green urban spaces"
    },
    {
      icon: Heart,
      number: "500+",
      label: "Lives Touched",
      description: "Community members empowered"
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Schools Reached",
      description: "Educational transformation"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="font-cabinet text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-cabinet text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;