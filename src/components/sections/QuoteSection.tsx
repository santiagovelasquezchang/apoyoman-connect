import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal variant="fade-up">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug italic motion-safe:animate-fade-in">
              "{t("home.quote")}"
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
