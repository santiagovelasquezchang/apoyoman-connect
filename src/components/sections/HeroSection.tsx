import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import heroBg from "@/assets/hero-bg.jpg";

function StatsBar() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const foundedValue = useCounterAnimation({ end: 1989, isVisible, duration: 2000 });
  const yearsValue = useCounterAnimation({ end: 20, suffix: "+", isVisible });
  const workersValue = useCounterAnimation({ end: 1000, suffix: "+", isVisible });
  const projectsValue = useCounterAnimation({ end: 5, isVisible });

  const stats = [
    { value: foundedValue, label: t("hero.stat1.label") },
    { value: yearsValue, label: t("hero.stat2.label") },
    { value: workersValue, label: t("hero.stat3.label") },
    { value: projectsValue, label: t("hero.stat4.label") },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} variant="fade-up" delay={index * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in max-w-5xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-foreground/90 mb-6 tracking-wide uppercase leading-snug max-w-3xl mx-auto">
              {t("hero.tagline")}
            </p>

            {/* Separator */}
            <div className="w-16 h-[2px] bg-accent mx-auto mb-8" />

            {/* Subtext */}
            <div className="space-y-1 mb-12 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed">
                {t("hero.line1")}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed">
                {t("hero.line2")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold rounded-sm px-10 h-12 tracking-wide uppercase transition-colors"
              >
                <Link to="/experience">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-sm font-semibold rounded-sm px-10 h-12 tracking-wide uppercase transition-colors"
              >
                <Link to="/services">
                  {t("hero.cta2")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  );
}
