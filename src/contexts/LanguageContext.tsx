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
