import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "15+", labelKey: "hero.stat1.label" },
  { value: "50+", labelKey: "hero.stat2.label" },
  { value: "$2B+", label: "Managed Budgets" },
  { value: "5,000+", label: "Employees Supported" },
];

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description:
      "APOYOMAN was established with a vision to provide specialized B2B services to the oil and gas industry.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    description:
      "Expanded operations to serve clients across multiple states in the Gulf Coast region.",
  },
  {
    year: "2015",
    title: "HR Division Launch",
    description:
      "Introduced comprehensive HR outsourcing services to complement our financial offerings.",
  },
  {
    year: "2018",
    title: "50 Client Milestone",
    description:
      "Reached 50 active oil & gas clients, establishing ourselves as an industry leader.",
  },
  {
    year: "2021",
    title: "Technology Integration",
    description:
      "Implemented advanced digital solutions for real-time reporting and client dashboards.",
  },
  {
    year: "2024",
    title: "National Presence",
    description:
      "Now serving energy companies nationwide with expanded service capabilities.",
  },
];

const testimonials = [
  {
    quote:
      "APOYOMAN transformed our back-office operations. Their financial expertise and understanding of our industry has been invaluable.",
    author: "John Martinez",
    role: "CFO",
    company: "Gulf Energy Partners",
  },
  {
    quote:
      "The HR team at APOYOMAN handles our workforce management with precision. It's like having an in-house team at a fraction of the cost.",
    author: "Sarah Chen",
    role: "VP Operations",
    company: "Permian Resources Inc.",
  },
  {
    quote:
      "Their compliance expertise has saved us from potential regulatory issues multiple times. Truly a trusted partner.",
    author: "Michael Thompson",
    role: "Director of Finance",
    company: "Coastal Petroleum LLC",
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            {t("experiencePage.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("experiencePage.title")}{" "}
            <span className="text-accent">{t("experiencePage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("experiencePage.description")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.labelKey ? t(stat.labelKey) : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("experiencePage.journeyBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("experiencePage.journeyTitle")}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {/* Milestones */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card rounded-xl border border-border p-6 inline-block text-left">
                      <span className="text-accent font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2" />

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {t("experiencePage.industriesBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("experiencePage.industriesTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("experiencePage.industriesDescription")}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "Upstream Operations" },
                  { icon: Globe, label: "Midstream Services" },
                  { icon: Award, label: "Downstream Processing" },
                  { icon: Users, label: "Oilfield Services" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-section-light"
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Drilling Companies", count: "20+" },
                { title: "Pipeline Operators", count: "12+" },
                { title: "Refineries", count: "8+" },
                { title: "Service Providers", count: "15+" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">
                    {item.count}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("experiencePage.testimonialsBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("experiencePage.testimonialsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-card rounded-xl border border-border p-6 md:p-8"
              >
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("experiencePage.ctaTitle")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t("experiencePage.ctaDescription")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              {t("experiencePage.ctaButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
