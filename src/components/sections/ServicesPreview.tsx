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
    <section className="section-padding bg-section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blob-shape blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blob-shape-alt blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4 border border-accent/20">
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

        {/* Services Grid - Asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 rounded-[2rem] bg-card border border-border hover:border-accent/30 soft-shadow hover:soft-shadow-accent transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="flex flex-col gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 h-14 soft-shadow transition-all hover:scale-105">
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
