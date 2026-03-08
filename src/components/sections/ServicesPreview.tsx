import { Link } from "react-router-dom";
import { ArrowRight, Users, FileCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FlipCard } from "@/components/ui/FlipCard";

export function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t("flip.recruiting.title"),
      description: t("flip.recruiting.desc"),
    },
    {
      icon: Settings,
      title: t("flip.outsourcing.title"),
      description: t("flip.outsourcing.desc"),
    },
    {
      icon: FileCheck,
      title: t("flip.payroll.title"),
      description: t("flip.payroll.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
              {t("services.badge")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              {t("services.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Flip Cards Grid */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {services.map((service) => (
              <FlipCard
                key={service.title}
                className="h-72 md:h-80 lg:h-96"
                front={
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight">
                      {service.title}
                    </h3>
                  </div>
                }
                back={
                  <p className="text-sm md:text-base text-primary-foreground/90 text-center leading-relaxed px-2">
                    {service.description}
                  </p>
                }
              />
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:text-accent hover:border-accent/40 rounded-sm h-12 px-10 text-sm font-semibold uppercase tracking-wide transition-colors"
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
