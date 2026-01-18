import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Financial Excellence",
    description: "Expert management of your financial operations",
  },
  {
    icon: Users,
    title: "HR Solutions",
    description: "Complete human resources outsourcing",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Industry-specific regulatory expertise",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative mx-auto px-4 md:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 animate-fade-in">
              <Shield size={16} />
              <span className="text-sm font-medium">Trusted by Oil & Gas Leaders</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
              Powering Your Business,{" "}
              <span className="text-accent">Beyond the Oilfield</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              APOYOMAN delivers expert financial management and HR outsourcing 
              solutions tailored specifically for oil and gas companies. 
              Focus on what you do best—we'll handle the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base"
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 animate-slide-in-right animation-delay-${(index + 1) * 100}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 animate-fade-in animation-delay-400">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-primary-foreground/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-primary-foreground/70">Oil & Gas Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-primary-foreground/70">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-primary-foreground/70">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
