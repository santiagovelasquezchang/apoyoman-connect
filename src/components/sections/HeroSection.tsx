import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t("hero.feature1.title"),
      description: t("hero.feature1.description"),
    },
    {
      icon: Users,
      title: t("hero.feature2.title"),
      description: t("hero.feature2.description"),
    },
    {
      icon: Shield,
      title: t("hero.feature3.title"),
      description: t("hero.feature3.description"),
    },
  ];

  const stats = [
    { value: t("hero.stat1.value"), label: t("hero.stat1.label") },
    { value: t("hero.stat2.value"), label: t("hero.stat2.label") },
    { value: t("hero.stat3.value"), label: t("hero.stat3.label") },
    { value: t("hero.stat4.value"), label: t("hero.stat4.label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 blob-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-foreground/10 blob-shape-alt blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 blob-shape blur-2xl" />

      <div className="container relative mx-auto px-4 md:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-accent/20 text-accent mb-6 animate-fade-in backdrop-blur-sm border border-accent/30">
              <Shield size={16} />
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
              {t("hero.title")}{" "}
              <span className="text-accent">{t("hero.titleAccent")}</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base rounded-2xl px-8 h-14 soft-shadow-accent transition-all hover:scale-105"
              >
                <Link to="/services">
                  {t("hero.exploreServices")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground text-base rounded-2xl px-8 h-14 backdrop-blur-sm transition-all hover:scale-105 font-semibold"
              >
                <Link to="/contact">{t("hero.contactUs")}</Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards - Stacked with offset */}
          <div className="hidden lg:block relative">
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-5 p-6 rounded-3xl glass border-primary-foreground/10 animate-slide-in-right transition-all hover:translate-x-2 hover:bg-white/15"
                  style={{ 
                    animationDelay: `${(index + 1) * 100}ms`,
                    marginLeft: `${index * 20}px`
                  }}
                >
                  <div className="p-4 rounded-2xl bg-accent soft-shadow-accent">
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
        </div>

        {/* Stats Bar - More organic shape */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 md:p-10 rounded-[2.5rem] glass animate-fade-in animation-delay-400">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
