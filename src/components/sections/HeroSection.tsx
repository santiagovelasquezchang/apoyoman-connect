import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero.stat1.value"), label: t("hero.stat1.label") },
    { value: t("hero.stat2.value"), label: t("hero.stat2.label") },
    { value: t("hero.stat3.value"), label: t("hero.stat3.label") },
    { value: t("hero.stat4.value"), label: t("hero.stat4.label") },
  ];

  const capabilities = [
    t("hero.cap1"),
    t("hero.cap2"),
    t("hero.cap3"),
    t("hero.cap4"),
    t("hero.cap5"),
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-primary">
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Content */}
          <div className="animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-5">
              {t("hero.eyebrow")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.1] mb-6">
              {t("hero.title")}{" "}
              <span className="text-accent">{t("hero.titleAccent")}</span>
            </h1>

            <p className="text-lg text-primary-foreground/75 mb-10 max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold rounded-lg px-8 h-12 transition-colors"
              >
                <Link to="/services">
                  {t("hero.exploreServices")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-sm font-semibold rounded-lg px-8 h-12 transition-colors"
              >
                <Link to="/contact">{t("hero.contactUs")}</Link>
              </Button>
            </div>
          </div>

          {/* Right — Capabilities panel */}
          <div className="hidden lg:block animate-fade-in animation-delay-200">
            <div className="border border-primary-foreground/15 rounded-xl p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                {t("hero.capTitle")}
              </h2>
              <ul className="space-y-4">
                {capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-primary-foreground/80 text-[15px] leading-snug"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats — editorial grid with dividers */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 animate-fade-in animation-delay-300">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 md:py-0 text-center ${
                i > 0 ? "border-l border-primary-foreground/15" : ""
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
