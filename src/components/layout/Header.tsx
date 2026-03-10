import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

function LogoMark({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stylized "A" icon mark */}
      <path
        d="M20 4L6 36h7l2.5-6h9l2.5 6h7L20 4zm0 12l3.5 8h-7L20 16z"
        fill={color}
      />
      {/* Gold/accent bar across the A */}
      <rect x="12" y="25" width="16" height="3" rx="1" className="fill-accent" />
    </svg>
  );
}

function Logo({ isScrolled, size = "default" }: { isScrolled: boolean; size?: "default" | "small" }) {
  const textSize = size === "small" ? "text-xl" : "text-[1.7rem]";
  const iconSize = size === "small" ? "h-8 w-8" : "h-10 w-10";
  const iconColor = isScrolled ? "hsl(var(--primary))" : "white";
  const textColor = isScrolled ? "text-primary" : "text-white";

  return (
    <span className="inline-flex items-center gap-1.5">
      <LogoMark className={iconSize} color={iconColor} />
      <span className={cn("font-bold tracking-tight", textSize, textColor)}>
        APOYO<span className="text-accent">MAN</span>
      </span>
    </span>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const leftLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.experience"), href: "/experience" },
  ];

  const rightLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const joinLink = { name: t("nav.join"), href: "/join" };

  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const linkClass = (href: string) =>
    cn(
      "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
      location.pathname === href
        ? "text-accent"
        : isScrolled
        ? "text-foreground/70 hover:text-accent"
          : "text-white/75 hover:text-accent"
    );

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
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Logo left + hamburger right */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <Logo isScrolled={isScrolled} size="small" />
            </Link>
            <div className="flex items-center gap-2">
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
          </div>

          {/* Desktop: Left links | Center logo | Right links + actions */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Navigation Links */}
            <div className="flex items-center gap-0.5 flex-1">
              {leftLinks.map((link) => (
                <Link key={link.href} to={link.href} className={linkClass(link.href)}>
                  {link.name}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 mx-6">
              <Logo isScrolled={isScrolled} />
            </Link>

            {/* Right Navigation Links + Actions */}
            <div className="flex items-center justify-end gap-0.5 flex-1">
              {rightLinks.map((link) => (
                <Link key={link.href} to={link.href} className={linkClass(link.href)}>
                  {link.name}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              ))}
              <div className="flex items-center gap-3 ml-4">
                <LanguageToggle />
                <Button
                  asChild
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-lg text-sm h-9 px-5"
                >
                  <Link to="/join">{t("nav.join")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col py-3">
              {allLinks.map((link) => (
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
                  <Link to="/join">{t("nav.join")}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
