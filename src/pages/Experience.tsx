import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import experienceBg from "@/assets/experience-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const caseStudyKeys = ["petrozuata", "ameriven", "sincor", "maraven", "otac"];

const trackRecord = [
  { project: "Petrozuata", partners: "PDVSA + ConocoPhillips", workers: "~300", period: "1996–2007" },
  { project: "Ameriven", partners: "PDVSA + ChevronTexaco + ConocoPhillips", workers: "~350", periodKey: "exp.period.2000s" },
  { project: "Sincor", partners: "PDVSA + TotalEnergies + Statoil", workers: "~320", periodKey: "exp.period.2000s" },
  { project: "exp.maraven.name", partners: "Maraven, Corpoven, Lagoven, CIED", workers: "—", period: "1989–2010" },
  { project: "OTAC", partners: "exp.otac.partners", workers: "~200", period: "1992–1996" },
];

function StatsBar() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const yearsValue = useCounterAnimation({ end: 20, suffix: "+", isVisible });
  const workersValue = useCounterAnimation({ end: 1000, suffix: "+", isVisible });
  const foundedValue = useCounterAnimation({ end: 1989, isVisible, duration: 2000 });

  const stats = [
    { value: yearsValue, labelKey: "exp.stat.years" },
    { value: workersValue, labelKey: "exp.stat.workers" },
    { value: foundedValue, labelKey: "exp.stat.founded" },
  ];

  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.labelKey} variant="fade-up" delay={index * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{t(stat.labelKey)}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ studyKey }: { studyKey: string }) {
  const { t } = useLanguage();

  // Role text is stored as a single string with bullet items separated by newlines
  const roleText = t(`exp.${studyKey}.role`);
  const roleItems = roleText.split("\n").filter(Boolean);

  return (
    <ScrollReveal variant="fade-up">
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t(`exp.${studyKey}.name`)}
          </h3>
          <p className="text-lg text-accent font-medium italic">
            {t(`exp.${studyKey}.subtitle`)}
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid md:grid-cols-2">
          {/* Left column — Context + Challenge */}
          <div className="p-6 md:p-8 border-r-0 md:border-r border-border space-y-6" style={{ borderLeftWidth: '3px', borderLeftColor: 'hsl(var(--accent))' }}>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {t("exp.label.context")}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t(`exp.${studyKey}.context`)}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {t("exp.label.challenge")}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t(`exp.${studyKey}.challenge`)}
              </p>
            </div>
          </div>

          {/* Right column — Role + Outcome */}
          <div className="p-6 md:p-8 space-y-6" style={{ borderRightWidth: '3px', borderRightColor: 'hsl(var(--primary))' }}>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {t("exp.label.role")}
              </h4>
              <ul className="space-y-2">
                {roleItems.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {t("exp.label.outcome")}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t(`exp.${studyKey}.outcome`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={experienceBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("experiencePage.title")}{" "}
            <span className="text-accent">{t("experiencePage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("experiencePage.description")}
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Case Studies */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("exp.caseStudies.title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-10 lg:space-y-14">
            {caseStudyKeys.map((key) => (
              <CaseStudyCard key={key} studyKey={key} />
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Summary Table */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("exp.summary.title")}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent/30">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                      {t("exp.table.project")}
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                      {t("exp.table.partners")}
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                      {t("exp.table.workers")}
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                      {t("exp.table.period")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trackRecord.map((row) => {
                    const projectName = row.project.startsWith("exp.") ? t(row.project) : row.project;
                    const partners = row.partners.startsWith("exp.") ? t(row.partners) : row.partners;
                    const period = row.periodKey ? t(row.periodKey) : row.period;
                    return (
                      <tr key={projectName} className="border-b border-border hover:bg-section-light transition-colors">
                        <td className="py-4 px-4 font-semibold text-foreground">{projectName}</td>
                        <td className="py-4 px-4 text-muted-foreground">{partners}</td>
                        <td className="py-4 px-4 text-accent font-semibold">{row.workers}</td>
                        <td className="py-4 px-4 text-muted-foreground">{period}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <p className="text-center text-lg font-semibold text-foreground mt-8">
              {t("exp.summary.tagline")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t("experiencePage.ctaTitle")}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("experiencePage.ctaDescription")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                {t("experiencePage.ctaButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
