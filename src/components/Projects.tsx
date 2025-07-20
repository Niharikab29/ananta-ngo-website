import { Trees, GraduationCap, Users } from "lucide-react";
import forestImage from "@/assets/forest-image.jpg";
import learningImage from "@/assets/learning-image.jpg";
import womenImage from "@/assets/women-empowerment.jpg";

const projects = [
  {
    icon: Trees,
    title: "Greening Our Cities",
    description: "Tree plantation drives in schools and parks, Miyawaki forests, and community tree guardianship programs that heal our urban landscapes.",
    image: forestImage,
    highlights: ["1000+ trees planted", "50+ Miyawaki forests", "Community guardianship"]
  },
  {
    icon: GraduationCap,
    title: "Reimagining Learning",
    description: "Mobile learning labs and playful curriculum, systems-thinking workshops for children, and teacher capacity-building initiatives.",
    image: learningImage,
    highlights: ["Mobile learning labs", "Systems thinking", "Teacher training"]
  },
  {
    icon: Users,
    title: "Empowering Women & Youth",
    description: "Self-leadership, digital literacy, safe spaces, mentorship and confidence-building, and local leadership development.",
    image: womenImage,
    highlights: ["Leadership development", "Digital literacy", "Safe spaces"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through three interconnected pillars, we're building regenerative communities 
            that thrive through care, wisdom, and collective action.
          </p>
        </div>
        
        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;