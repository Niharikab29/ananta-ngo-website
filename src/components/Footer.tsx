import { MapPin, Mail, Phone, Heart, Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Sprout className="h-8 w-8 text-accent" />
              <h3 className="font-cabinet text-2xl font-bold">Ananta</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Reweaving the fabric of local life through ecology, education, 
              and intergenerational leadership.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-sm">Made with love in Aurangabad</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-cabinet text-lg font-semibold text-accent">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#about" className="block text-white/80 hover:text-accent transition-colors duration-200">About Us</a>
              <a href="#projects" className="block text-white/80 hover:text-accent transition-colors duration-200">Our Projects</a>
              <a href="#values" className="block text-white/80 hover:text-accent transition-colors duration-200">Values</a>
              <a href="#reports" className="block text-white/80 hover:text-accent transition-colors duration-200">Reports</a>
              <a href="#blog" className="block text-white/80 hover:text-accent transition-colors duration-200">Stories</a>
            </nav>
          </div>
          
          {/* Get Involved */}
          <div className="space-y-6">
            <h4 className="font-cabinet text-lg font-semibold text-accent">Get Involved</h4>
            <nav className="space-y-3">
              <a href="#donate" className="block text-white/80 hover:text-accent transition-colors duration-200">Donate</a>
              <a href="#volunteer" className="block text-white/80 hover:text-accent transition-colors duration-200">Volunteer</a>
              <a href="#partner" className="block text-white/80 hover:text-accent transition-colors duration-200">Partner</a>
              <a href="#internship" className="block text-white/80 hover:text-accent transition-colors duration-200">Internships</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-cabinet text-lg font-semibold text-accent">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <div>Aurangabad, Maharashtra</div>
                  <div>India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:hello@ananta.org" className="text-white/80 hover:text-accent transition-colors duration-200 text-sm">
                  hello@ananta.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+91" className="text-white/80 hover:text-accent transition-colors duration-200 text-sm">
                  +91 XXX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              <p>© 2024 Ananta. All rights reserved.</p>
              <p className="mt-1">Operates under Lions Club Chhatrapati Sambhaji Nagar</p>
            </div>
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>80G Compliant | FCRA in Progress</p>
              <p className="mt-1">Every rupee traceable & accountable</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;