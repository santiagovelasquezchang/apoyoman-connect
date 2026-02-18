import { createContext, useContext, useState, type ReactNode } from "react";

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
    "experiencePage.title": "Case Studies",
    "experiencePage.titleAccent": "1989 – 2010",
    "experiencePage.description": "Over 20 years of workforce execution experience in complex Oil & Gas environments across Venezuela.",
    "experiencePage.ctaTitle": "Ready to Experience the Difference?",
    "experiencePage.ctaDescription": "Join the ranks of leading energy companies who trust APOYOMAN with their critical business operations.",
    "experiencePage.ctaButton": "Get in Touch",

    // Experience Stats
    "exp.stat.years": "Years of Execution Experience",
    "exp.stat.majorProjects": "Major Projects",
    "exp.stat.workers": "Workers Managed at Peak",
    "exp.stat.founded": "Year Founded",

    // Case Studies Section
    "exp.caseStudies.badge": "Case Studies",
    "exp.caseStudies.title": "Projects That Define Our Experience",
    "exp.caseStudies.subtitle": "Real-world workforce execution across Venezuela's most demanding Oil & Gas operations.",

    // Labels
    "exp.label.context": "Project Context",
    "exp.label.role": "Apoyoman's Role",
    "exp.label.challenge": "Operational Challenge",
    "exp.label.outcome": "Outcome",

    // Petrozuata
    "exp.petrozuata.name": "Petrozuata",
    "exp.petrozuata.subtitle": "Large-Scale Workforce Execution for a Landmark Heavy Oil Project",
    "exp.petrozuata.context": "Petrozuata was one of the first strategic associations formed during Venezuela's oil sector opening in the 1990s. Established in 1996 as a joint venture between PDVSA and ConocoPhillips, focused on production, upgrading, and commercialization of extra-heavy crude from the Orinoco Belt.",
    "exp.petrozuata.role": "Workforce recruitment and deployment, payroll administration and statutory labor compliance, management of salaries, benefits, and social obligations, housing assistance, per diems, and logistical support. At peak: ~300 workers supporting field operations and upgrader construction.",
    "exp.petrozuata.challenge": "The project required rapid mobilization and sustained management of a large workforce across multiple phases, including oilfield operations, pipeline construction, and upgrader construction.",
    "exp.petrozuata.outcome": "Apoyoman enabled Petrozuata to scale and manage its workforce efficiently throughout construction and operational ramp-up phases, allowing the operator to focus on technical execution while mitigating labor and administrative risk.",

    // Ameriven
    "exp.ameriven.name": "Ameriven",
    "exp.ameriven.subtitle": "Scaling Workforce Operations Across a Multi-Partner Oil & Gas Consortium",
    "exp.ameriven.context": "Ameriven was a strategic association formed in the early 2000s between ChevronTexaco, ConocoPhillips, and PDVSA. The project focused on the extraction and upgrading of extra-heavy crude from the Orinoco Belt, with an estimated production capacity of approximately 180,000 barrels per day.",
    "exp.ameriven.role": "Workforce outsourcing services throughout project phases, supply of ~350 workers including field personnel, technical staff, and administrative support, payroll management and labor compliance, worker support services.",
    "exp.ameriven.challenge": "Ameriven required a scalable and flexible workforce capable of supporting multiple stages of construction and development, while operating under a multi-partner governance structure and strict labor regulations.",
    "exp.ameriven.outcome": "Apoyoman enabled Ameriven to maintain workforce continuity and regulatory compliance across project phases, supporting efficient execution in a complex consortium environment.",

    // Sincor
    "exp.sincor.name": "Sincor",
    "exp.sincor.subtitle": "Workforce Management for an International Heavy Oil Upgrading Project",
    "exp.sincor.context": "Sincor (Sincrudos de Oriente) was a strategic association formed between TotalEnergies, Statoil (now Equinor), and PDVSA. The project focused on extraction and upgrading of extra-heavy crude from the Orinoco Belt, with upgrader facilities in José, Anzoátegui, designed for ~200,000 barrels per day capacity.",
    "exp.sincor.role": "Supply of ~320 workers during construction and development phases, payroll management and statutory benefits administration, operational support to field and upgrader teams.",
    "exp.sincor.challenge": "The project required coordination of a large workforce across extraction and upgrading facilities, ensuring alignment between international partners while maintaining strict compliance with local labor regulations.",
    "exp.sincor.outcome": "Apoyoman supported workforce stability and regulatory compliance throughout critical construction phases, contributing to the project's execution efficiency.",

    // Maraven & PDVSA Affiliates
    "exp.maraven.name": "Maraven & PDVSA Affiliates",
    "exp.maraven.subtitle": "Building a National Workforce Platform for Oil & Gas Operations",
    "exp.maraven.context": "Apoyoman's origins date back to 1989, when the company was founded as Servicios Apoyoman, initially providing technical and administrative personnel to Maraven, a PDVSA subsidiary. Over time, services expanded to other PDVSA affiliates, including Corpoven, Lagoven, CIED, and PDVSA corporate operations.",
    "exp.maraven.role": "Expansion from Caracas base to multiple regions. Coverage: Zulia, Falcón, Carabobo, Anzoátegui, and Monagas. Workforce outsourcing and labor administration services. Support for oil and gas operations nationwide.",
    "exp.maraven.challenge": "Supporting Venezuela's state oil company required building a scalable workforce platform capable of serving diverse operational needs across multiple regions and business units.",
    "exp.maraven.outcome": "These projects established the operational foundation of Apoyoman's workforce platform, enabling scalable execution across Venezuela's oil and gas sector.",

    // OTAC
    "exp.otac.name": "OTAC",
    "exp.otac.subtitle": "Rapid Workforce Deployment for a High-Sensitivity Government Operation",
    "exp.otac.context": "The Office for Foreign Exchange Administration (OTAC) was created in 1992 during the administration of President Rafael Caldera to manage Venezuela's foreign exchange control system. The institution operated under significant regulatory and political pressure.",
    "exp.otac.role": "Supply and administration of ~200 employees across all organizational levels, recruitment and selection, payroll administration, workforce coordination during entire institutional life.",
    "exp.otac.challenge": "The project required rapid deployment of a complete workforce across all organizational levels, with the flexibility to scale up and down based on institutional needs, all while maintaining operational continuity.",
    "exp.otac.outcome": "Apoyoman enabled OTAC to operate efficiently throughout its mandate, managing workforce scale-up and eventual scale-down without operational disruption.",

    // Summary Table
    "exp.summary.badge": "Track Record",
    "exp.summary.title": "Track Record Summary",
    "exp.summary.tagline": "20+ Years of Execution Experience in Complex Environments",
    "exp.table.project": "Project",
    "exp.table.partners": "Partners",
    "exp.table.workers": "Workers",
    "exp.table.period": "Period",

    // About Page
    "aboutPage.badge": "About APOYOMAN",
    "aboutPage.title": "Execution Without",
    "aboutPage.titleAccent": "Exposure",
    "aboutPage.description": "Servicios Apoyoman C.A. — a Venezuelan company with 20+ years of experience in workforce execution for oil, energy, and infrastructure projects.",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDescription": "To enable international operators to execute in complex environments without direct labor exposure. We take the operational risk off your balance sheet.",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDescription": "To be the most trusted workforce execution partner for energy and infrastructure projects in Venezuela and Latin America, setting the standard for operational reliability.",
    "aboutPage.valuesBadge": "Core Values",
    "aboutPage.valuesTitle": "Principles That Guide Us",
    "aboutPage.ctaTitle": "Ready to Partner with Us?",
    "aboutPage.ctaDescription": "Whether you're reactivating assets or scaling a new operation, Apoyoman provides the workforce execution you need — without the exposure.",
    "aboutPage.ctaButton": "Start the Conversation",

    // About - What is Apoyoman
    "about.whatBadge": "Who We Are",
    "about.whatTitle": "What is Apoyoman 2.0?",
    "about.whatP1": "Apoyoman 2.0 is the strategic reactivation of Servicios Apoyoman C.A., a Venezuelan company with over 20 years of experience (1989–2010) in headhunting, staff outsourcing, and labor management for oil, energy, and infrastructure projects.",
    "about.whatP2": "We worked with PDVSA and multinational partnerships including ConocoPhillips and Chevron, managing from 30 to over 300 employees per project. Now, with a new geopolitical window opening in 2026, we are re-entering the market with proven expertise.",
    "about.fact.founded": "Year Founded",
    "about.fact.years": "Years of Experience",
    "about.fact.workers": "Peak Workers Managed",
    "about.fact.projects": "Major Projects",
    "about.established": "Servicios Apoyoman C.A.",
    "about.establishedSub": "Founded in Venezuela, serving the Oil & Gas industry since 1989",

    // About - Services
    "about.servicesBadge": "What We Do",
    "about.servicesTitle": "Our Core Services",
    "about.service1.title": "Headhunting & Recruiting",
    "about.service1.desc": "Specialized technical selection across all organizational levels for energy and infrastructure projects.",
    "about.service2.title": "Staff Outsourcing",
    "about.service2.desc": "Operational, technical, and administrative personnel with full coverage and labor compliance.",
    "about.service3.title": "Integral Labor Management",
    "about.service3.desc": "Social benefits, statutory compliance, payroll administration, and full legal labor coverage guaranteed.",
    "about.service4.title": "Logistics & Site Services",
    "about.service4.desc": "Transportation, housing, per diems, and contractor coordination for field operations.",

    // About - Competitive Advantages
    "about.advBadge": "Why Us",
    "about.advTitle": "Competitive Advantages",
    "about.adv1.title": "Proven Track Record",
    "about.adv1.desc": "20+ years of real, on-the-ground execution experience in Venezuela's most demanding projects.",
    "about.adv2.title": "Historical Scale",
    "about.adv2.desc": "Projects ranging from 30 to 300+ employees — proven capacity to scale on demand.",
    "about.adv3.title": "Critical Project Experience",
    "about.adv3.desc": "Worked with PDVSA, ConocoPhillips, ChevronTexaco, TotalEnergies, and Statoil on landmark projects.",
    "about.adv4.title": "Single Contract Model",
    "about.adv4.desc": "One contract vs. multiple fragmented vendors — simplified execution and compliance.",
    "about.adv5.title": "Multi-Scale Flexibility",
    "about.adv5.desc": "Adaptable to any project size, from small brownfield reactivations to large-scale operations.",

    // About - Values
    "about.val1.title": "Integrity",
    "about.val1.desc": "Strict compliance with labor law and transparent operations in all business relationships.",
    "about.val2.title": "Execution Excellence",
    "about.val2.desc": "We don't promise — we execute. Credibility is built on delivery, not presentations.",
    "about.val3.title": "Transparency",
    "about.val3.desc": "Clear contracts, predictable costs, and open communication at every project phase.",
    "about.val4.title": "Partnership",
    "about.val4.desc": "We invest in our clients' success. Your operational challenge is our problem to solve.",

    // About - Tagline
    "about.tagline": "We don't bet on stability. We bet on the structural need to execute in uncertain environments.",

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
    "experiencePage.badge": "Nuestra Trayectoria",
    "experiencePage.title": "Casos de Estudio",
    "experiencePage.titleAccent": "1989 – 2010",
    "experiencePage.description": "Más de 20 años de experiencia en ejecución de fuerza laboral en entornos complejos de Petróleo y Gas en Venezuela.",
    "experiencePage.ctaTitle": "¿Listo para Experimentar la Diferencia?",
    "experiencePage.ctaDescription": "Únete a las empresas energéticas líderes que confían en APOYOMAN para sus operaciones críticas.",
    "experiencePage.ctaButton": "Ponte en Contacto",

    // Experience Stats
    "exp.stat.years": "Años de Experiencia en Ejecución",
    "exp.stat.majorProjects": "Proyectos Principales",
    "exp.stat.workers": "Trabajadores Gestionados en Pico",
    "exp.stat.founded": "Año de Fundación",

    // Case Studies Section
    "exp.caseStudies.badge": "Casos de Estudio",
    "exp.caseStudies.title": "Proyectos Que Definen Nuestra Experiencia",
    "exp.caseStudies.subtitle": "Ejecución real de fuerza laboral en las operaciones más exigentes del sector petrolero venezolano.",

    // Labels
    "exp.label.context": "Contexto del Proyecto",
    "exp.label.role": "Rol de Apoyoman",
    "exp.label.challenge": "Desafío Operativo",
    "exp.label.outcome": "Resultado",

    // Petrozuata
    "exp.petrozuata.name": "Petrozuata",
    "exp.petrozuata.subtitle": "Ejecución de Fuerza Laboral a Gran Escala para un Proyecto Emblemático de Crudo Pesado",
    "exp.petrozuata.context": "Petrozuata fue una de las primeras asociaciones estratégicas de la apertura petrolera venezolana en los años 90. Constituida en 1996 entre PDVSA y ConocoPhillips, enfocada en producción, mejoramiento y comercialización de crudo extrapesado de la Faja del Orinoco.",
    "exp.petrozuata.role": "Reclutamiento y suministro de personal, administración de nómina y cumplimiento laboral, gestión de salarios, beneficios y obligaciones sociales, apoyo en vivienda, viáticos y logística. En pico: ~300 trabajadores en campo y mejorador.",
    "exp.petrozuata.challenge": "El proyecto requirió movilización rápida y gestión sostenida de una fuerza laboral significativa en múltiples fases: operaciones de campo, construcción de oleoductos y del mejorador.",
    "exp.petrozuata.outcome": "Apoyoman permitió a Petrozuata escalar y administrar su fuerza laboral eficientemente durante las fases críticas, reduciendo riesgos laborales y administrativos.",

    // Ameriven
    "exp.ameriven.name": "Ameriven",
    "exp.ameriven.subtitle": "Escalamiento de Operaciones de Personal en un Consorcio Petrolero Multi-Socio",
    "exp.ameriven.context": "Ameriven fue una asociación estratégica constituida a inicios de los años 2000 entre ChevronTexaco, ConocoPhillips y PDVSA. El proyecto se enfocó en extracción y mejoramiento de crudo extrapesado de la Faja del Orinoco, con capacidad estimada de ~180,000 barriles diarios.",
    "exp.ameriven.role": "Servicios de outsourcing durante las fases del proyecto, suministro de ~350 trabajadores: campo, técnico y administrativo, administración de nómina y cumplimiento laboral, servicios de soporte al trabajador.",
    "exp.ameriven.challenge": "El proyecto requirió una fuerza laboral escalable y flexible para las distintas etapas de construcción y desarrollo, bajo estructura de múltiples socios y estrictos requerimientos laborales.",
    "exp.ameriven.outcome": "Apoyoman permitió a Ameriven mantener continuidad operativa y cumplimiento regulatorio, facilitando la ejecución en un entorno de consorcio complejo.",

    // Sincor
    "exp.sincor.name": "Sincor",
    "exp.sincor.subtitle": "Gestión de Personal para un Proyecto Internacional de Mejoramiento de Crudo Pesado",
    "exp.sincor.context": "Sincor (Sincrudos de Oriente) fue una asociación entre TotalEnergies, Statoil (hoy Equinor) y PDVSA. El proyecto se enfocó en extracción y mejoramiento de crudo extrapesado de la Faja del Orinoco, con mejorador en José, Anzoátegui, con capacidad de ~200,000 barriles diarios.",
    "exp.sincor.role": "Suministro de ~320 trabajadores en fases de construcción y desarrollo, administración de nómina y beneficios laborales, soporte operativo a equipos de campo y mejorador.",
    "exp.sincor.challenge": "El proyecto exigió coordinación de una fuerza laboral significativa entre campos y plantas de mejoramiento, asegurando alineación entre socios internacionales y cumplimiento de la legislación laboral local.",
    "exp.sincor.outcome": "Apoyoman contribuyó a la estabilidad de la fuerza laboral y cumplimiento regulatorio durante fases críticas, apoyando una ejecución eficiente.",

    // Maraven & PDVSA Affiliates
    "exp.maraven.name": "Maraven y Filiales PDVSA",
    "exp.maraven.subtitle": "Construcción de una Plataforma Nacional de Personal para Operaciones Petroleras",
    "exp.maraven.context": "Los orígenes de Apoyoman se remontan a 1989, fundada como Servicios Apoyoman, suministrando inicialmente personal técnico y administrativo a Maraven, filial de PDVSA. Con el tiempo se expandió a otras filiales: Corpoven, Lagoven, CIED y operaciones corporativas de PDVSA.",
    "exp.maraven.role": "Expansión desde Caracas a múltiples regiones. Cobertura: Zulia, Falcón, Carabobo, Anzoátegui y Monagas. Servicios de outsourcing y administración laboral. Soporte a operaciones petroleras a nivel nacional.",
    "exp.maraven.challenge": "Apoyar a la petrolera estatal requirió construir una plataforma de personal escalable, capaz de servir diversas necesidades operativas en múltiples regiones y unidades de negocio.",
    "exp.maraven.outcome": "Estos proyectos sentaron las bases operativas del modelo de Apoyoman, permitiendo ejecución escalable en el sector petrolero venezolano.",

    // OTAC
    "exp.otac.name": "OTAC",
    "exp.otac.subtitle": "Despliegue Rápido de Personal para una Operación Gubernamental de Alta Sensibilidad",
    "exp.otac.context": "La Oficina Técnica de Administración Cambiaria (OTAC) fue creada en 1992 durante el gobierno de Rafael Caldera para administrar el régimen de control de cambio. Operó bajo alta presión regulatoria y política.",
    "exp.otac.role": "Suministro y administración de ~200 empleados en todos los niveles, reclutamiento y selección, administración de nómina, coordinación del personal durante toda la vigencia institucional.",
    "exp.otac.challenge": "El proyecto requirió despliegue rápido de una fuerza laboral completa en todos los niveles organizacionales, con flexibilidad para escalar según las necesidades institucionales.",
    "exp.otac.outcome": "Apoyoman permitió a OTAC operar eficientemente durante su mandato, gestionando expansión y reducción de personal sin disrupciones operativas.",

    // Summary Table
    "exp.summary.badge": "Trayectoria",
    "exp.summary.title": "Resumen de Trayectoria",
    "exp.summary.tagline": "20+ Años de Experiencia en Ejecución en Entornos Complejos",
    "exp.table.project": "Proyecto",
    "exp.table.partners": "Socios",
    "exp.table.workers": "Trabajadores",
    "exp.table.period": "Período",

    // About Page
    "aboutPage.badge": "Sobre APOYOMAN",
    "aboutPage.title": "Ejecución Sin",
    "aboutPage.titleAccent": "Exposición",
    "aboutPage.description": "Servicios Apoyoman C.A. — empresa venezolana con más de 20 años de experiencia en ejecución de fuerza laboral para proyectos de petróleo, energía e infraestructura.",
    "aboutPage.missionTitle": "Nuestra Misión",
    "aboutPage.missionDescription": "Permitir a operadores internacionales ejecutar en entornos complejos sin exposición laboral directa. Sacamos el riesgo operativo de tu balance.",
    "aboutPage.visionTitle": "Nuestra Visión",
    "aboutPage.visionDescription": "Ser el socio de ejecución de fuerza laboral más confiable para proyectos de energía e infraestructura en Venezuela y Latinoamérica, estableciendo el estándar de confiabilidad operativa.",
    "aboutPage.valuesBadge": "Valores Fundamentales",
    "aboutPage.valuesTitle": "Principios Que Nos Guían",
    "aboutPage.ctaTitle": "¿Listo para Asociarte con Nosotros?",
    "aboutPage.ctaDescription": "Ya sea que estés reactivando activos o escalando una nueva operación, Apoyoman proporciona la ejecución laboral que necesitas — sin la exposición.",
    "aboutPage.ctaButton": "Inicia la Conversación",

    // About - What is Apoyoman
    "about.whatBadge": "Quiénes Somos",
    "about.whatTitle": "¿Qué es Apoyoman 2.0?",
    "about.whatP1": "Apoyoman 2.0 es la reactivación estratégica de Servicios Apoyoman C.A., empresa venezolana con más de 20 años de experiencia (1989–2010) en headhunting, outsourcing de personal y gestión laboral para proyectos de petróleo, energía e infraestructura.",
    "about.whatP2": "Trabajamos con PDVSA y asociaciones con multinacionales como ConocoPhillips y Chevron, gestionando de 30 a más de 300 empleados por proyecto. Ahora, con una nueva ventana geopolítica en 2026, re-ingresamos al mercado con experiencia probada.",
    "about.fact.founded": "Año de Fundación",
    "about.fact.years": "Años de Experiencia",
    "about.fact.workers": "Trabajadores en Pico",
    "about.fact.projects": "Proyectos Principales",
    "about.established": "Servicios Apoyoman C.A.",
    "about.establishedSub": "Fundada en Venezuela, sirviendo a la industria petrolera desde 1989",

    // About - Services
    "about.servicesBadge": "Lo Que Hacemos",
    "about.servicesTitle": "Nuestros Servicios Principales",
    "about.service1.title": "Headhunting y Reclutamiento",
    "about.service1.desc": "Selección técnica especializada en todos los niveles organizacionales para proyectos de energía e infraestructura.",
    "about.service2.title": "Outsourcing de Personal",
    "about.service2.desc": "Personal operativo, técnico y administrativo con cobertura completa y cumplimiento laboral.",
    "about.service3.title": "Gestión Laboral Integral",
    "about.service3.desc": "Prestaciones sociales, cumplimiento legal, administración de nómina y cobertura laboral garantizada.",
    "about.service4.title": "Logística y Site Services",
    "about.service4.desc": "Transporte, vivienda, viáticos y coordinación de contratistas para operaciones de campo.",

    // About - Competitive Advantages
    "about.advBadge": "Por Qué Nosotros",
    "about.advTitle": "Ventajas Competitivas",
    "about.adv1.title": "Track Record Probado",
    "about.adv1.desc": "Más de 20 años de experiencia real en el terreno en los proyectos más exigentes de Venezuela.",
    "about.adv2.title": "Escala Histórica",
    "about.adv2.desc": "Proyectos de 30 a más de 300 empleados — capacidad probada de escalar bajo demanda.",
    "about.adv3.title": "Experiencia en Proyectos Críticos",
    "about.adv3.desc": "Trabajamos con PDVSA, ConocoPhillips, ChevronTexaco, TotalEnergies y Statoil en proyectos emblemáticos.",
    "about.adv4.title": "Modelo de Contrato Único",
    "about.adv4.desc": "Un solo contrato vs. múltiples proveedores fragmentados — ejecución y cumplimiento simplificados.",
    "about.adv5.title": "Flexibilidad Multi-Escala",
    "about.adv5.desc": "Adaptable a cualquier tamaño de proyecto, desde reactivaciones brownfield hasta operaciones a gran escala.",

    // About - Values
    "about.val1.title": "Integridad",
    "about.val1.desc": "Cumplimiento estricto de la legislación laboral y operaciones transparentes en todas las relaciones.",
    "about.val2.title": "Excelencia en Ejecución",
    "about.val2.desc": "No prometemos — ejecutamos. La credibilidad se construye con entregas, no con presentaciones.",
    "about.val3.title": "Transparencia",
    "about.val3.desc": "Contratos claros, costos predecibles y comunicación abierta en cada fase del proyecto.",
    "about.val4.title": "Alianza",
    "about.val4.desc": "Invertimos en el éxito de nuestros clientes. Tu desafío operativo es nuestro problema a resolver.",

    // About - Tagline
    "about.tagline": "No apostamos a la estabilidad. Apostamos a la necesidad estructural de ejecutar en entornos inciertos.",

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
