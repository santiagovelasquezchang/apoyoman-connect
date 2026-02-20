import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold rounded-lg px-8 h-12 transition-colors"
              >
                <Link to="/contact">
                  {t("cta.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-sm font-semibold rounded-lg px-8 h-12 transition-colors"
              >
                <a href="tel:+1234567890">
                  {t("cta.call")}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
