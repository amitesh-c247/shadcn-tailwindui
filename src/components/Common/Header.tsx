"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Who It's For", href: "#for-who" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="bg-card/90 backdrop-blur-xl rounded-2xl shadow-lg">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Logo */}

              <span className="font-bold text-lg hidden sm:block">
                Coach<span className="text-primary font-bold">ED</span>
              </span>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center">
                <div className="flex items-center bg-muted/50 rounded-full p-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* CTA Buttons */}
              <div className="flex items-center gap-2">
                <Button className="hidden sm:inline-flex rounded-full">Sign In</Button>
                <Button className="rounded-full">Get Started</Button>

                {/* Mobile Menu Button */}
                <Button
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 p-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border/50 mt-2">
                  <Button className="w-full justify-start">Sign In</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
