import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
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

  const utilityLinks = [
    { label: "Search", href: "#search", icon: Search },
    { label: "Français", href: "#french" },
    { label: "Subscribe", href: "#subscribe" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top utility bar */}
        <div className="hidden lg:flex justify-end items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6 text-sm">
            {utilityLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-cabinet text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-cabinet text-xl font-bold text-gray-900 tracking-wide">
                  ANANTA FOUNDATION
                </div>
                <div className="font-cabinet text-sm text-gray-600 -mt-1">
                  Regenerating communities.
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="font-cabinet text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                {item.label}
              </a>
            ))}
            <Button className="font-cabinet bg-red-600 text-white hover:bg-red-700 font-semibold px-6 py-2 text-lg">
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
          <div className="lg:hidden border-t border-gray-200 animate-fade-in">
            <div className="py-4 space-y-4">
              {/* Mobile utility links */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                {utilityLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    className="font-cabinet text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center space-x-1"
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Mobile main nav */}
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="font-cabinet block text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
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