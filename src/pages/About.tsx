import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Users,
  Briefcase,
  Building2,
  CheckCircle,
  Zap,
  Globe,
  FileText,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const services = [
    { icon: Users, titleKey: "about.service1.title", descKey: "about.service1.desc" },
    { icon: Briefcase, titleKey: "about.service2.title", descKey: "about.service2.desc" },
    { icon: FileText, titleKey: "about.service3.title", descKey: "about.service3.desc" },
    { icon: Truck, titleKey: "about.service4.title", descKey: "about.service4.desc" },
  ];

  const advantages = [
    { icon: Shield, titleKey: "about.adv1.title", descKey: "about.adv1.desc" },
    { icon: Zap, titleKey: "about.adv2.title", descKey: "about.adv2.desc" },
    { icon: Globe, titleKey: "about.adv3.title", descKey: "about.adv3.desc" },
    { icon: Building2, titleKey: "about.adv4.title", descKey: "about.adv4.desc" },
    { icon: CheckCircle, titleKey: "about.adv5.title", descKey: "about.adv5.desc" },
  ];

  const values = [
    { icon: Shield, titleKey: "about.val1.title", descKey: "about.val1.desc" },
    { icon: Target, titleKey: "about.val2.title", descKey: "about.val2.desc" },
    { icon: Eye, titleKey: "about.val3.title", descKey: "about.val3.desc" },
    { icon: Users, titleKey: "about.val4.title", descKey: "about.val4.desc" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            {t("aboutPage.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("aboutPage.title")}{" "}
            <span className="text-accent">{t("aboutPage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("aboutPage.description")}
          </p>
        </div>
      </section>

      {/* What is Apoyoman 2.0 */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {t("about.whatBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("about.whatTitle")}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("about.whatP1")}</p>
                <p>{t("about.whatP2")}</p>
              </div>

              {/* Key facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "1989", labelKey: "about.fact.founded" },
                  { value: "20+", labelKey: "about.fact.years" },
                  { value: "300+", labelKey: "about.fact.workers" },
                  { value: "5+", labelKey: "about.fact.projects" },
                ].map((fact) => (
                  <div key={fact.labelKey} className="bg-section-light rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-accent">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{t(fact.labelKey)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl gradient-overlay p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                    1989
                  </div>
                  <p className="text-xl text-primary-foreground font-semibold mb-1">
                    {t("about.established")}
                  </p>
                  <p className="text-primary-foreground/70 text-sm max-w-xs mx-auto">
                    {t("about.establishedSub")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("aboutPage.missionTitle")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("aboutPage.missionDescription")}
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-6">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("aboutPage.visionTitle")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("aboutPage.visionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("about.servicesBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about.servicesTitle")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.titleKey}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <svc.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(svc.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(svc.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("about.advBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about.advTitle")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.titleKey}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <adv.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(adv.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(adv.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("aboutPage.valuesBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("aboutPage.valuesTitle")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.titleKey}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(value.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic max-w-3xl mx-auto">
            "{t("about.tagline")}"
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("aboutPage.ctaTitle")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t("aboutPage.ctaDescription")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              {t("aboutPage.ctaButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
