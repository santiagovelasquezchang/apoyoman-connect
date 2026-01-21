import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  {
    name: "Robert Anderson",
    role: "Chief Executive Officer",
    bio: "25+ years in oil & gas industry leadership. Previously VP at major energy corporation.",
  },
  {
    name: "Maria Santos",
    role: "Chief Financial Officer",
    bio: "CPA with 20 years experience in energy sector financial management and compliance.",
  },
  {
    name: "James Mitchell",
    role: "Director of HR Services",
    bio: "HR executive with extensive experience in workforce management for oil & gas companies.",
  },
  {
    name: "Linda Patel",
    role: "Director of Operations",
    bio: "Operations specialist focused on streamlining back-office processes for energy clients.",
  },
];

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our business relationships and operations.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide, continuously improving our processes.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description:
        "We view our clients as partners, investing in their success as if it were our own.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We maintain open communication and clear reporting in all our client relationships.",
    },
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

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
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

            {/* Vision */}
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

      {/* Our Story */}
      <section className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {t("aboutPage.storyBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("aboutPage.storyTitle")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("aboutPage.storyP1")}</p>
                <p>{t("aboutPage.storyP2")}</p>
                <p>{t("aboutPage.storyP3")}</p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl gradient-overlay p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                    2009
                  </div>
                  <p className="text-xl text-primary-foreground">
                    Established & Serving the Industry
                  </p>
                </div>
              </div>
            </div>
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
                key={value.title}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section-padding bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {t("aboutPage.teamBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("aboutPage.teamTitle")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
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
