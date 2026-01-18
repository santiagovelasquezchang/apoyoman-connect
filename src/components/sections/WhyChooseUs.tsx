import { CheckCircle, Award, Clock, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Deep understanding of oil & gas sector requirements, regulations, and operational dynamics.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "15+ years serving major energy companies with consistent delivery and measurable results.",
  },
  {
    icon: Clock,
    title: "Efficiency First",
    description:
      "Streamlined processes that reduce overhead costs and improve operational efficiency.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 availability with dedicated account managers who understand your business.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Why APOYOMAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Business Operations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand the unique challenges faced by oil and gas companies. 
              Our specialized services are designed to handle complex financial 
              and HR requirements, so you can concentrate on extraction, production, 
              and growth.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-overlay p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent mb-4">
                  98%
                </div>
                <p className="text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                  Client Retention Rate
                </p>
                <p className="text-primary-foreground/70">
                  Our clients stay because we deliver results
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
