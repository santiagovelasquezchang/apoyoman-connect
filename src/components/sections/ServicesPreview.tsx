import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.financial.title"),
      description: t("services.financial.description"),
      href: "/services#finance",
    },
    {
      title: t("services.hr.title"),
      description: t("services.hr.description"),
      href: "/services#hr",
    },
    {
      title: t("services.payroll.title"),
      description: t("services.payroll.description"),
      href: "/services#payroll",
    },
    {
      title: t("services.compliance.title"),
      description: t("services.compliance.description"),
      href: "/services#admin",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
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

        {/* Services — clean bordered grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-background p-8 md:p-10 transition-colors hover:bg-muted/40"
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
      </div>
    </section>
  );
}
