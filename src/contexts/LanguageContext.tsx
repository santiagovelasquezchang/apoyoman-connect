import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "Trusted by Oil & Gas Leaders",
    "hero.title": "Powering Your Business,",
    "hero.titleAccent": "Beyond the Oilfield",
    "hero.description": "APOYOMAN delivers expert financial management and HR outsourcing solutions tailored specifically for oil and gas companies. Focus on what you do best—we'll handle the rest.",
    "hero.exploreServices": "Explore Services",
    "hero.contactUs": "Contact Us",
    "hero.feature1.title": "Financial Excellence",
    "hero.feature1.description": "Expert management of your financial operations",
    "hero.feature2.title": "HR Solutions",
    "hero.feature2.description": "Complete human resources outsourcing",
    "hero.feature3.title": "Compliance Ready",
    "hero.feature3.description": "Industry-specific regulatory expertise",
    "hero.stat1.value": "15+",
    "hero.stat1.label": "Years Experience",
    "hero.stat2.value": "50+",
    "hero.stat2.label": "Oil & Gas Clients",
    "hero.stat3.value": "98%",
    "hero.stat3.label": "Client Retention",
    "hero.stat4.value": "24/7",
    "hero.stat4.label": "Support Available",

    // Services Preview
    "services.badge": "Our Services",
    "services.title": "Comprehensive Business Solutions",
    "services.description": "We provide end-to-end financial and HR services designed specifically for the unique demands of the oil and gas industry.",
    "services.viewAll": "View All Services",
    "services.financial.title": "Financial Management",
    "services.financial.description": "Complete financial oversight including accounting, reporting, budgeting, and strategic financial planning for energy sector operations.",
    "services.hr.title": "HR Outsourcing",
    "services.hr.description": "Full-service human resources management from recruitment and onboarding to benefits administration and employee relations.",
    "services.payroll.title": "Payroll Services",
    "services.payroll.description": "Accurate, compliant payroll processing with expertise in oil & gas compensation structures, per diems, and field allowances.",
    "services.compliance.title": "Regulatory Compliance",
    "services.compliance.description": "Navigate complex industry regulations with confidence. We ensure your operations meet all federal, state, and local requirements.",

    // Why Choose Us
    "why.badge": "Why APOYOMAN",
    "why.title": "Your Trusted Partner in Business Operations",
    "why.description": "We understand the unique challenges faced by oil and gas companies. Our specialized services are designed to handle complex financial and HR requirements, so you can concentrate on extraction, production, and growth.",
    "why.reason1.title": "Industry Expertise",
    "why.reason1.description": "Deep understanding of oil & gas sector requirements, regulations, and operational dynamics.",
    "why.reason2.title": "Proven Track Record",
    "why.reason2.description": "15+ years serving major energy companies with consistent delivery and measurable results.",
    "why.reason3.title": "Efficiency First",
    "why.reason3.description": "Streamlined processes that reduce overhead costs and improve operational efficiency.",
    "why.reason4.title": "Dedicated Support",
    "why.reason4.description": "24/7 availability with dedicated account managers who understand your business.",
    "why.retention": "Client Retention Rate",
    "why.retentionDesc": "Our clients stay because we deliver results",
    "why.years": "Years of Excellence",

    // CTA Section
    "cta.title": "Ready to Optimize Your Operations?",
    "cta.description": "Let's discuss how APOYOMAN can streamline your financial management and HR processes. Schedule a free consultation today.",
    "cta.button": "Schedule Consultation",
    "cta.call": "Or call us at",

    // Footer
    "footer.description": "Specialized financial management and HR outsourcing solutions for the oil and gas industry. Your trusted partner in operational excellence.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.service1": "Financial Management",
    "footer.service2": "HR Outsourcing",
    "footer.service3": "Payroll Services",
    "footer.service4": "Compliance",

    // Services Page
    "servicesPage.badge": "What We Offer",
    "servicesPage.title": "Specialized Services for",
    "servicesPage.titleAccent": "Oil & Gas Industry",
    "servicesPage.description": "Comprehensive financial and HR solutions tailored to meet the unique demands of energy sector operations.",
    "servicesPage.consultation": "Request a Consultation",
    "servicesPage.features": "Key Features",
    "servicesPage.ctaTitle": "Need a Custom Solution?",
    "servicesPage.ctaDescription": "Every oil and gas operation is unique. Let's discuss how we can tailor our services to meet your specific requirements.",
    "servicesPage.ctaButton": "Contact Us",

    // Experience Page
    "experiencePage.badge": "Our Track Record",
    "experiencePage.title": "15+ Years of",
    "experiencePage.titleAccent": "Industry Excellence",
    "experiencePage.description": "A proven history of delivering exceptional financial and HR services to the oil and gas sector.",
    "experiencePage.journeyBadge": "Our Journey",
    "experiencePage.journeyTitle": "Milestones That Define Us",
    "experiencePage.industriesBadge": "Sectors We Serve",
    "experiencePage.industriesTitle": "Deep Expertise Across Energy",
    "experiencePage.industriesDescription": "Our specialized knowledge spans the entire energy value chain, from exploration to distribution.",
    "experiencePage.testimonialsBadge": "Client Testimonials",
    "experiencePage.testimonialsTitle": "What Our Clients Say",
    "experiencePage.ctaTitle": "Ready to Experience the Difference?",
    "experiencePage.ctaDescription": "Join the ranks of leading energy companies who trust APOYOMAN with their critical business operations.",
    "experiencePage.ctaButton": "Get in Touch",

    // About Page
    "aboutPage.badge": "About APOYOMAN",
    "aboutPage.title": "Your Partner in",
    "aboutPage.titleAccent": "Operational Excellence",
    "aboutPage.description": "We are more than a service provider—we're an extension of your team, dedicated to your success in the energy sector.",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDescription": "To empower oil and gas companies with world-class financial management and HR solutions that drive growth, ensure compliance, and optimize operations.",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDescription": "To be the most trusted partner for operational excellence in the global energy industry, setting the standard for specialized B2B services.",
    "aboutPage.storyBadge": "Our Story",
    "aboutPage.storyTitle": "Built on Industry Experience",
    "aboutPage.storyP1": "APOYOMAN was founded in 2009 by a team of industry veterans who recognized a critical gap in the market. Oil and gas companies were struggling to find service providers who truly understood their unique operational challenges.",
    "aboutPage.storyP2": "Starting with just five clients in the Permian Basin, we've grown to serve over 50 energy companies across North America. Our growth has been driven by a simple philosophy: deliver exceptional results and build lasting partnerships.",
    "aboutPage.storyP3": "Today, we're proud to be the trusted back-office partner for some of the industry's leading operators, helping them navigate complex regulatory environments while optimizing their financial and human resource operations.",
    "aboutPage.valuesBadge": "Core Values",
    "aboutPage.valuesTitle": "Principles That Guide Us",
    "aboutPage.teamBadge": "Leadership Team",
    "aboutPage.teamTitle": "Meet Our Experts",
    "aboutPage.ctaTitle": "Ready to Partner with Us?",
    "aboutPage.ctaDescription": "Discover how APOYOMAN can transform your back-office operations and help you focus on what matters most—growing your business.",
    "aboutPage.ctaButton": "Start the Conversation",

    // Contact Page
    "contactPage.badge": "Get in Touch",
    "contactPage.title": "Let's Start a",
    "contactPage.titleAccent": "Conversation",
    "contactPage.description": "Ready to optimize your operations? Reach out to discuss how we can support your business goals.",
    "contactPage.infoBadge": "Contact Information",
    "contactPage.infoTitle": "Reach Out to Us",
    "contactPage.formBadge": "Send a Message",
    "contactPage.formTitle": "How Can We Help?",
    "contactPage.formName": "Full Name",
    "contactPage.formEmail": "Email Address",
    "contactPage.formCompany": "Company Name",
    "contactPage.formPhone": "Phone Number",
    "contactPage.formMessage": "Your Message",
    "contactPage.formMessagePlaceholder": "Tell us about your needs and how we can help...",
    "contactPage.formSubmit": "Send Message",
    "contactPage.formSubmitting": "Sending...",
    "contactPage.mapTitle": "Visit Our Office",
    "contactPage.successTitle": "Message Sent!",
    "contactPage.successDescription": "Thank you for reaching out. We'll get back to you within 24 hours.",

    // Contact Info
    "contact.office": "Office Address",
    "contact.officeValue": "1234 Energy Plaza, Suite 500\nHouston, TX 77002",
    "contact.phone": "Phone",
    "contact.phoneValue": "+1 (713) 555-0123\n+1 (713) 555-0124",
    "contact.email": "Email",
    "contact.emailValue": "info@apoyoman.com\nsupport@apoyoman.com",
    "contact.hours": "Business Hours",
    "contact.hoursValue": "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM",

    // Contact Form
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "Enter your full name",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "Enter your email address",
    "contact.form.company": "Company Name",
    "contact.form.companyPlaceholder": "Enter your company name",
    "contact.form.message": "Message",
    "contact.form.submitting": "Submitting...",
    "contact.form.successTitle": "Inquiry Submitted!",
    "contact.form.successMessage": "Thank you for your interest. Our team will contact you within 24 hours.",
    "contact.form.errorTitle": "Submission Failed",
    "contact.form.errorMessage": "There was an error submitting your inquiry. Please try again.",

    // Service Inquiry Form
    "serviceForm.title": "Request Service Information",
    "serviceForm.description": "Fill out the form below and our team will get back to you within 24 hours.",
    "serviceForm.jobTitle": "Job Title / Role",
    "serviceForm.jobTitlePlaceholder": "e.g. Operations Manager, CFO",
    "serviceForm.serviceOfInterest": "Service of Interest",
    "serviceForm.selectService": "Select a service...",
    "serviceForm.messagePlaceholder": "Tell us about your specific needs and requirements...",
    "serviceForm.submitInquiry": "Submit Inquiry",

    // Service Categories for dropdown
    "services.administrative.title": "Administrative Services",
    "services.accounting.title": "Accounting & Finance",
    "services.staffing.title": "Staffing Solutions",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.experience": "Experiencia",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.getStarted": "Comenzar",

    // Hero Section
    "hero.badge": "Confianza de Líderes en Petróleo y Gas",
    "hero.title": "Impulsando Tu Negocio,",
    "hero.titleAccent": "Más Allá del Campo Petrolero",
    "hero.description": "APOYOMAN ofrece soluciones expertas en gestión financiera y outsourcing de recursos humanos diseñadas específicamente para empresas de petróleo y gas. Enfócate en lo que mejor haces—nosotros nos encargamos del resto.",
    "hero.exploreServices": "Explorar Servicios",
    "hero.contactUs": "Contáctanos",
    "hero.feature1.title": "Excelencia Financiera",
    "hero.feature1.description": "Gestión experta de tus operaciones financieras",
    "hero.feature2.title": "Soluciones de RH",
    "hero.feature2.description": "Outsourcing completo de recursos humanos",
    "hero.feature3.title": "Cumplimiento Normativo",
    "hero.feature3.description": "Experiencia regulatoria específica de la industria",
    "hero.stat1.value": "15+",
    "hero.stat1.label": "Años de Experiencia",
    "hero.stat2.value": "50+",
    "hero.stat2.label": "Clientes de Petróleo y Gas",
    "hero.stat3.value": "98%",
    "hero.stat3.label": "Retención de Clientes",
    "hero.stat4.value": "24/7",
    "hero.stat4.label": "Soporte Disponible",

    // Services Preview
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones Empresariales Integrales",
    "services.description": "Proporcionamos servicios financieros y de recursos humanos de extremo a extremo, diseñados específicamente para las demandas únicas de la industria del petróleo y gas.",
    "services.viewAll": "Ver Todos los Servicios",
    "services.financial.title": "Gestión Financiera",
    "services.financial.description": "Supervisión financiera completa que incluye contabilidad, informes, presupuestos y planificación financiera estratégica para operaciones del sector energético.",
    "services.hr.title": "Outsourcing de RH",
    "services.hr.description": "Gestión integral de recursos humanos desde reclutamiento e incorporación hasta administración de beneficios y relaciones laborales.",
    "services.payroll.title": "Servicios de Nómina",
    "services.payroll.description": "Procesamiento de nómina preciso y conforme con experiencia en estructuras de compensación de petróleo y gas, viáticos y asignaciones de campo.",
    "services.compliance.title": "Cumplimiento Regulatorio",
    "services.compliance.description": "Navega regulaciones complejas de la industria con confianza. Aseguramos que tus operaciones cumplan con todos los requisitos federales, estatales y locales.",

    // Why Choose Us
    "why.badge": "Por Qué APOYOMAN",
    "why.title": "Tu Socio de Confianza en Operaciones Empresariales",
    "why.description": "Entendemos los desafíos únicos que enfrentan las empresas de petróleo y gas. Nuestros servicios especializados están diseñados para manejar requisitos financieros y de RH complejos, para que puedas concentrarte en extracción, producción y crecimiento.",
    "why.reason1.title": "Experiencia en la Industria",
    "why.reason1.description": "Profundo entendimiento de los requisitos, regulaciones y dinámicas operativas del sector de petróleo y gas.",
    "why.reason2.title": "Historial Comprobado",
    "why.reason2.description": "Más de 15 años sirviendo a importantes empresas energéticas con entrega consistente y resultados medibles.",
    "why.reason3.title": "Eficiencia Primero",
    "why.reason3.description": "Procesos optimizados que reducen costos generales y mejoran la eficiencia operativa.",
    "why.reason4.title": "Soporte Dedicado",
    "why.reason4.description": "Disponibilidad 24/7 con gerentes de cuenta dedicados que entienden tu negocio.",
    "why.retention": "Tasa de Retención de Clientes",
    "why.retentionDesc": "Nuestros clientes se quedan porque entregamos resultados",
    "why.years": "Años de Excelencia",

    // CTA Section
    "cta.title": "¿Listo para Optimizar Tus Operaciones?",
    "cta.description": "Hablemos sobre cómo APOYOMAN puede optimizar tu gestión financiera y procesos de RH. Programa una consulta gratuita hoy.",
    "cta.button": "Programar Consulta",
    "cta.call": "O llámanos al",

    // Footer
    "footer.description": "Soluciones especializadas de gestión financiera y outsourcing de RH para la industria del petróleo y gas. Tu socio de confianza en excelencia operativa.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.contact": "Contáctanos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.service1": "Gestión Financiera",
    "footer.service2": "Outsourcing de RH",
    "footer.service3": "Servicios de Nómina",
    "footer.service4": "Cumplimiento",

    // Services Page
    "servicesPage.badge": "Lo Que Ofrecemos",
    "servicesPage.title": "Servicios Especializados para la",
    "servicesPage.titleAccent": "Industria de Petróleo y Gas",
    "servicesPage.description": "Soluciones financieras y de RH integrales adaptadas para satisfacer las demandas únicas de las operaciones del sector energético.",
    "servicesPage.consultation": "Solicitar Consulta",
    "servicesPage.features": "Características Principales",
    "servicesPage.ctaTitle": "¿Necesitas una Solución Personalizada?",
    "servicesPage.ctaDescription": "Cada operación de petróleo y gas es única. Hablemos sobre cómo podemos adaptar nuestros servicios a tus requisitos específicos.",
    "servicesPage.ctaButton": "Contáctanos",

    // Experience Page
    "experiencePage.badge": "Nuestro Historial",
    "experiencePage.title": "15+ Años de",
    "experiencePage.titleAccent": "Excelencia en la Industria",
    "experiencePage.description": "Una historia comprobada de brindar servicios financieros y de RH excepcionales al sector de petróleo y gas.",
    "experiencePage.journeyBadge": "Nuestro Recorrido",
    "experiencePage.journeyTitle": "Hitos Que Nos Definen",
    "experiencePage.industriesBadge": "Sectores Que Servimos",
    "experiencePage.industriesTitle": "Experiencia Profunda en Energía",
    "experiencePage.industriesDescription": "Nuestro conocimiento especializado abarca toda la cadena de valor energética, desde la exploración hasta la distribución.",
    "experiencePage.testimonialsBadge": "Testimonios de Clientes",
    "experiencePage.testimonialsTitle": "Lo Que Dicen Nuestros Clientes",
    "experiencePage.ctaTitle": "¿Listo para Experimentar la Diferencia?",
    "experiencePage.ctaDescription": "Únete a las filas de empresas energéticas líderes que confían en APOYOMAN para sus operaciones comerciales críticas.",
    "experiencePage.ctaButton": "Ponte en Contacto",

    // About Page
    "aboutPage.badge": "Sobre APOYOMAN",
    "aboutPage.title": "Tu Socio en",
    "aboutPage.titleAccent": "Excelencia Operativa",
    "aboutPage.description": "Somos más que un proveedor de servicios—somos una extensión de tu equipo, dedicados a tu éxito en el sector energético.",
    "aboutPage.missionTitle": "Nuestra Misión",
    "aboutPage.missionDescription": "Empoderar a las empresas de petróleo y gas con soluciones de gestión financiera y RH de clase mundial que impulsen el crecimiento, aseguren el cumplimiento y optimicen las operaciones.",
    "aboutPage.visionTitle": "Nuestra Visión",
    "aboutPage.visionDescription": "Ser el socio más confiable para la excelencia operativa en la industria energética global, estableciendo el estándar para servicios B2B especializados.",
    "aboutPage.storyBadge": "Nuestra Historia",
    "aboutPage.storyTitle": "Construido sobre Experiencia en la Industria",
    "aboutPage.storyP1": "APOYOMAN fue fundada en 2009 por un equipo de veteranos de la industria que reconocieron una brecha crítica en el mercado. Las empresas de petróleo y gas luchaban por encontrar proveedores de servicios que realmente entendieran sus desafíos operativos únicos.",
    "aboutPage.storyP2": "Comenzando con solo cinco clientes en la Cuenca Pérmica, hemos crecido para servir a más de 50 empresas energéticas en América del Norte. Nuestro crecimiento ha sido impulsado por una filosofía simple: entregar resultados excepcionales y construir asociaciones duraderas.",
    "aboutPage.storyP3": "Hoy, estamos orgullosos de ser el socio de back-office de confianza para algunos de los operadores líderes de la industria, ayudándoles a navegar entornos regulatorios complejos mientras optimizan sus operaciones financieras y de recursos humanos.",
    "aboutPage.valuesBadge": "Valores Fundamentales",
    "aboutPage.valuesTitle": "Principios Que Nos Guían",
    "aboutPage.teamBadge": "Equipo Directivo",
    "aboutPage.teamTitle": "Conoce a Nuestros Expertos",
    "aboutPage.ctaTitle": "¿Listo para Asociarte con Nosotros?",
    "aboutPage.ctaDescription": "Descubre cómo APOYOMAN puede transformar tus operaciones de back-office y ayudarte a enfocarte en lo que más importa—hacer crecer tu negocio.",
    "aboutPage.ctaButton": "Inicia la Conversación",

    // Contact Page
    "contactPage.badge": "Ponte en Contacto",
    "contactPage.title": "Comencemos una",
    "contactPage.titleAccent": "Conversación",
    "contactPage.description": "¿Listo para optimizar tus operaciones? Contáctanos para discutir cómo podemos apoyar tus objetivos comerciales.",
    "contactPage.infoBadge": "Información de Contacto",
    "contactPage.infoTitle": "Comunícate con Nosotros",
    "contactPage.formBadge": "Enviar un Mensaje",
    "contactPage.formTitle": "¿Cómo Podemos Ayudarte?",
    "contactPage.formName": "Nombre Completo",
    "contactPage.formEmail": "Correo Electrónico",
    "contactPage.formCompany": "Nombre de la Empresa",
    "contactPage.formPhone": "Número de Teléfono",
    "contactPage.formMessage": "Tu Mensaje",
    "contactPage.formMessagePlaceholder": "Cuéntanos sobre tus necesidades y cómo podemos ayudarte...",
    "contactPage.formSubmit": "Enviar Mensaje",
    "contactPage.formSubmitting": "Enviando...",
    "contactPage.mapTitle": "Visita Nuestra Oficina",
    "contactPage.successTitle": "¡Mensaje Enviado!",
    "contactPage.successDescription": "Gracias por comunicarte. Te responderemos dentro de 24 horas.",

    // Contact Info
    "contact.office": "Dirección de Oficina",
    "contact.officeValue": "1234 Energy Plaza, Suite 500\nHouston, TX 77002",
    "contact.phone": "Teléfono",
    "contact.phoneValue": "+1 (713) 555-0123\n+1 (713) 555-0124",
    "contact.email": "Correo",
    "contact.emailValue": "info@apoyoman.com\nsupport@apoyoman.com",
    "contact.hours": "Horario de Atención",
    "contact.hoursValue": "Lunes - Viernes: 8:00 AM - 6:00 PM\nSábado: 9:00 AM - 1:00 PM",

    // Contact Form
    "contact.form.name": "Nombre Completo",
    "contact.form.namePlaceholder": "Ingresa tu nombre completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.emailPlaceholder": "Ingresa tu correo electrónico",
    "contact.form.company": "Nombre de la Empresa",
    "contact.form.companyPlaceholder": "Ingresa el nombre de tu empresa",
    "contact.form.message": "Mensaje",
    "contact.form.submitting": "Enviando...",
    "contact.form.successTitle": "¡Consulta Enviada!",
    "contact.form.successMessage": "Gracias por tu interés. Nuestro equipo te contactará en 24 horas.",
    "contact.form.errorTitle": "Error al Enviar",
    "contact.form.errorMessage": "Hubo un error al enviar tu consulta. Por favor intenta de nuevo.",

    // Service Inquiry Form
    "serviceForm.title": "Solicitar Información del Servicio",
    "serviceForm.description": "Completa el formulario y nuestro equipo te contactará en 24 horas.",
    "serviceForm.jobTitle": "Cargo / Puesto",
    "serviceForm.jobTitlePlaceholder": "ej. Gerente de Operaciones, CFO",
    "serviceForm.serviceOfInterest": "Servicio de Interés",
    "serviceForm.selectService": "Selecciona un servicio...",
    "serviceForm.messagePlaceholder": "Cuéntanos sobre tus necesidades y requisitos específicos...",
    "serviceForm.submitInquiry": "Enviar Consulta",

    // Service Categories for dropdown
    "services.administrative.title": "Servicios Administrativos",
    "services.accounting.title": "Contabilidad y Finanzas",
    "services.staffing.title": "Soluciones de Personal",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
