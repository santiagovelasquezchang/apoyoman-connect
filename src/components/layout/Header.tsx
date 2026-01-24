import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.experience"), href: "/experience" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span
                className={cn(
                  "text-xl md:text-2xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                APOYO<span className="text-accent">MAN</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? isScrolled 
                      ? "text-accent bg-primary/5" 
                      : "text-accent bg-white/10"
                    : isScrolled
                      ? "text-foreground/80 hover:text-accent hover:bg-primary/5"
                      : "text-white/90 hover:text-accent hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <Button 
              asChild 
              className={cn(
                "font-semibold transition-all",
                isScrolled 
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              )}
            >
              <Link to="/contact">{t("nav.getStarted")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-accent bg-primary/5"
                      : "text-foreground/80 hover:text-accent hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">{t("nav.getStarted")}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
