import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2 } from "lucide-react";

interface ServiceInquiryFormProps {
  sourcePage: string;
  preselectedService?: string;
}

export function ServiceInquiryForm({ sourcePage, preselectedService }: ServiceInquiryFormProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    serviceOfInterest: preselectedService || "",
    message: "",
  });

  const services = [
    { value: "administrative", label: t("services.administrative.title") },
    { value: "accounting", label: t("services.accounting.title") },
    { value: "compliance", label: t("services.compliance.title") },
    { value: "staffing", label: t("services.staffing.title") },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceOfInterest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName,
        email: formData.email,
        company: formData.company || null,
        job_title: formData.jobTitle || null,
        service_of_interest: formData.serviceOfInterest || null,
        message: formData.message || null,
        source_page: sourcePage,
      });

      if (error) throw error;

      toast({
        title: t("contact.form.successTitle"),
        description: t("contact.form.successMessage"),
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        jobTitle: "",
        serviceOfInterest: preselectedService || "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("contact.form.errorTitle"),
        description: t("contact.form.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground font-medium">
            {t("contact.form.name")} *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder={t("contact.form.namePlaceholder")}
            className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            {t("contact.form.email")} *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.form.emailPlaceholder")}
            className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground font-medium">
            {t("contact.form.company")}
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("contact.form.companyPlaceholder")}
            className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
          />
        </div>

        {/* Job Title */}
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-foreground font-medium">
            {t("serviceForm.jobTitle")}
          </Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder={t("serviceForm.jobTitlePlaceholder")}
            className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="space-y-2">
        <Label htmlFor="serviceOfInterest" className="text-foreground font-medium">
          {t("serviceForm.serviceOfInterest")}
        </Label>
        <Select value={formData.serviceOfInterest} onValueChange={handleServiceChange}>
          <SelectTrigger className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent">
            <SelectValue placeholder={t("serviceForm.selectService")} />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-medium">
          {t("contact.form.message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("serviceForm.messagePlaceholder")}
          className="min-h-[120px] rounded-xl border-border focus:border-accent focus:ring-accent resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold rounded-xl transition-all hover:scale-[1.02] soft-shadow-accent"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t("contact.form.submitting")}
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            {t("serviceForm.submitInquiry")}
          </>
        )}
      </Button>
    </form>
  );
}
