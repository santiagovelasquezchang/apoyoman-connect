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
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} variant="fade-up" delay={index * 100}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground leading-[0.95] mb-6 tracking-tight">
              APOYO<span className="text-accent">MAN</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90 mb-10 tracking-wide uppercase">
              {t("hero.tagline")}
            </p>

            <div className="space-y-1 mb-14 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-primary-foreground/60">
                {t("hero.line1")}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/60">
                {t("hero.line2")}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold rounded-lg px-10 h-13 transition-colors"
            >
              <Link to="/experience">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  );
}
