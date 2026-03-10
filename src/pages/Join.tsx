import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Shield, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const REGION_KEYS = [
  "join.region.zulia",
  "join.region.falcon",
  "join.region.carabobo",
  "join.region.anzoategui",
  "join.region.monagas",
  "join.region.caracas",
  "join.region.otherVe",
  "join.region.international",
];

const DISCIPLINE_KEYS = [
  "join.disc.drilling",
  "join.disc.production",
  "join.disc.reservoir",
  "join.disc.process",
  "join.disc.mechanical",
  "join.disc.electrical",
  "join.disc.hse",
  "join.disc.construction",
  "join.disc.pipeline",
  "join.disc.projectMgmt",
  "join.disc.logistics",
  "join.disc.admin",
  "join.disc.it",
  "join.disc.other",
];

const EXPERIENCE_KEYS = [
  "join.exp.3-5",
  "join.exp.5-10",
  "join.exp.10-15",
  "join.exp.15-20",
  "join.exp.20+",
];

const AVAILABILITY_KEYS = [
  "join.avail.immediate",
  "join.avail.30",
  "join.avail.60",
  "join.avail.employed",
];

const QUALIFICATION_KEYS = [
  "join.qual.pdvsa",
  "join.qual.international",
  "join.qual.spanish",
  "join.qual.english",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  disciplines: string[];
  otherDiscipline: string;
  experienceLevel: string;
  availability: string;
  qualifications: string[];
  summary: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  region: "",
  disciplines: [],
  otherDiscipline: "",
  experienceLevel: "",
  availability: "",
  qualifications: [],
  summary: "",
};

export default function Join() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const toggleDiscipline = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplines: prev.disciplines.includes(key)
        ? prev.disciplines.filter((x) => x !== key)
        : [...prev.disciplines, key],
    }));
  };

  const toggleQualification = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.includes(key)
        ? prev.qualifications.filter((x) => x !== key)
        : [...prev.qualifications, key],
    }));
  };

  const isValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.disciplines.length > 0 &&
    formData.experienceLevel;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    console.log("Talent Registration Data:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden min-h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t("join.confirmTitle")}
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8">
                {t("join.confirmText")}
              </p>
              <Button
                onClick={handleReset}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12"
              >
                {t("join.confirmButton")}
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const whyCards = [
    { icon: Briefcase, titleKey: "join.card1.title", textKey: "join.card1.text" },
    { icon: Shield, titleKey: "join.card2.title", textKey: "join.card2.text" },
    { icon: Award, titleKey: "join.card3.title", textKey: "join.card3.text" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 border border-accent/30 px-4 py-1.5 rounded-sm">
            {t("join.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("join.title")}{" "}
            <span className="text-accent">{t("join.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("join.subtitle")}
          </p>
        </div>
      </section>

      {/* Why Register */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              {t("join.whyBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("join.whyTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {whyCards.map((card) => (
              <div
                key={card.titleKey}
                className="bg-primary rounded-lg border-t-4 border-t-accent border border-primary/50 p-8"
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-5">
                  <card.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {t(card.titleKey)}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                {t("join.regBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("join.regTitle")}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Section A: Personal Information */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-accent rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">
                    {t("join.sectionA")}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      {t("join.firstName")} <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, firstName: e.target.value }))
                      }
                      required
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      {t("join.lastName")} <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, lastName: e.target.value }))
                      }
                      required
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t("join.email")} <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {t("join.phone")} <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+58 412 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">{t("join.country")}</Label>
                    <Input
                      id="country"
                      placeholder={t("join.countryPlaceholder")}
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, country: e.target.value }))
                      }
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">{t("join.region")}</Label>
                    <select
                      id="region"
                      value={formData.region}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, region: e.target.value }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="">{t("join.regionPlaceholder")}</option>
                      {REGION_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(key)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Gold divider */}
              <div className="flex items-center py-4">
                <div className="flex-1 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent mx-3" />
                <div className="flex-1 h-px bg-accent/30" />
              </div>

              {/* Section B: Professional Experience */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-accent rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">
                    {t("join.sectionB")}
                  </h3>
                </div>

                {/* Disciplines */}
                <div className="mb-6">
                  <Label className="mb-3 block">
                    {t("join.disciplines")} <span className="text-accent">*</span>
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {DISCIPLINE_KEYS.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleDiscipline(key)}
                        className={cn(
                          "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all text-left",
                          formData.disciplines.includes(key)
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-muted/50 border-border text-foreground/70 hover:border-accent/50 hover:text-foreground"
                        )}
                      >
                        {t(key)}
                      </button>
                    ))}
                  </div>
                  {formData.disciplines.includes("join.disc.other") && (
                    <div className="mt-3">
                      <Input
                        placeholder={t("join.otherPlaceholder")}
                        value={formData.otherDiscipline}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            otherDiscipline: e.target.value,
                          }))
                        }
                        className="focus-visible:ring-accent"
                      />
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      {t("join.experience")} <span className="text-accent">*</span>
                    </Label>
                    <select
                      id="experience"
                      value={formData.experienceLevel}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          experienceLevel: e.target.value,
                        }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="">{t("join.experiencePlaceholder")}</option>
                      {EXPERIENCE_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(key)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">{t("join.availability")}</Label>
                    <select
                      id="availability"
                      value={formData.availability}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          availability: e.target.value,
                        }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="">{t("join.availabilityPlaceholder")}</option>
                      {AVAILABILITY_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(key)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Gold divider */}
              <div className="flex items-center py-4">
                <div className="flex-1 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent mx-3" />
                <div className="flex-1 h-px bg-accent/30" />
              </div>

              {/* Section C: Additional Qualifications */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-accent rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">
                    {t("join.sectionC")}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {QUALIFICATION_KEYS.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleQualification(key)}
                        className={cn(
                          "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all text-left",
                          formData.qualifications.includes(key)
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-muted/50 border-border text-foreground/70 hover:border-accent/50 hover:text-foreground"
                        )}
                      >
                        {t(key)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">
                    {t("join.summaryLabel")}{" "}
                    <span className="text-muted-foreground">{t("join.summaryOptional")}</span>
                  </Label>
                  <Textarea
                    id="summary"
                    rows={4}
                    placeholder={t("join.summaryPlaceholder")}
                    value={formData.summary}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, summary: e.target.value }))
                    }
                    className="focus-visible:ring-accent"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  disabled={!isValid}
                  className={cn(
                    "h-13 px-10 text-base font-bold rounded-lg transition-all",
                    isValid
                      ? "gradient-accent text-accent-foreground hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                  )}
                >
                  {t("join.submit")}
                </Button>
              </div>

              {/* Privacy Note */}
              <div className="mt-8 border-l-4 border-l-accent bg-primary/5 rounded-r-lg p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{t("join.privacy")}</strong>{" "}
                  {t("join.privacyText")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
