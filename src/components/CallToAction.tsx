import { Heart, UserPlus, Handshake, FileText, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const actionItems = [
  {
    icon: Heart,
    title: "Donate",
    description: "Support our mission with 80G tax benefits",
    buttonText: "Support Now",
    primary: true
  },
  {
    icon: UserPlus,
    title: "Volunteer",
    description: "Join our community of changemakers",
    buttonText: "Get Involved",
    primary: false
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with schools, NGOs, CSR teams",
    buttonText: "Partner",
    primary: false
  },
  {
    icon: FileText,
    title: "Explore Reports",
    description: "View our financial audits and impact data",
    buttonText: "View Reports",
    primary: false
  },
  {
    icon: BookOpen,
    title: "Read Stories",
    description: "Discover real community voices",
    buttonText: "Read Blog",
    primary: false
  },
  {
    icon: Mail,
    title: "Stay Connected",
    description: "Follow our journey and updates",
    buttonText: "Follow Us",
    primary: false
  }
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-95">
            Every action counts. Whether you contribute, volunteer, or simply spread the word, 
            you're helping us create regenerative communities that thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {actionItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center space-y-6">
                <div className="inline-flex p-4 rounded-full bg-white/20 group-hover:bg-accent/80 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-white group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <Button 
                  variant={item.primary ? "default" : "outline"}
                  className={item.primary 
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-soft w-full" 
                    : "border-white/30 text-white hover:bg-white/10 font-semibold w-full backdrop-blur-sm"
                  }
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special Donation Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Tax Benefits Available</h3>
            <p className="text-white/90 mb-6">
              Ananta operates under Lions Club Chhatrapati Sambhaji Nagar with 80G compliance. 
              Every rupee is traceable and accountable.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">₹500</div>
                <div className="text-sm opacity-80">Plants 10 trees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">₹2000</div>
                <div className="text-sm opacity-80">Supports a mobile lab</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">₹5000</div>
                <div className="text-sm opacity-80">Trains 5 teachers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;