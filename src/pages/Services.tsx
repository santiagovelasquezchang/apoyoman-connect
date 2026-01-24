import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Calculator,
  Users,
  FileCheck,
  Briefcase,
  ArrowRight,
  CheckCircle,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceInquiryForm } from "@/components/forms/ServiceInquiryForm";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "finance",
      icon: Calculator,
      title: t("services.financial.title"),
      subtitle: t("servicesPage.features"),
      description: t("services.financial.description"),
      features: [
        "Full-cycle accounting and bookkeeping",
        "Budget planning and forecasting",
        "Financial reporting and analysis",
        "Cost control and optimization",
        "Capital expenditure management",
        "Tax planning and compliance",
        "Audit preparation and support",
        "Cash flow management",
      ],
    },
    {
      id: "hr",
      icon: Users,
      title: t("services.hr.title"),
      subtitle: t("servicesPage.features"),
      description: t("services.hr.description"),
      features: [
        "Talent acquisition and recruitment",
        "Employee onboarding programs",
        "Performance management systems",
        "Training and development",
        "Benefits administration",
        "Employee relations and engagement",
        "HRIS implementation and management",
        "Workforce planning and analytics",
      ],
    },
    {
      id: "payroll",
      icon: FileCheck,
      title: t("services.payroll.title"),
      subtitle: t("servicesPage.features"),
      description: t("services.payroll.description"),
      features: [
        "Multi-state payroll processing",
        "Direct deposit management",
        "Tax withholding and filing",
        "Workers' compensation administration",
        "Industry-specific compliance",
        "Time and attendance tracking",
        "Expense reimbursement processing",
        "Year-end reporting (W-2s, 1099s)",
      ],
    },
    {
      id: "admin",
      icon: Briefcase,
      title: t("services.compliance.title"),
      subtitle: t("servicesPage.features"),
      description: t("services.compliance.description"),
      features: [
        "Document management and control",
        "Procurement support",
        "Vendor management",
        "Contract administration",
        "Travel and logistics coordination",
        "Office management",
        "Data entry and processing",
        "Records retention and archiving",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            {t("servicesPage.badge")}
          </span>
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
      {services.map((service, index) => (
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
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {service.subtitle}
                  </span>
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
              </div>

              {/* Features Card */}
              <div
                className={`bg-card rounded-2xl border border-border p-6 md:p-8 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {t("servicesPage.features")}:
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
            </div>
          </div>
        </section>
      ))}

      {/* Inquiry Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div>
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
              
              {/* Trust indicators */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Free consultation with no obligations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Customized solutions for your needs</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-3xl border border-border p-6 md:p-8 soft-shadow">
              <ServiceInquiryForm sourcePage="services" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
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
        </div>
      </section>
    </Layout>
  );
}
