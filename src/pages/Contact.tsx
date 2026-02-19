import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.office"),
      details: ["123 Business District", "Houston, TX 77001", "United States"],
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: t("contact.email"),
      details: ["contact@apoyoman.com", "support@apoyoman.com"],
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contactPage.successTitle"),
      description: t("contactPage.successDescription"),
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            {t("contactPage.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("contactPage.title")}{" "}
            <span className="text-accent">{t("contactPage.titleAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("contactPage.description")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                {t("contactPage.infoBadge")}
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t("contactPage.infoTitle")}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {t("contactPage.formBadge")}
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t("contactPage.formTitle")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contactPage.formName")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contactPage.formEmail")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contactPage.formCompany")}</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company Inc."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contactPage.formPhone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contactPage.formMessage")} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contactPage.formMessagePlaceholder")}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("contactPage.formSubmitting") : t("contactPage.formSubmit")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-80 md:h-96 bg-section-light relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <p className="text-muted-foreground">
              {t("contactPage.mapTitle")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
