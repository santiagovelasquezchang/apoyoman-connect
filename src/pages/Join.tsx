import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Shield, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.jpg";

const REGIONS = [
  "Zulia",
  "Falcón",
  "Carabobo",
  "Anzoátegui",
  "Monagas",
  "Caracas / Miranda",
  "Other Venezuela",
  "International (willing to relocate)",
];

const DISCIPLINES = [
  "Drilling & Well Services",
  "Production Operations",
  "Reservoir Engineering",
  "Process / Chemical Engineering",
  "Mechanical / Maintenance",
  "Electrical / Instrumentation",
  "HSE (Health, Safety & Environment)",
  "Construction & Civil Works",
  "Pipeline & Transportation",
  "Project Management",
  "Logistics & Supply Chain",
  "Administrative / Finance",
  "IT / Systems",
  "Other",
];

const EXPERIENCE_LEVELS = [
  "3–5 years",
  "5–10 years",
  "10–15 years",
  "15–20 years",
  "20+ years",
];

const AVAILABILITY_OPTIONS = [
  "Immediately available",
  "Available within 30 days",
  "Available within 60 days",
  "Currently employed — open to opportunities",
];

const QUALIFICATION_OPTIONS = [
  "Prior PDVSA / Faja del Orinoco experience",
  "International oil company experience",
  "Fluent in Spanish",
  "Fluent in English",
];

const WHY_CARDS = [
  {
    icon: Briefcase,
    title: "Access to Major Projects",
    text: "Be first in line as international oil companies resume operations in Venezuela under new OFAC authorizations.",
  },
  {
    icon: Shield,
    title: "Full Compliance & Protection",
    text: "We handle payroll, benefits, and Venezuelan labor law compliance — so you're fully protected from day one.",
  },
  {
    icon: Award,
    title: "Proven Operations Partner",
    text: "Our legacy includes managing workforces for ConocoPhillips, ChevronTexaco, TotalEnergies, and Statoil projects.",
  },
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
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const toggleDiscipline = (d: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplines: prev.disciplines.includes(d)
        ? prev.disciplines.filter((x) => x !== d)
        : [...prev.disciplines, d],
    }));
  };

  const toggleQualification = (q: string) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.includes(q)
        ? prev.qualifications.filter((x) => x !== q)
        : [...prev.qualifications, q],
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
                Registration Received
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Thank you for your interest in joining APOYOMAN's workforce
                network. Our team will review your profile and contact you when
                opportunities matching your experience become available.
              </p>
              <Button
                onClick={handleReset}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12"
              >
                Register Another Professional
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

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
            TALENT NETWORK
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Join Venezuela's Premier{" "}
            <span className="text-accent">Oil & Gas Workforce</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            APOYOMAN is rebuilding its talent database for upcoming projects with
            international oil companies operating in Venezuela. If you have
            experience in the energy sector, register below to be considered for
            temporary and contract positions.
          </p>
        </div>
      </section>

      {/* Why Register */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Register With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-primary rounded-lg border-t-4 border-t-accent border border-primary/50 p-8"
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-5">
                  <card.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {card.text}
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
                Registration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Complete Your Profile
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Section A: Personal Information */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-accent rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">
                    Personal Information
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-accent">*</span>
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
                      Last Name <span className="text-accent">*</span>
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
                      Email <span className="text-accent">*</span>
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
                      Phone <span className="text-accent">*</span>
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
                    <Label htmlFor="country">Country of Residence</Label>
                    <Input
                      id="country"
                      placeholder="Venezuela"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, country: e.target.value }))
                      }
                      className="focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Preferred Work Region</Label>
                    <select
                      id="region"
                      value={formData.region}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, region: e.target.value }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="">Select region...</option>
                      {REGIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
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
                    Professional Experience
                  </h3>
                </div>

                {/* Disciplines */}
                <div className="mb-6">
                  <Label className="mb-3 block">
                    Area(s) of Expertise <span className="text-accent">*</span>
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {DISCIPLINES.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => toggleDiscipline(d)}
                        className={cn(
                          "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all text-left",
                          formData.disciplines.includes(d)
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-muted/50 border-border text-foreground/70 hover:border-accent/50 hover:text-foreground"
                        )}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  {formData.disciplines.includes("Other") && (
                    <div className="mt-3">
                      <Input
                        placeholder="Please specify your area of expertise"
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
                      Years in Oil & Gas <span className="text-accent">*</span>
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
                      <option value="">Select experience level...</option>
                      {EXPERIENCE_LEVELS.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
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
                      <option value="">Select availability...</option>
                      {AVAILABILITY_OPTIONS.map((a) => (
                        <option key={a} value={a}>
                          {a}
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
                    Additional Qualifications
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {QUALIFICATION_OPTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => toggleQualification(q)}
                        className={cn(
                          "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all text-left",
                          formData.qualifications.includes(q)
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-muted/50 border-border text-foreground/70 hover:border-accent/50 hover:text-foreground"
                        )}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">
                    Brief Professional Summary{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Textarea
                    id="summary"
                    rows={4}
                    placeholder="Briefly describe your relevant experience, key projects, and skills. Example: '15 years in production operations across Zulia and Anzoátegui. Managed field teams for Petrozuata upgrader maintenance campaigns.'"
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
                  SUBMIT REGISTRATION →
                </Button>
              </div>

              {/* Privacy Note */}
              <div className="mt-8 border-l-4 border-l-accent bg-primary/5 rounded-r-lg p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Privacy Note:</strong>{" "}
                  Your information will be stored securely in APOYOMAN's talent
                  database and used exclusively for matching you with relevant
                  project opportunities in the Venezuelan energy sector. We do
                  not share your data with third parties without your consent.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
