import { CheckCircle, Award, Clock, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: t("why.reason1.title"),
      description: t("why.reason1.description"),
    },
    {
      icon: CheckCircle,
      title: t("why.reason2.title"),
      description: t("why.reason2.description"),
    },
    {
      icon: Clock,
      title: t("why.reason3.title"),
      description: t("why.reason3.description"),
    },
    {
      icon: Headphones,
      title: t("why.reason4.title"),
      description: t("why.reason4.description"),
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 blob-shape blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 blob-shape-alt blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20">
              {t("why.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("why.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("why.description")}
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div 
                  key={reason.title} 
                  className="flex items-start gap-5 p-5 rounded-2xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:scale-110 transition-transform">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Organic shape */}
          <div className="relative">
            <div className="aspect-square rounded-[3rem] gradient-overlay p-10 md:p-14 flex flex-col justify-center soft-shadow relative overflow-hidden">
              {/* Inner organic shapes */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-accent/30 blob-shape blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 blob-shape-alt blur-2xl" />
              
              <div className="text-center relative z-10">
                <div className="text-7xl md:text-8xl font-bold text-accent mb-4">
                  98%
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">
                  {t("why.retention")}
                </p>
                <p className="text-primary-foreground/70 text-lg">
                  {t("why.retentionDesc")}
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-card soft-shadow border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">{t("why.years")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
