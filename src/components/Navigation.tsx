import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Forests", href: "/forests" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Get Active", href: "/get-active" },
    { label: "About", href: "/about" }
  ];

  return (
    <nav className={`fixed top-0 w-full bg-nav-background border-b border-border z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0bfced52-de5f-480f-b199-bd5d951ba6f0.png" 
                alt="Ananta Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="font-cabinet text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Donate styled like David Suzuki */}
          <div className="hidden lg:block">
            <Button className="font-cabinet bg-red-600 text-white hover:bg-red-700 font-semibold">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="font-cabinet block text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button className="font-cabinet w-full bg-red-600 text-white hover:bg-red-700 font-semibold">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;