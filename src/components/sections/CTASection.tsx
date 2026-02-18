import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

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
        </div>
      </div>
    </section>
  );
}
