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
    "nav.join": "Join Us",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.tagline": "Workforce Solutions for Oil & Gas Operations",
    "hero.line1": "Technical recruitment, labor management, and workforce administration",
    "hero.line2": "for oil, energy, and infrastructure projects in Venezuela.",
    "hero.cta": "View Project Experience",
    "hero.cta2": "Explore Services",
    "hero.stat1.label": "Founded",
    "hero.stat2.label": "Years in Venezuela's Energy Sector",
    "hero.stat3.label": "Workers Managed at Peak",
    "hero.stat4.label": "Major Projects with PDVSA Joint Ventures",

    // Home - Flip Cards
    "flip.recruiting.title": "Talent Recruitment & Deployment",
    "flip.recruiting.desc": "Identification, selection, and mobilization of technical, operational, and administrative personnel for energy projects.",
    "flip.outsourcing.title": "Operational Workforce Management",
    "flip.outsourcing.desc": "End-to-end workforce administration for industrial projects, allowing operators to focus on technical execution.",
    "flip.payroll.title": "Labor Management & Compliance",
    "flip.payroll.desc": "Full payroll administration, benefits, and statutory obligations under Venezuelan labor law.",

    // Home - Services Section
    "services.badge": "Capabilities",
    "services.title": "Three Key Capabilities. One Operator.",
    "services.description": "Everything a project needs to recruit, manage, and execute its workforce — under a single contract.",
    "services.viewAll": "View All Services",

    // Home - Quote
    "home.quote": "We take the operational risk off your balance sheet.",

    // Services Page
    "servicesPage.title": "Workforce Solutions for",
    "servicesPage.titleAccent": "Oil & Gas Operations",
    "servicesPage.description": "Recruiting, payroll administration, and workforce outsourcing for energy projects in Venezuela.",
    "servicesPage.consultation": "Request a Consultation",
    "servicesPage.features": "Key Capabilities",
    "servicesPage.ctaTitle": "Ready to discuss your project?",
    "servicesPage.ctaDescription": "Every operation has different workforce needs. Let's talk about yours.",
    "servicesPage.ctaButton": "Contact Us",

    // Service categories
    "svc.recruiting.title": "Workforce Recruitment & Deployment",
    "svc.recruiting.desc": "Sourcing technical, field, and administrative personnel for energy projects.",
    "svc.recruiting.f1": "Rapid mobilization for construction, development, and operations phases",
    "svc.recruiting.f2": "Multi-region deployment across Venezuela's oil-producing states",
    "svc.recruiting.f3": "Sourcing at all levels: field operators, technicians, engineers, supervisors, administrative staff",

    "svc.payroll.title": "Payroll Administration & Labor Compliance",
    "svc.payroll.desc": "Full payroll execution under Venezuelan labor law (LOTTT).",
    "svc.payroll.f1": "Management of salaries, benefits, and social obligations (IVSS, INCES, FAOV, etc.)",
    "svc.payroll.f2": "Compliance documentation and regulatory reporting",
    "svc.payroll.f3": "Field allowances, per diems, and workers' compensation structures",

    "svc.outsourcing.title": "Outsourcing & Workforce Management",
    "svc.outsourcing.desc": "End-to-end workforce administration for joint ventures and consortia.",
    "svc.outsourcing.f1": "Scalable staffing from 30 to 300+ workers per project",
    "svc.outsourcing.f2": "Worker support services: contracts, onboarding, offboarding",
    "svc.outsourcing.f3": "Single-vendor model — one contract, zero fragmentation",

    // Footer
    "footer.description": "Workforce recruitment, outsourcing, and payroll for oil, energy, and infrastructure projects. Founded 1989.",
    "footer.quickLinks": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.service1": "Recruitment & Deployment",
    "footer.service2": "Outsourcing & Workforce Management",
    "footer.service3": "Payroll & Labor Compliance",

    // Experience Page
    "experiencePage.title": "Case Studies",
    "experiencePage.titleAccent": "1989 – 2010",
    "experiencePage.description": "Over 20 years of workforce execution in Venezuela's oil and energy sector.",
    "experiencePage.ctaTitle": "Reactivating for 2026",
    "experiencePage.ctaDescription": "With a new geopolitical window opening, Apoyoman is re-entering the market with proven execution capability.",
    "experiencePage.ctaButton": "Start the Conversation",

    // Experience Stats
    "exp.stat.years": "Years of Execution Experience",
    "exp.stat.majorProjects": "Major Projects",
    "exp.stat.workers": "Workers Managed at Peak",
    "exp.stat.founded": "Year Founded",

    // Case Studies
    "exp.caseStudies.title": "Projects That Define Our Experience",
    "exp.label.context": "Project Context",
    "exp.label.role": "Apoyoman's Role",
    "exp.label.challenge": "Operational Challenge",
    "exp.label.outcome": "Outcome",

    // Petrozuata
    "exp.petrozuata.name": "PETROZUATA",
    "exp.petrozuata.subtitle": "Large-Scale Workforce Execution for a Landmark Heavy Oil Project",
    "exp.petrozuata.context": "Petrozuata was one of the first strategic associations formed during Venezuela's oil sector opening in the 1990s. Established in 1996 as a joint venture between PDVSA and ConocoPhillips, focused on production, upgrading, and commercialization of extra-heavy crude from the Orinoco Belt. The crude was transported by pipeline to the upgrader in José, Anzoátegui.",
    "exp.petrozuata.role": "Recruitment and personnel supply\nPayroll administration and labor compliance\nManagement of salaries, benefits, and social obligations\nHousing assistance, per diems, and logistics support\nAt peak: ~300 workers across field and upgrader operations",
    "exp.petrozuata.challenge": "The project required rapid mobilization and sustained management of a significant workforce across multiple phases: field operations, pipeline construction, and upgrader construction. This involved coordinating qualified personnel, supporting expatriates, and ensuring compliance with Venezuelan labor law.",
    "exp.petrozuata.outcome": "Apoyoman enabled Petrozuata to scale and manage its workforce efficiently during critical phases, reducing labor and administrative risks.",

    // Ameriven
    "exp.ameriven.name": "AMERIVEN",
    "exp.ameriven.subtitle": "Scaling Workforce Operations Across a Multi-Partner Oil Consortium",
    "exp.ameriven.context": "Ameriven was a strategic association formed in the early 2000s between ChevronTexaco, ConocoPhillips, and PDVSA. The project focused on extraction and upgrading of extra-heavy crude from the Orinoco Belt, with an estimated capacity of ~180,000 barrels per day.",
    "exp.ameriven.role": "Outsourcing services throughout project phases\nSupply of ~350 workers: field, technical, and administrative\nPayroll administration and labor compliance\nWorker support services",
    "exp.ameriven.challenge": "The project required a scalable and flexible workforce for the various stages of construction and development, under a multi-partner governance structure and strict labor requirements.",
    "exp.ameriven.outcome": "Apoyoman enabled Ameriven to maintain operational continuity and regulatory compliance, facilitating execution in a complex consortium environment.",

    // Sincor
    "exp.sincor.name": "SINCOR",
    "exp.sincor.subtitle": "Workforce Management for an International Heavy Oil Upgrading Project",
    "exp.sincor.context": "Sincor (Sincrudos de Oriente) was an association between TotalEnergies, Statoil (now Equinor), and PDVSA. The project focused on extraction and upgrading of extra-heavy crude from the Orinoco Belt, with upgrader facilities in José, Anzoátegui, designed for ~200,000 barrels per day capacity.",
    "exp.sincor.role": "Supply of ~320 workers during construction and development phases\nPayroll management and statutory benefits administration\nOperational support to field and upgrader teams",
    "exp.sincor.challenge": "The project required coordination of a significant workforce across extraction and upgrading facilities, ensuring alignment between international partners while maintaining strict compliance with local labor regulations.",
    "exp.sincor.outcome": "Apoyoman contributed to workforce stability and regulatory compliance during critical phases, supporting efficient execution.",

    // Maraven
    "exp.maraven.name": "MARAVEN & PDVSA AFFILIATES",
    "exp.maraven.subtitle": "Building a National Workforce Platform for Oil & Gas Operations",
    "exp.maraven.context": "Apoyoman's origins date back to 1989, when the company was founded as Servicios Apoyoman, initially providing technical and administrative personnel to Maraven, a PDVSA subsidiary. Over time, services expanded to Corpoven, Lagoven, CIED, and PDVSA corporate operations.",
    "exp.maraven.role": "Expansion from Caracas to multiple regions\nCoverage: Zulia, Falcón, Carabobo, Anzoátegui, and Monagas\nOutsourcing and labor administration services\nSupport for oil and gas operations nationwide",
    "exp.maraven.challenge": "Supporting Venezuela's state oil company required building a scalable workforce platform capable of serving diverse operational needs across multiple regions and business units.",
    "exp.maraven.outcome": "These projects established the operational foundation of Apoyoman's model, enabling scalable execution across Venezuela's oil and gas sector.",

    // OTAC
    "exp.otac.name": "OTAC",
    "exp.otac.subtitle": "Rapid Workforce Deployment for a High-Sensitivity Government Operation",
    "exp.otac.context": "The Office for Foreign Exchange Administration (OTAC) was created in 1992 during the administration of President Rafael Caldera to manage Venezuela's foreign exchange control system. It operated from the Cubo Negro in Chuao, under significant regulatory and political pressure.",
    "exp.otac.role": "Supply and administration of ~200 employees across all organizational levels\nRecruitment and selection\nPayroll administration\nWorkforce coordination during entire institutional life",
    "exp.otac.challenge": "The project required rapid deployment of a complete workforce across all organizational levels, with flexibility to scale based on institutional needs.",
    "exp.otac.outcome": "Apoyoman enabled OTAC to operate efficiently throughout its mandate, managing workforce expansion and reduction without operational disruption.",
    "exp.otac.partners": "Government of Venezuela",

    // Period
    "exp.period.2000s": "2000s",

    // Summary
    "exp.summary.title": "Track Record Summary",
    "exp.summary.tagline": "20+ Years of Execution Experience in Complex Environments",
    "exp.table.project": "Project",
    "exp.table.partners": "Partners",
    "exp.table.workers": "Workers",
    "exp.table.period": "Period",

    // About Page
    "aboutPage.title": "Execution Without",
    "aboutPage.titleAccent": "Exposure",
    "aboutPage.description": "Servicios Apoyoman C.A. — a Venezuelan company with 20+ years of experience in workforce execution for oil, energy, and infrastructure projects.",
    "aboutPage.valuesTitle": "Principles That Guide Us",
    "aboutPage.ctaTitle": "Ready to Partner with Us?",
    "aboutPage.ctaDescription": "Whether you're reactivating assets or scaling a new operation, Apoyoman provides the workforce execution you need — without the exposure.",
    "aboutPage.ctaButton": "Start the Conversation",

    // About - What is Apoyoman
    "about.whatTitle": "What is Apoyoman?",
    "about.whatP1": "Apoyoman is the reactivation of Servicios Apoyoman C.A., a Venezuelan company with over 20 years of experience (1989–2010) in headhunting, staff outsourcing, and labor management for oil, energy, and infrastructure projects.",
    "about.whatP2": "We worked with PDVSA and multinational joint ventures including ConocoPhillips, ChevronTexaco, TotalEnergies, and Statoil, managing from 30 to over 300 workers per project across multiple Venezuelan states.",
    "about.fact.founded": "Year Founded",
    "about.fact.years": "Years of Experience",
    "about.fact.workers": "Workers Managed at Peak",
    "about.fact.projects": "Major Projects",
    "about.established": "Servicios Apoyoman C.A.",
    "about.establishedSub": "Founded in Venezuela, serving the energy sector since 1989",

    // About - Competitive Advantages
    "about.advTitle": "Competitive Advantages",
    "about.adv1.title": "Verified Track Record",
    "about.adv1.desc": "20+ years of on-the-ground execution across Venezuela's major oil projects — not theoretical capability, documented performance.",
    "about.adv2.title": "Proven Scale",
    "about.adv2.desc": "Projects ranging from 30 to 300+ workers — demonstrated capacity to mobilize and manage at the scale operators require.",
    "about.adv3.title": "Joint Venture Experience",
    "about.adv3.desc": "Worked directly with PDVSA, ConocoPhillips, ChevronTexaco, TotalEnergies, and Statoil on landmark Orinoco Belt projects.",
    "about.adv4.title": "Single Contract Model",
    "about.adv4.desc": "One vendor for recruitment, payroll, and compliance — reduced counterparty complexity for operators.",
    "about.adv5.title": "Multi-Region Coverage",
    "about.adv5.desc": "Operations across Zulia, Falcón, Carabobo, Anzoátegui, and Monagas — not limited to a single geography.",

    // About - Values
    "about.val1.title": "Integrity",
    "about.val1.desc": "Strict compliance with labor law and transparent operations in all business relationships.",
    "about.val2.title": "Execution",
    "about.val2.desc": "Credibility is built on delivery, not presentations.",
    "about.val3.title": "Transparency",
    "about.val3.desc": "Clear contracts, predictable costs, and open communication at every project phase.",
    "about.val4.title": "Partnership",
    "about.val4.desc": "We invest in our clients' operational success. Your challenge is our problem to solve.",

    // Contact Page
    "contactPage.badge": "Get in Touch",
    "contactPage.title": "Let's Start a",
    "contactPage.titleAccent": "Conversation",
    "contactPage.description": "Discuss your workforce needs with our team.",
    "contactPage.infoBadge": "Contact Information",
    "contactPage.infoTitle": "Reach Out",
    "contactPage.formBadge": "Send a Message",
    "contactPage.formTitle": "How Can We Help?",
    "contactPage.formName": "Full Name",
    "contactPage.formEmail": "Email Address",
    "contactPage.formCompany": "Company Name",
    "contactPage.formPhone": "Phone Number",
    "contactPage.formMessage": "Your Message",
    "contactPage.formMessagePlaceholder": "Tell us about your project and workforce requirements...",
    "contactPage.formSubmit": "Send Message",
    "contactPage.formSubmitting": "Sending...",
    "contactPage.successTitle": "Message Sent!",
    "contactPage.successDescription": "Thank you for reaching out. We'll get back to you within 24 hours.",

    // Contact Info
    "contact.office": "Office Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Business Hours",

    // Service Inquiry Form
    "serviceForm.title": "Request Service Information",
    "serviceForm.description": "Fill out the form and our team will respond within 24 hours.",
    "serviceForm.jobTitle": "Job Title / Role",
    "serviceForm.jobTitlePlaceholder": "e.g. Operations Manager",
    "serviceForm.serviceOfInterest": "Service of Interest",
    "serviceForm.selectService": "Select a service...",
    "serviceForm.messagePlaceholder": "Describe your project and workforce needs...",
    "serviceForm.submitInquiry": "Submit Inquiry",

    // Service Categories for dropdown
    "services.recruiting.dropdown": "Workforce Recruitment & Deployment",
    "services.outsourcing.dropdown": "Outsourcing & Workforce Management",
    "services.payroll.dropdown": "Payroll & Labor Compliance",

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
    "contact.form.successMessage": "Thank you. Our team will contact you within 24 hours.",
    "contact.form.errorTitle": "Submission Failed",
    "contact.form.errorMessage": "There was an error submitting your inquiry. Please try again.",

    // Join Page
    "join.badge": "TALENT NETWORK",
    "join.title": "Join Venezuela's Premier",
    "join.titleAccent": "Oil & Gas Workforce",
    "join.subtitle": "APOYOMAN is rebuilding its talent database for upcoming projects with international oil companies operating in Venezuela. If you have experience in the energy sector, register below to be considered for temporary and contract positions.",
    "join.whyBadge": "Benefits",
    "join.whyTitle": "Why Register With Us",
    "join.card1.title": "Access to Major Projects",
    "join.card1.text": "Be first in line as international oil companies resume operations in Venezuela under new OFAC authorizations.",
    "join.card2.title": "Full Compliance & Protection",
    "join.card2.text": "We handle payroll, benefits, and Venezuelan labor law compliance — so you're fully protected from day one.",
    "join.card3.title": "Proven Operations Partner",
    "join.card3.text": "Our legacy includes managing workforces for ConocoPhillips, ChevronTexaco, TotalEnergies, and Statoil projects.",
    "join.regBadge": "Registration",
    "join.regTitle": "Complete Your Profile",
    "join.sectionA": "Personal Information",
    "join.sectionB": "Professional Experience",
    "join.sectionC": "Additional Qualifications",
    "join.firstName": "First Name",
    "join.lastName": "Last Name",
    "join.email": "Email",
    "join.phone": "Phone",
    "join.country": "Country of Residence",
    "join.countryPlaceholder": "Venezuela",
    "join.region": "Preferred Work Region",
    "join.regionPlaceholder": "Select region...",
    "join.disciplines": "Area(s) of Expertise",
    "join.otherPlaceholder": "Please specify your area of expertise",
    "join.experience": "Years in Oil & Gas",
    "join.experiencePlaceholder": "Select experience level...",
    "join.availability": "Availability",
    "join.availabilityPlaceholder": "Select availability...",
    "join.summaryLabel": "Brief Professional Summary",
    "join.summaryOptional": "(optional)",
    "join.summaryPlaceholder": "Briefly describe your relevant experience, key projects, and skills. Example: '15 years in production operations across Zulia and Anzoátegui. Managed field teams for Petrozuata upgrader maintenance campaigns.'",
    "join.submit": "SUBMIT REGISTRATION →",
    "join.submitting": "Submitting...",
    "join.submitError": "Error submitting form. Please try again.",
    "join.confirmTitle": "Registration Received",
    "join.confirmText": "Thank you for your interest in joining APOYOMAN's workforce network. Our team will review your profile and contact you when opportunities matching your experience become available.",
    "join.confirmButton": "Register Another Professional",
    "join.privacy": "Privacy Note:",
    "join.privacyText": "Your information will be stored securely in APOYOMAN's talent database and used exclusively for matching you with relevant project opportunities in the Venezuelan energy sector. We do not share your data with third parties without your consent.",
    // Join - Regions
    "join.region.zulia": "Zulia",
    "join.region.falcon": "Falcón",
    "join.region.carabobo": "Carabobo",
    "join.region.anzoategui": "Anzoátegui",
    "join.region.monagas": "Monagas",
    "join.region.caracas": "Caracas / Miranda",
    "join.region.otherVe": "Other Venezuela",
    "join.region.international": "International (willing to relocate)",
    // Join - Disciplines
    "join.disc.drilling": "Drilling & Well Services",
    "join.disc.production": "Production Operations",
    "join.disc.reservoir": "Reservoir Engineering",
    "join.disc.process": "Process / Chemical Engineering",
    "join.disc.mechanical": "Mechanical / Maintenance",
    "join.disc.electrical": "Electrical / Instrumentation",
    "join.disc.hse": "HSE (Health, Safety & Environment)",
    "join.disc.construction": "Construction & Civil Works",
    "join.disc.pipeline": "Pipeline & Transportation",
    "join.disc.projectMgmt": "Project Management",
    "join.disc.logistics": "Logistics & Supply Chain",
    "join.disc.admin": "Administrative / Finance",
    "join.disc.it": "IT / Systems",
    "join.disc.other": "Other",
    // Join - Experience Levels
    "join.exp.3-5": "3–5 years",
    "join.exp.5-10": "5–10 years",
    "join.exp.10-15": "10–15 years",
    "join.exp.15-20": "15–20 years",
    "join.exp.20+": "20+ years",
    // Join - Availability
    "join.avail.immediate": "Immediately available",
    "join.avail.30": "Available within 30 days",
    "join.avail.60": "Available within 60 days",
    "join.avail.employed": "Currently employed — open to opportunities",
    // Join - Qualifications
    "join.qual.pdvsa": "Prior PDVSA / Faja del Orinoco experience",
    "join.qual.international": "International oil company experience",
    "join.qual.spanish": "Fluent in Spanish",
    "join.qual.english": "Fluent in English",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.experience": "Experiencia",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.join": "Únete",
    "nav.getStarted": "Comenzar",

    // Hero Section
    "hero.tagline": "Soluciones de Fuerza Laboral para Operaciones de Petróleo y Gas",
    "hero.line1": "Reclutamiento técnico, gestión laboral y administración de workforce",
    "hero.line2": "para proyectos de petróleo, energía e infraestructura en Venezuela.",
    "hero.cta": "Ver Experiencia de Proyectos",
    "hero.cta2": "Explorar Servicios",
    "hero.stat1.label": "Fundada",
    "hero.stat2.label": "Años en el Sector Energético de Venezuela",
    "hero.stat3.label": "Trabajadores Gestionados en Pico",
    "hero.stat4.label": "Proyectos con Asociaciones PDVSA",

    // Home - Flip Cards
    "flip.recruiting.title": "Reclutamiento y Despliegue de Talento",
    "flip.recruiting.desc": "Identificación, selección y movilización de personal técnico, operativo y administrativo para proyectos energéticos.",
    "flip.outsourcing.title": "Gestión Operativa de Fuerza Laboral",
    "flip.outsourcing.desc": "Administración integral de workforce para proyectos industriales, permitiendo a los operadores concentrarse en la ejecución técnica.",
    "flip.payroll.title": "Gestión Laboral y Cumplimiento",
    "flip.payroll.desc": "Administración completa de nómina, beneficios y obligaciones laborales bajo la legislación venezolana.",

    // Home - Services Section
    "services.badge": "Capacidades",
    "services.title": "Tres Capacidades Clave. Un Solo Operador.",
    "services.description": "Todo lo que un proyecto necesita para reclutar, administrar y ejecutar fuerza laboral bajo un solo contrato.",
    "services.viewAll": "Ver Todos los Servicios",

    // Home - Quote
    "home.quote": "Sacamos el riesgo operacional de tu balance.",

    // Services Page
    "servicesPage.title": "Soluciones de Fuerza Laboral para",
    "servicesPage.titleAccent": "Operaciones de Petróleo y Gas",
    "servicesPage.description": "Reclutamiento, administración de nómina y outsourcing de personal para proyectos energéticos en Venezuela.",
    "servicesPage.consultation": "Solicitar Consulta",
    "servicesPage.features": "Capacidades",
    "servicesPage.ctaTitle": "¿Listo para hablar de tu proyecto?",
    "servicesPage.ctaDescription": "Cada operación tiene necesidades de personal distintas. Hablemos de las tuyas.",
    "servicesPage.ctaButton": "Contáctanos",

    // Service categories
    "svc.recruiting.title": "Reclutamiento y Despliegue de Personal",
    "svc.recruiting.desc": "Fuente de personal técnico, de campo y administrativo para proyectos energéticos.",
    "svc.recruiting.f1": "Movilización rápida para fases de construcción, desarrollo y operaciones",
    "svc.recruiting.f2": "Despliegue multi-regional en los estados petroleros de Venezuela",
    "svc.recruiting.f3": "Reclutamiento en todos los niveles: operadores de campo, técnicos, ingenieros, supervisores, personal administrativo",

    "svc.payroll.title": "Administración de Nómina y Cumplimiento Laboral",
    "svc.payroll.desc": "Ejecución completa de nómina bajo la legislación laboral venezolana (LOTTT).",
    "svc.payroll.f1": "Gestión de salarios, beneficios y obligaciones sociales (IVSS, INCES, FAOV, etc.)",
    "svc.payroll.f2": "Documentación de cumplimiento y reportes regulatorios",
    "svc.payroll.f3": "Estructuras de viáticos, per diem y compensación laboral",

    "svc.outsourcing.title": "Outsourcing y Gestión de Fuerza Laboral",
    "svc.outsourcing.desc": "Administración integral de fuerza laboral para joint ventures y consorcios.",
    "svc.outsourcing.f1": "Dotación escalable de 30 a 300+ trabajadores por proyecto",
    "svc.outsourcing.f2": "Servicios de soporte al trabajador: contratos, onboarding, offboarding",
    "svc.outsourcing.f3": "Modelo de proveedor único — un contrato, cero fragmentación",

    // Footer
    "footer.description": "Reclutamiento, outsourcing y nómina para proyectos de petróleo, energía e infraestructura. Fundada en 1989.",
    "footer.quickLinks": "Navegación",
    "footer.services": "Servicios",
    "footer.contact": "Contáctanos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.service1": "Reclutamiento y Despliegue",
    "footer.service2": "Outsourcing y Gestión de Personal",
    "footer.service3": "Nómina y Cumplimiento Laboral",

    // Experience Page
    "experiencePage.title": "Casos de Estudio",
    "experiencePage.titleAccent": "1989 – 2010",
    "experiencePage.description": "Más de 20 años de ejecución de fuerza laboral en el sector petrolero y energético de Venezuela.",
    "experiencePage.ctaTitle": "Reactivación para 2026",
    "experiencePage.ctaDescription": "Con una nueva ventana geopolítica abriéndose, Apoyoman re-ingresa al mercado con capacidad de ejecución probada.",
    "experiencePage.ctaButton": "Inicia la Conversación",

    // Experience Stats
    "exp.stat.years": "Años de Experiencia en Ejecución",
    "exp.stat.majorProjects": "Proyectos Principales",
    "exp.stat.workers": "Trabajadores Gestionados en Pico",
    "exp.stat.founded": "Año de Fundación",

    // Case Studies
    "exp.caseStudies.title": "Proyectos Que Definen Nuestra Experiencia",
    "exp.label.context": "Contexto del Proyecto",
    "exp.label.role": "Rol de Apoyoman",
    "exp.label.challenge": "Desafío Operativo",
    "exp.label.outcome": "Resultado",

    // Petrozuata
    "exp.petrozuata.name": "PETROZUATA",
    "exp.petrozuata.subtitle": "Ejecución de Fuerza Laboral a Gran Escala para un Proyecto Emblemático de Crudo Pesado",
    "exp.petrozuata.context": "Petrozuata fue una de las primeras asociaciones estratégicas de la apertura petrolera venezolana en los años 90. Constituida en 1996 entre PDVSA y ConocoPhillips, enfocada en producción, mejoramiento y comercialización de crudo extrapesado de la Faja del Orinoco. El crudo se transportaba por oleoducto al mejorador en José, Anzoátegui.",
    "exp.petrozuata.role": "Reclutamiento y suministro de personal\nAdministración de nómina y cumplimiento laboral\nGestión de salarios, beneficios y obligaciones sociales\nApoyo en vivienda, viáticos y logística\nEn pico: ~300 trabajadores en campo y mejorador",
    "exp.petrozuata.challenge": "El proyecto requirió movilización rápida y gestión sostenida de una fuerza laboral significativa en múltiples fases: operaciones de campo, construcción de oleoductos y del mejorador. Esto implicó coordinar personal calificado, apoyar expatriados y asegurar cumplimiento de la legislación laboral venezolana.",
    "exp.petrozuata.outcome": "Apoyoman permitió a Petrozuata escalar y administrar su fuerza laboral eficientemente durante las fases críticas, reduciendo riesgos laborales y administrativos.",

    // Ameriven
    "exp.ameriven.name": "AMERIVEN",
    "exp.ameriven.subtitle": "Escalamiento de Operaciones de Personal en un Consorcio Petrolero Multi-Socio",
    "exp.ameriven.context": "Ameriven fue una asociación estratégica constituida a inicios de los años 2000 entre ChevronTexaco, ConocoPhillips y PDVSA. El proyecto se enfocó en extracción y mejoramiento de crudo extrapesado de la Faja del Orinoco, con capacidad estimada de ~180,000 barriles diarios.",
    "exp.ameriven.role": "Servicios de outsourcing durante las fases del proyecto\nSuministro de ~350 trabajadores: campo, técnico y administrativo\nAdministración de nómina y cumplimiento laboral\nServicios de soporte al trabajador",
    "exp.ameriven.challenge": "El proyecto requirió una fuerza laboral escalable y flexible para las distintas etapas de construcción y desarrollo, bajo estructura de múltiples socios y estrictos requerimientos laborales.",
    "exp.ameriven.outcome": "Apoyoman permitió a Ameriven mantener continuidad operativa y cumplimiento regulatorio, facilitando la ejecución en un entorno de consorcio complejo.",

    // Sincor
    "exp.sincor.name": "SINCOR",
    "exp.sincor.subtitle": "Gestión de Personal para un Proyecto Internacional de Mejoramiento de Crudo Pesado",
    "exp.sincor.context": "Sincor (Sincrudos de Oriente) fue una asociación entre TotalEnergies, Statoil (hoy Equinor) y PDVSA. El proyecto se enfocó en extracción y mejoramiento de crudo extrapesado de la Faja del Orinoco, con mejorador en José, Anzoátegui, con capacidad de ~200,000 barriles diarios.",
    "exp.sincor.role": "Suministro de ~320 trabajadores en fases de construcción y desarrollo\nAdministración de nómina y beneficios laborales\nSoporte operativo a equipos de campo y mejorador",
    "exp.sincor.challenge": "El proyecto exigió coordinación de una fuerza laboral significativa entre campos y plantas de mejoramiento, asegurando alineación entre socios internacionales y cumplimiento de la legislación laboral local.",
    "exp.sincor.outcome": "Apoyoman contribuyó a la estabilidad de la fuerza laboral y cumplimiento regulatorio durante fases críticas, apoyando una ejecución eficiente.",

    // Maraven
    "exp.maraven.name": "MARAVEN Y FILIALES PDVSA",
    "exp.maraven.subtitle": "Construcción de una Plataforma Nacional de Personal para Operaciones Petroleras",
    "exp.maraven.context": "Los orígenes de Apoyoman se remontan a 1989, fundada como Servicios Apoyoman, suministrando inicialmente personal técnico y administrativo a Maraven, filial de PDVSA. Posteriormente expandió servicios a Corpoven, Lagoven, CIED y operaciones corporativas de PDVSA.",
    "exp.maraven.role": "Expansión desde Caracas a múltiples regiones\nCobertura: Zulia, Falcón, Carabobo, Anzoátegui y Monagas\nServicios de outsourcing y administración laboral\nSoporte a operaciones petroleras a nivel nacional",
    "exp.maraven.challenge": "Apoyar a la petrolera estatal requirió construir una plataforma de personal escalable, capaz de servir diversas necesidades operativas en múltiples regiones y unidades de negocio.",
    "exp.maraven.outcome": "Estos proyectos sentaron las bases operativas del modelo de Apoyoman, permitiendo ejecución escalable en el sector petrolero venezolano.",

    // OTAC
    "exp.otac.name": "OTAC",
    "exp.otac.subtitle": "Despliegue Rápido de Personal para una Operación Gubernamental de Alta Sensibilidad",
    "exp.otac.context": "La Oficina Técnica de Administración Cambiaria (OTAC) fue creada en 1992 durante el gobierno de Rafael Caldera para administrar el régimen de control de cambio. Operó desde el Cubo Negro de Chuao, bajo alta presión regulatoria y política.",
    "exp.otac.role": "Suministro y administración de ~200 empleados en todos los niveles\nReclutamiento y selección\nAdministración de nómina\nCoordinación del personal durante toda la vigencia institucional",
    "exp.otac.challenge": "El proyecto requirió despliegue rápido de una fuerza laboral completa en todos los niveles organizacionales, con flexibilidad para escalar según las necesidades institucionales.",
    "exp.otac.outcome": "Apoyoman permitió a OTAC operar eficientemente durante su mandato, gestionando expansión y reducción de personal sin disrupciones operativas.",
    "exp.otac.partners": "Gobierno de Venezuela",

    // Period
    "exp.period.2000s": "Años 2000",

    // Summary
    "exp.summary.title": "Resumen de Trayectoria",
    "exp.summary.tagline": "20+ Años de Experiencia en Ejecución en Entornos Complejos",
    "exp.table.project": "Proyecto",
    "exp.table.partners": "Socios",
    "exp.table.workers": "Trabajadores",
    "exp.table.period": "Período",

    // About Page
    "aboutPage.title": "Ejecución Sin",
    "aboutPage.titleAccent": "Exposición",
    "aboutPage.description": "Servicios Apoyoman C.A. — empresa venezolana con más de 20 años de experiencia en ejecución de fuerza laboral para proyectos de petróleo, energía e infraestructura.",
    "aboutPage.valuesTitle": "Principios Que Nos Guían",
    "aboutPage.ctaTitle": "¿Listo para Asociarte con Nosotros?",
    "aboutPage.ctaDescription": "Ya sea que estés reactivando activos o escalando una nueva operación, Apoyoman proporciona la ejecución laboral que necesitas — sin la exposición.",
    "aboutPage.ctaButton": "Inicia la Conversación",

    // About - What is Apoyoman
    "about.whatTitle": "¿Qué es Apoyoman?",
    "about.whatP1": "Apoyoman es la reactivación de Servicios Apoyoman C.A., empresa venezolana con más de 20 años de experiencia (1989–2010) en headhunting, outsourcing de personal y gestión laboral para proyectos de petróleo, energía e infraestructura.",
    "about.whatP2": "Trabajamos con PDVSA y asociaciones multinacionales incluyendo ConocoPhillips, ChevronTexaco, TotalEnergies y Statoil, gestionando de 30 a más de 300 trabajadores por proyecto en múltiples estados venezolanos.",
    "about.fact.founded": "Año de Fundación",
    "about.fact.years": "Años de Experiencia",
    "about.fact.workers": "Trabajadores en Pico",
    "about.fact.projects": "Proyectos Principales",
    "about.established": "Servicios Apoyoman C.A.",
    "about.establishedSub": "Fundada en Venezuela, sirviendo al sector energético desde 1989",

    // About - Competitive Advantages
    "about.advTitle": "Ventajas Competitivas",
    "about.adv1.title": "Trayectoria Verificada",
    "about.adv1.desc": "Más de 20 años de ejecución real en los principales proyectos petroleros de Venezuela — no capacidad teórica, desempeño documentado.",
    "about.adv2.title": "Escala Probada",
    "about.adv2.desc": "Proyectos de 30 a más de 300 trabajadores — capacidad demostrada de movilizar y gestionar a la escala que los operadores requieren.",
    "about.adv3.title": "Experiencia en Joint Ventures",
    "about.adv3.desc": "Trabajamos directamente con PDVSA, ConocoPhillips, ChevronTexaco, TotalEnergies y Statoil en proyectos emblemáticos de la Faja del Orinoco.",
    "about.adv4.title": "Modelo de Contrato Único",
    "about.adv4.desc": "Un proveedor para reclutamiento, nómina y cumplimiento — menor complejidad de contraparte para operadores.",
    "about.adv5.title": "Cobertura Multi-Regional",
    "about.adv5.desc": "Operaciones en Zulia, Falcón, Carabobo, Anzoátegui y Monagas — no limitados a una sola geografía.",

    // About - Values
    "about.val1.title": "Integridad",
    "about.val1.desc": "Cumplimiento estricto de la legislación laboral y operaciones transparentes en todas las relaciones.",
    "about.val2.title": "Ejecución",
    "about.val2.desc": "La credibilidad se construye con entregas, no con presentaciones.",
    "about.val3.title": "Transparencia",
    "about.val3.desc": "Contratos claros, costos predecibles y comunicación abierta en cada fase del proyecto.",
    "about.val4.title": "Alianza",
    "about.val4.desc": "Invertimos en el éxito operativo de nuestros clientes. Tu desafío es nuestro problema a resolver.",

    // Contact Page
    "contactPage.badge": "Ponte en Contacto",
    "contactPage.title": "Comencemos una",
    "contactPage.titleAccent": "Conversación",
    "contactPage.description": "Hablemos de tus necesidades de fuerza laboral.",
    "contactPage.infoBadge": "Información de Contacto",
    "contactPage.infoTitle": "Comunícate",
    "contactPage.formBadge": "Enviar un Mensaje",
    "contactPage.formTitle": "¿Cómo Podemos Ayudarte?",
    "contactPage.formName": "Nombre Completo",
    "contactPage.formEmail": "Correo Electrónico",
    "contactPage.formCompany": "Nombre de la Empresa",
    "contactPage.formPhone": "Número de Teléfono",
    "contactPage.formMessage": "Tu Mensaje",
    "contactPage.formMessagePlaceholder": "Cuéntanos sobre tu proyecto y necesidades de personal...",
    "contactPage.formSubmit": "Enviar Mensaje",
    "contactPage.formSubmitting": "Enviando...",
    "contactPage.successTitle": "¡Mensaje Enviado!",
    "contactPage.successDescription": "Gracias por comunicarte. Te responderemos dentro de 24 horas.",

    // Contact Info
    "contact.office": "Dirección",
    "contact.phone": "Teléfono",
    "contact.email": "Correo",
    "contact.hours": "Horario de Atención",

    // Service Inquiry Form
    "serviceForm.title": "Solicitar Información del Servicio",
    "serviceForm.description": "Completa el formulario y nuestro equipo te contactará en 24 horas.",
    "serviceForm.jobTitle": "Cargo / Puesto",
    "serviceForm.jobTitlePlaceholder": "ej. Gerente de Operaciones",
    "serviceForm.serviceOfInterest": "Servicio de Interés",
    "serviceForm.selectService": "Selecciona un servicio...",
    "serviceForm.messagePlaceholder": "Describe tu proyecto y necesidades de personal...",
    "serviceForm.submitInquiry": "Enviar Consulta",

    // Service Categories for dropdown
    "services.recruiting.dropdown": "Reclutamiento y Despliegue de Personal",
    "services.outsourcing.dropdown": "Outsourcing y Gestión de Personal",
    "services.payroll.dropdown": "Nómina y Cumplimiento Laboral",

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
    "contact.form.successMessage": "Gracias. Nuestro equipo te contactará en 24 horas.",
    "contact.form.errorTitle": "Error al Enviar",
    "contact.form.errorMessage": "Hubo un error al enviar tu consulta. Por favor intenta de nuevo.",

    // Join Page
    "join.badge": "RED DE TALENTO",
    "join.title": "Únete a la Principal",
    "join.titleAccent": "Fuerza Laboral de Petróleo y Gas",
    "join.subtitle": "APOYOMAN está reconstruyendo su base de datos de talento para próximos proyectos con compañías petroleras internacionales operando en Venezuela. Si tienes experiencia en el sector energético, regístrate para ser considerado en posiciones temporales y por contrato.",
    "join.whyBadge": "Beneficios",
    "join.whyTitle": "Por Qué Registrarte",
    "join.card1.title": "Acceso a Grandes Proyectos",
    "join.card1.text": "Sé el primero en la fila cuando las compañías petroleras internacionales reanuden operaciones en Venezuela bajo nuevas autorizaciones OFAC.",
    "join.card2.title": "Cumplimiento y Protección Total",
    "join.card2.text": "Nos encargamos de nómina, beneficios y cumplimiento de la ley laboral venezolana — para que estés protegido desde el día uno.",
    "join.card3.title": "Socio Operativo Comprobado",
    "join.card3.text": "Nuestro legado incluye la gestión de fuerza laboral para proyectos de ConocoPhillips, ChevronTexaco, TotalEnergies y Statoil.",
    "join.regBadge": "Registro",
    "join.regTitle": "Completa Tu Perfil",
    "join.sectionA": "Información Personal",
    "join.sectionB": "Experiencia Profesional",
    "join.sectionC": "Cualificaciones Adicionales",
    "join.firstName": "Nombre",
    "join.lastName": "Apellido",
    "join.email": "Correo Electrónico",
    "join.phone": "Teléfono",
    "join.country": "País de Residencia",
    "join.countryPlaceholder": "Venezuela",
    "join.region": "Región de Trabajo Preferida",
    "join.regionPlaceholder": "Seleccionar región...",
    "join.disciplines": "Área(s) de Especialización",
    "join.otherPlaceholder": "Por favor especifica tu área de especialización",
    "join.experience": "Años en Petróleo y Gas",
    "join.experiencePlaceholder": "Seleccionar nivel de experiencia...",
    "join.availability": "Disponibilidad",
    "join.availabilityPlaceholder": "Seleccionar disponibilidad...",
    "join.summaryLabel": "Resumen Profesional Breve",
    "join.summaryOptional": "(opcional)",
    "join.summaryPlaceholder": "Describe brevemente tu experiencia relevante, proyectos clave y habilidades. Ejemplo: '15 años en operaciones de producción en Zulia y Anzoátegui. Gestión de equipos de campo para campañas de mantenimiento del mejorador Petrozuata.'",
    "join.submit": "ENVIAR REGISTRO →",
    "join.confirmTitle": "Registro Recibido",
    "join.confirmText": "Gracias por tu interés en unirte a la red de fuerza laboral de APOYOMAN. Nuestro equipo revisará tu perfil y te contactará cuando haya oportunidades que coincidan con tu experiencia.",
    "join.confirmButton": "Registrar Otro Profesional",
    "join.privacy": "Nota de Privacidad:",
    "join.privacyText": "Tu información será almacenada de forma segura en la base de datos de talento de APOYOMAN y utilizada exclusivamente para conectarte con oportunidades relevantes en el sector energético venezolano. No compartimos tus datos con terceros sin tu consentimiento.",
    // Join - Regions
    "join.region.zulia": "Zulia",
    "join.region.falcon": "Falcón",
    "join.region.carabobo": "Carabobo",
    "join.region.anzoategui": "Anzoátegui",
    "join.region.monagas": "Monagas",
    "join.region.caracas": "Caracas / Miranda",
    "join.region.otherVe": "Otra Venezuela",
    "join.region.international": "Internacional (dispuesto a reubicarse)",
    // Join - Disciplines
    "join.disc.drilling": "Perforación y Servicios de Pozo",
    "join.disc.production": "Operaciones de Producción",
    "join.disc.reservoir": "Ingeniería de Yacimientos",
    "join.disc.process": "Ingeniería de Procesos / Química",
    "join.disc.mechanical": "Mecánica / Mantenimiento",
    "join.disc.electrical": "Eléctrica / Instrumentación",
    "join.disc.hse": "HSE (Salud, Seguridad y Ambiente)",
    "join.disc.construction": "Construcción y Obras Civiles",
    "join.disc.pipeline": "Oleoductos y Transporte",
    "join.disc.projectMgmt": "Gerencia de Proyectos",
    "join.disc.logistics": "Logística y Cadena de Suministro",
    "join.disc.admin": "Administración / Finanzas",
    "join.disc.it": "TI / Sistemas",
    "join.disc.other": "Otro",
    // Join - Experience Levels
    "join.exp.3-5": "3–5 años",
    "join.exp.5-10": "5–10 años",
    "join.exp.10-15": "10–15 años",
    "join.exp.15-20": "15–20 años",
    "join.exp.20+": "20+ años",
    // Join - Availability
    "join.avail.immediate": "Disponible inmediatamente",
    "join.avail.30": "Disponible en 30 días",
    "join.avail.60": "Disponible en 60 días",
    "join.avail.employed": "Actualmente empleado — abierto a oportunidades",
    // Join - Qualifications
    "join.qual.pdvsa": "Experiencia previa en PDVSA / Faja del Orinoco",
    "join.qual.international": "Experiencia en compañía petrolera internacional",
    "join.qual.spanish": "Dominio del español",
    "join.qual.english": "Dominio del inglés",
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
    // Fallback for HMR edge cases — return English defaults
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string) => translations.en[key] || key,
    };
  }
  return context;
}
