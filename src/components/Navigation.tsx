import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Our Work", href: "#work" },
    { label: "Experts", href: "#experts" },
    { label: "Take Action", href: "#action" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0bfced52-de5f-480f-b199-bd5d951ba6f0.png" 
              alt="Ananta Logo"
              className="h-16 w-auto"
            />
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
            className="lg:hidden w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-0.5 bg-foreground"></div>
                <div className="w-5 h-0.5 bg-foreground"></div>
                <div className="w-5 h-0.5 bg-foreground"></div>
              </div>
            )}
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