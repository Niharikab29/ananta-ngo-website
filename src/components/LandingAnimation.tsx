import { Button } from "@/components/ui/button";

const LandingAnimation = () => {
  return (
    <div className="min-h-screen">
      {/* Top Half - Content Area */}
      <div className="h-[50vh] flex items-center justify-center" style={{ backgroundColor: '#f6f3ef' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Headline */}
            <h1 className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight text-gray-900">
              Reweaving the fabric of local life through{' '}
              <em className="text-primary font-medium">ecology</em>,{' '}
              <em className="text-primary font-medium">education</em>, and{' '}
              <em className="text-primary font-medium">intergenerational leadership</em>
            </h1>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg border border-border/20 transition-all duration-300 hover:scale-105"
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