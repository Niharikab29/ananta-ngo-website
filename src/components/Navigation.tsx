import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Our Work",
      dropdown: [
        { label: "Greening Our Cities", href: "#greening" },
        { label: "Reimagining Learning", href: "#learning" },
        { label: "Empowering Women & Youth", href: "#empowerment" }
      ]
    },
    {
      label: "About Us",
      dropdown: [
        { label: "Our Mission", href: "#mission" },
        { label: "Our Team", href: "#team" },
        { label: "Our Values", href: "#values" }
      ]
    },
    {
      label: "Get Involved",
      dropdown: [
        { label: "Volunteer", href: "#volunteer" },
        { label: "Partner With Us", href: "#partner" },
        { label: "Donate", href: "#donate" }
      ]
    },
    { label: "Stories", href: "#stories" },
    { label: "Reports", href: "#reports" },
    { label: "Contact", href: "#contact" }
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
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <a 
                    href={item.href || "#"} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}
                
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Support Our Mission
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
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href || "#"} 
                      className="block text-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Support Our Mission
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