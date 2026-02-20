import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

export function WhyChooseUs() {
  const { t } = useLanguage();
  const { ref: highlightRef, isVisible: highlightVisible } = useScrollAnimation<HTMLDivElement>();

  const retentionValue = useCounterAnimation({ end: 98, suffix: "%", isVisible: highlightVisible });
  const yearsValue = useCounterAnimation({ end: 20, suffix: "+", isVisible: highlightVisible });

  const reasons = [
    {
      title: t("why.reason1.title"),
      description: t("why.reason1.description"),
    },
    {
      title: t("why.reason2.title"),
      description: t("why.reason2.description"),
    },
    {
      title: t("why.reason3.title"),
      description: t("why.reason3.description"),
    },
    {
      title: t("why.reason4.title"),
      description: t("why.reason4.description"),
    },
  ];

  const highlights = [
    { value: retentionValue, label: t("why.retention") },
    { value: yearsValue, label: t("why.years") },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <ScrollReveal variant="slide-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                {t("why.badge")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("why.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">
                {t("why.description")}
              </p>
            </ScrollReveal>

            <div className="space-y-0 border-t border-border">
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                  <div className="py-5 border-b border-border">
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — 2 cols, highlight numbers */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <ScrollReveal variant="slide-right">
              <div ref={highlightRef} className="bg-primary rounded-xl p-10 md:p-12">
                {highlights.map((h, i) => (
                  <div key={i} className={i > 0 ? "mt-10 pt-10 border-t border-primary-foreground/15" : ""}>
                    <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                      {h.value}
                    </div>
                    <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
