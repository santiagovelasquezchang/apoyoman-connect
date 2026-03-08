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
          <img src={heroBg} alt="" className="w-full h-full object-cover blur-[2px]" />
          <div className="absolute inset-0" style={{ backgroundColor: '#0B1D33', opacity: 0.78 }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[750px] mx-auto text-center">
            {/* Tagline */}
            <p
              className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-foreground/90 mb-5 tracking-wide uppercase leading-snug opacity-0 animate-fade-in"
            >
              {t("hero.tagline")}
            </p>

            {/* Separator */}
            <div className="w-16 h-[2px] bg-accent mx-auto mb-[30px] opacity-0 animate-fade-in animation-delay-100" />

            {/* Subtext */}
            <div className="space-y-1 mb-[36px] max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
              <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed">
                {t("hero.line1")}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed">
                {t("hero.line2")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-[25px] opacity-0 animate-fade-in animation-delay-200">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold rounded-sm px-12 h-13 tracking-wide uppercase transition-all duration-200 hover:scale-[1.03]"
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
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 text-sm font-semibold rounded-sm px-12 h-13 tracking-wide uppercase transition-all duration-200 hover:scale-[1.03]"
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
