import { Button } from "@/components/ui/button";

const LandingAnimation = () => {
  return (
    <div className="min-h-screen">
      {/* Top Half - Content Area */}
      <div className="h-[50vh] flex items-center justify-center" style={{ backgroundColor: '#f6f3ef' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Header */}
            <h1 className="font-cabinet text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight text-foreground">
              WOMEN GROWING FUTURES
            </h1>
            
            {/* Sub Header */}
            <p className="font-lora text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              A circle of women regenerating the future — one tree, one child, one act of leadership at a time
            </p>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-soft border border-border/20 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half - Forest Image */}
      <div className="h-[50vh] relative overflow-hidden">
        <img 
          src="/lovable-uploads/439cf58e-582e-4431-9d47-5c85e56acd79.png" 
          alt="Ananta children and community members in nature" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LandingAnimation;