import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    {
      label: "About",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Stories & Press", href: "/stories-press" }
      ]
    },
    {
      label: "Our Work", 
      items: [
        { label: "Projects", href: "/projects" },
        { label: "Reports & Impact", href: "/reports-impact" }
      ]
    },
    {
      label: "Get Involved",
      items: [
        { label: "Partner With Us", href: "/partner" },
        { label: "Volunteer", href: "/volunteer" }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 w-full bg-nav-background border-b border-border z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0bfced52-de5f-480f-b199-bd5d951ba6f0.png" 
                alt="Ananta Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Right side - Navigation, Donate Button and Mobile Menu */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="font-cabinet text-foreground hover:text-primary transition-colors font-light flex items-center gap-1 outline-none">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border shadow-lg rounded-lg p-2 min-w-[180px]">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <a 
                          href={subItem.href}
                          className="font-cabinet text-foreground hover:text-primary transition-colors w-full px-3 py-2 font-light cursor-pointer"
                        >
                          {subItem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>

            {/* CTA Button - Donate */}
            <div className="hidden md:block">
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="font-cabinet text-foreground font-light text-lg border-b border-border/30 pb-2">
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <a 
                        key={subItem.label}
                        href={subItem.href}
                        className="font-cabinet block text-foreground/80 hover:text-primary transition-colors py-1 font-light"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
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