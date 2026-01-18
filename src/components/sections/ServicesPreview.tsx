import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Users, FileCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Financial Management",
    description:
      "Complete financial operations including accounting, budgeting, reporting, and strategic financial planning tailored for the oil & gas industry.",
    href: "/services#finance",
  },
  {
    icon: Users,
    title: "HR Outsourcing",
    description:
      "End-to-end human resources management from recruitment to employee development, designed for energy sector workforce dynamics.",
    href: "/services#hr",
  },
  {
    icon: FileCheck,
    title: "Payroll & Compliance",
    description:
      "Accurate, timely payroll processing with full regulatory compliance covering federal, state, and industry-specific requirements.",
    href: "/services#payroll",
  },
  {
    icon: Briefcase,
    title: "Administrative Support",
    description:
      "Comprehensive back-office support including document management, procurement assistance, and operational administration.",
    href: "/services#admin",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-section-light">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive B2B Solutions for Oil & Gas
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in delivering financial and HR excellence, allowing energy 
            companies to focus on their core operations while we manage the complexities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
