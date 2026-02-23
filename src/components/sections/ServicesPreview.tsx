import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FlipCard } from "@/components/ui/FlipCard";

export function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.recruiting.title"),
      description: t("services.recruiting.description"),
    },
    {
      title: t("services.outsourcing.title"),
      description: t("services.outsourcing.description"),
    },
    {
      title: t("services.payroll.title"),
      description: t("services.payroll.description"),
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

        {/* Flip Cards Grid */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FlipCard
                key={service.title}
                className="h-64 md:h-72"
                front={
                  <h3 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight">
                    {service.title}
                  </h3>
                }
                back={
                  <p className="text-sm md:text-base text-primary-foreground/90 text-center leading-relaxed">
                    {service.description}
                  </p>
                }
              />
            ))}
          </div>
        </ScrollReveal>

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
