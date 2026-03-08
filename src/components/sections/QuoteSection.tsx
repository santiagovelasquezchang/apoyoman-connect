import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            {/* Accent line */}
            <div className="w-12 h-[2px] bg-accent mx-auto mb-10" />
            <blockquote>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-snug italic">
                "{t("home.quote")}"
              </p>
            </blockquote>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
