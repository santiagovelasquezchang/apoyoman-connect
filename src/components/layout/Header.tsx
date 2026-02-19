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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className={cn(
                "text-lg md:text-xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              APOYO<span className="text-accent">MAN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? isScrolled
                      ? "text-accent"
                      : "text-accent"
                    : isScrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-white/75 hover:text-white"
                )}
              >
                {link.name}
                {/* Underline indicator */}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button
              asChild
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-lg text-sm h-9 px-5"
            >
              <Link to="/contact">{t("nav.getStarted")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors border-l-2",
                    location.pathname === link.href
                      ? "text-accent border-accent bg-accent/5"
                      : "text-foreground/70 border-transparent hover:text-foreground hover:border-muted-foreground/30"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg">
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
