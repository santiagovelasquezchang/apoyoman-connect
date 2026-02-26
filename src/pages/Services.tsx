import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Search,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceInquiryForm } from "@/components/forms/ServiceInquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import servicesBg from "@/assets/services-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "recruiting",
      icon: Search,
      title: t("svc.recruiting.title"),
      description: t("svc.recruiting.desc"),
      features: [
        t("svc.recruiting.f1"),
        t("svc.recruiting.f2"),
        t("svc.recruiting.f3"),
      ],
    },
    {
      id: "payroll",
      icon: FileCheck,
      title: t("svc.payroll.title"),
      description: t("svc.payroll.desc"),
      features: [
        t("svc.payroll.f1"),
        t("svc.payroll.f2"),
        t("svc.payroll.f3"),
      ],
    },
    {
      id: "outsourcing",
      icon: Users,
      title: t("svc.outsourcing.title"),
      description: t("svc.outsourcing.desc"),
      features: [
        t("svc.outsourcing.f1"),
        t("svc.outsourcing.f2"),
        t("svc.outsourcing.f3"),
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={servicesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("servicesPage.title")}{" "}
            <span className="text-accent">{t("servicesPage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("servicesPage.description")}
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => {
        const isOdd = index % 2 === 1;
        const contentVariant = isOdd ? "slide-right" : "slide-left";
        const featuresVariant = isOdd ? "slide-left" : "slide-right";

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${
              index % 2 === 0 ? "bg-background" : "bg-section-light"
            }`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isOdd ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <ScrollReveal variant={contentVariant} className={isOdd ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link to="/contact">
                      {t("servicesPage.consultation")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </ScrollReveal>

                {/* Features Card */}
                <ScrollReveal
                  variant={featuresVariant}
                  delay={200}
                  className={isOdd ? "lg:col-start-1" : ""}
                >
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      {t("servicesPage.features")}
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Inquiry Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal variant="slide-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                <ClipboardList size={16} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {t("serviceForm.title")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("servicesPage.ctaTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("serviceForm.description")}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={200}>
              <div className="bg-card rounded-3xl border border-border p-6 md:p-8 soft-shadow">
                <ServiceInquiryForm sourcePage="services" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t("servicesPage.ctaTitle")}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("servicesPage.ctaDescription")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                {t("servicesPage.ctaButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
