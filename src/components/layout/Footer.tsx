import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t("nav.home"), href: "/" },
      { name: t("nav.services"), href: "/services" },
      { name: t("nav.experience"), href: "/experience" },
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    services: [
      { name: t("footer.service1"), href: "/services#recruiting" },
      { name: t("footer.service2"), href: "/services#outsourcing" },
      { name: t("footer.service3"), href: "/services#payroll" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="APOYOMAN" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:contact@apoyoman.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  contact@apoyoman.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} APOYOMAN. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
