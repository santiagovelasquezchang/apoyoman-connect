import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding gradient-overlay relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 blob-shape blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 blob-shape-alt blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/10 blob-shape blur-2xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base rounded-2xl px-10 h-14 soft-shadow-accent transition-all hover:scale-105"
            >
              <Link to="/contact">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground text-base rounded-2xl px-10 h-14 backdrop-blur-sm transition-all hover:scale-105"
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                {t("cta.call")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
