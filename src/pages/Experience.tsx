import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, Calendar, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import experienceBg from "@/assets/experience-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const caseStudyKeys = [
  {
    key: "petrozuata",
    icon: Building2,
    workers: "~300",
    period: "1996–2007",
    partners: "PDVSA + ConocoPhillips",
  },
  {
    key: "ameriven",
    icon: Users,
    workers: "~350",
    period: "2000s",
    partners: "ChevronTexaco + ConocoPhillips + PDVSA",
  },
  {
    key: "sincor",
    icon: Briefcase,
    workers: "~320",
    period: "2000s",
    partners: "TotalEnergies + Statoil (Equinor) + PDVSA",
  },
  {
    key: "maraven",
    icon: MapPin,
    workers: "Various",
    period: "1989–2010",
    partners: "Maraven, Corpoven, Lagoven, CIED",
  },
  {
    key: "otac",
    icon: Calendar,
    workers: "~200",
    period: "1992–1996",
    partners: "Government of Venezuela",
  },
];

const trackRecord = [
  { project: "Petrozuata", partners: "PDVSA + ConocoPhillips", workers: "~300", period: "1996–2007" },
  { project: "Ameriven", partners: "PDVSA + ChevronTexaco + ConocoPhillips", workers: "~350", period: "2000s" },
  { project: "Sincor", partners: "PDVSA + TotalEnergies + Statoil", workers: "~320", period: "2000s" },
  { project: "PDVSA Affiliates", partners: "Maraven, Corpoven, Lagoven, CIED", workers: "Various", period: "1989–2010" },
  { project: "OTAC", partners: "Government of Venezuela", workers: "~200", period: "1992–1996" },
];

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
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            {t("experiencePage.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("experiencePage.title")}{" "}
            <span className="text-accent">{t("experiencePage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("experiencePage.description")}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", labelKey: "exp.stat.years" },
              { value: "5", labelKey: "exp.stat.majorProjects" },
              { value: "1,370+", labelKey: "exp.stat.workers" },
              { value: "1989", labelKey: "exp.stat.founded" },
            ].map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("exp.caseStudies.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("exp.caseStudies.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("exp.caseStudies.subtitle")}
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {caseStudyKeys.map((cs, index) => (
              <div
                key={cs.key}
                className={`bg-card rounded-2xl border border-border overflow-hidden ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="p-6 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <cs.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {t(`exp.${cs.key}.name`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">{cs.partners}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:ml-auto">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        <Users className="w-3.5 h-3.5" />
                        {cs.workers}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {cs.period}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-lg font-medium text-foreground/80 mb-6 italic">
                    {t(`exp.${cs.key}.subtitle`)}
                  </p>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        {t("exp.label.context")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`exp.${cs.key}.context`)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        {t("exp.label.role")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`exp.${cs.key}.role`)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        {t("exp.label.challenge")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`exp.${cs.key}.challenge`)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        {t("exp.label.outcome")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`exp.${cs.key}.outcome`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Summary Table */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("exp.summary.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("exp.summary.title")}
            </h2>
          </div>

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
                {trackRecord.map((row) => (
                  <tr key={row.project} className="border-b border-border hover:bg-section-light transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">{row.project}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.partners}</td>
                    <td className="py-4 px-4 text-accent font-semibold">{row.workers}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-lg font-semibold text-foreground mt-8">
            {t("exp.summary.tagline")}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
        </div>
      </section>
    </Layout>
  );
}
