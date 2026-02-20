import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  const { t } = useLanguage();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const services = [
    {
      title: t("services.recruiting.title"),
      description: t("services.recruiting.description"),
      href: "/services#recruiting",
    },
    {
      title: t("services.outsourcing.title"),
      description: t("services.outsourcing.description"),
      href: "/services#outsourcing",
    },
    {
      title: t("services.payroll.title"),
      description: t("services.payroll.description"),
      href: "/services#payroll",
    },
    {
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      href: "/services#logistics",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              {t("services.badge")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("services.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Services — clean bordered grid with staggered reveal */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border"
        >
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group bg-background p-8 md:p-10 transition-all duration-700 ease-out hover:bg-muted/40",
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:text-accent hover:border-accent/40 rounded-lg h-11 px-8 text-sm font-semibold transition-colors"
            >
              <Link to="/services">
                {t("services.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
