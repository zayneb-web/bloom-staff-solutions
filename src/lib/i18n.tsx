import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "ar";

export const translations = {
  fr: {
    brand: {
      solution: "Retex Solution",
      company: "DotNet",
    },
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      industries: "Secteurs",
      benefits: "Avantages",
      pricing: "Tarifs",
      contact: "Contact",
      demo: "Demander une Démo",
    },
    hero: {
      subtitle:
        "Automatisez la gestion des présences, plannings, paie, congés, évaluations et rapports RH depuis une seule plateforme intelligente.",
      presentation: "Voir la Présentation",
      trustCount: "+500 entreprises",
      trustLabel: "nous font confiance",
      slides: [
        { title: "Gérez Votre Personnel Comme un Pro", eyebrow: "Hôtellerie & Resorts" },
        { title: "L'Automatisation RH pour l'Hôtellerie & la Santé", eyebrow: "Hôpitaux & Cliniques" },
        { title: "Paie, Présence et Plannings en Un Seul Clic", eyebrow: "Entreprises & Restaurants" },
      ],
    },
    trust: {
      title: "Approuvé par des Organisations en Pleine Croissance",
      stats: [
        { l: "Entreprises" },
        { l: "Précision Paie" },
        { l: "Temps Administratif" },
        { l: "Support" },
      ],
    },
    clarity: {
      badge: "Modules",
      title: "Une Plateforme pour Tout",
      titleHighlight: "Gérer",
      subtitle:
        "Stocks, comptabilité, ventes, RH et finance — pilotez l'ensemble de votre activité depuis une seule interface unifiée.",
      learnMore: "En savoir plus",
      before: "Avant Retex Solution",
      after: "Après Retex Solution",
      beforeItems: [
        "Soldes de stock inconnus",
        "Comptes clients & fournisseurs éparpillés",
        "Achats non maîtrisés",
        "Aucune analyse des ventes",
        "Plan comptable improvisé",
        "Étapes de fabrication invisibles",
        "Pointages employés manuels",
        "Heures sup et déductions au feeling",
        "Profits par filiale impossibles à isoler",
        "Opérations financières dispersées",
      ],
      afterItems: [
        "Suivi des soldes de stock",
        "Suivi des comptes clients & fournisseurs",
        "Suivi des achats par article",
        "Analyse des ventes",
        "Plan comptable structuré",
        "Suivi des étapes de fabrication",
        "Horaires de présence des employés",
        "Heures sup et déductions automatiques",
        "Profits & pertes par filiale",
        "Toutes les opérations financières au même endroit",
      ],
      blocks: [
        {
          tag: "Stocks",
          title: "Gestion des Stocks",
          text: "Suivez les soldes de tous vos articles dans chaque entrepôt — valorisés au prix d'achat et de vente — avec inventaire périodique automatisé.",
        },
        {
          tag: "Comptabilité",
          title: "Gestion des Comptes",
          text: "Suivez les soldes des clients, fournisseurs et caisses en un seul endroit, avec un plan comptable structuré pour toutes vos opérations.",
        },
        {
          tag: "Point de Vente",
          title: "Caisse & POS Interactif",
          text: "Une interface de caisse intuitive pour gérer les ventes, afficher les produits, encaisser les paiements et suivre les étapes de fabrication.",
        },
        {
          tag: "Finance A à Z",
          title: "De la Transaction au Bilan",
          text: "Pilotez toutes les opérations de votre entreprise — des transactions financières quotidiennes au bilan général et au compte de résultat.",
        },
        {
          tag: "Ressources Humaines",
          title: "Gestion RH Complète",
          text: "Suivez la présence, les horaires quotidiens, les heures sup, déductions, évaluations et calculez les droits de fin de mois de chaque employé.",
        },
      ],
    },
    features: {
      badge: "Fonctionnalités",
      title: "Une Plateforme.",
      titleHighlight: "Tous Vos Métiers",
      items: [
        { t: "Gestion des Stocks", d: "Suivez les soldes de vos articles dans tous les entrepôts avec inventaire régulier." },
        { t: "Gestion des Comptes", d: "Suivez les soldes des clients, fournisseurs et caisses en un seul endroit." },
        { t: "Point de Vente", d: "Caisse interactive pour gérer ventes, produits, paiements et étapes de fabrication." },
        { t: "Finance de A à Z", d: "Des transactions quotidiennes au bilan général et au compte de résultat." },
        { t: "Ressources Humaines", d: "Présence, horaires, heures sup, déductions, évaluations et droits employés." },
        { t: "Ventes & Profits", d: "Suivez ventes et profits par article, client et la croissance sur période." },
      ],
    },
    benefits: {
      badge: "Avantages",
      title: "Pourquoi Choisir",
      titleHighlight: "Retex Solution",
      titleSuffix: " ?",
      items: [
        "Réduisez la charge administrative",
        "Améliorez la précision de la paie",
        "Augmentez l'efficacité opérationnelle",
        "Visibilité RH en temps réel",
        "Minimisez les erreurs de présence",
        "Développez vos opérations avec confiance",
      ],
    },
    industries: {
      badge: "Secteurs",
      title: "Conçu Pour Votre Secteur",
      desc: "Une gestion RH adaptée aux contraintes opérationnelles spécifiques.",
      items: ["Hôtels", "Hôpitaux", "Cliniques", "Resorts", "Restaurants", "Entreprises"],
    },
    howItWorks: {
      badge: "Démarrage",
      title: "Comment Ça Marche",
      steps: [
        "Ajoutez Vos Employés",
        "Connectez les Appareils de Présence",
        "Gérez les Plannings",
        "Générez Paie & Rapports",
      ],
    },
    testimonials: {
      badge: "Témoignages",
      title: "Ce Que Disent Nos Clients",
      subtitle: "Découvrez en vidéo comment nos clients transforment leur gestion RH au quotidien.",
      all: "Tous nos témoignages",
      featuredName: "Nos clients en vidéo",
      featuredRole: "Compilation des 5 témoignages",
      individual: "Témoignages individuels",
      prev: "Témoignage précédent",
      next: "Témoignage suivant",
      roles: [
        "Responsable informatique, Société Radi Trans",
        "Assistant du ministre de l'Intérieur",
        "Président des coopératives de consommation (Alex Market)",
        "Directeur financier, Grand Mall",
        "Investissement immobilier et commercial",
      ],
    },
    pricing: {
      badge: "Tarifs",
      title: "Une Offre Pour Chaque Étape",
      subtitle: "Des plans flexibles, sans engagement caché. Parlons de vos besoins.",
      popular: "Populaire",
      cta: "Contactez les Ventes",
      plans: [
        {
          n: "Starter",
          d: "Pour les petites équipes qui démarrent leur structuration RH.",
          f: [
            "Jusqu'à 25 employés",
            "Présence & badgeuse",
            "Gestion des congés",
            "Rapports de base",
            "Support email",
          ],
        },
        {
          n: "Professional",
          d: "Le choix des hôtels, cliniques et restaurants en croissance.",
          f: [
            "Jusqu'à 250 employés",
            "Paie automatisée complète",
            "Planification multi-sites",
            "Évaluations & performance",
            "Support prioritaire 24/7",
            "Intégrations biométriques",
          ],
        },
        {
          n: "Enterprise",
          d: "Pour les groupes multi-sites avec besoins sur mesure.",
          f: [
            "Employés illimités",
            "Workflows personnalisés",
            "API & intégrations SI",
            "Manager dédié",
            "SLA contractuel",
            "Conformité avancée",
          ],
        },
      ],
    },
    finalCta: {
      title: "Prêt à Transformer Votre",
      titleHighlight: "Gestion RH",
      titleEnd: " ?",
      subtitle:
        "Rejoignez les organisations qui simplifient leurs opérations RH et améliorent leur productivité.",
      cta: "Planifier une Démo",
    },
    contact: {
      badge: "Contact",
      title: "Parlons de Vos Équipes",
      subtitle: "Un expert RH vous recontacte sous 24h pour planifier une démo personnalisée.",
      name: "Nom complet",
      email: "Email professionnel",
      phone: "Téléphone",
      message: "Parlez-nous de vos besoins RH...",
      send: "Envoyer la demande",
      offices: "Nos Bureaux",
      location: "Miami, Alexandrie, Égypte",
      phoneNum: "+20 122 426 4564",
      mail: "info@dotnetsolutions.com",
      mapTitle: "Miami District, Alexandrie",
      mapCountry: "Égypte",
    },
    footer: {
      desc: "Retex Solution — plateforme RH intelligente par DotNet pour hôtels, hôpitaux, cliniques, resorts, restaurants et entreprises.",
      company: "Entreprise",
      about: "À propos",
      careers: "Carrières",
      product: "Produit",
      demo: "Démo",
      stayInTouch: "Restons en contact",
      emailPlaceholder: "Votre email",
      rights: "© 2026 DotNet. Tous droits réservés.",
    },
  },
  en: {
    brand: {
      solution: "Retex Solution",
      company: "DotNet",
    },
    nav: {
      home: "Home",
      features: "Features",
      industries: "Industries",
      benefits: "Benefits",
      pricing: "Pricing",
      contact: "Contact",
      demo: "Request a Demo",
    },
    hero: {
      subtitle:
        "Automate attendance, scheduling, payroll, leave, performance reviews and HR reports from one intelligent platform.",
      presentation: "Watch Presentation",
      trustCount: "+500 companies",
      trustLabel: "trust us",
      slides: [
        { title: "Manage Your Staff Like a Pro", eyebrow: "Hospitality & Resorts" },
        { title: "HR Automation for Hospitality & Healthcare", eyebrow: "Hospitals & Clinics" },
        { title: "Payroll, Attendance & Scheduling in One Click", eyebrow: "Businesses & Restaurants" },
      ],
    },
    trust: {
      title: "Trusted by Growing Organizations",
      stats: [
        { l: "Companies" },
        { l: "Payroll Accuracy" },
        { l: "Admin Time" },
        { l: "Support" },
      ],
    },
    clarity: {
      badge: "Modules",
      title: "One Platform to Run",
      titleHighlight: "Everything",
      subtitle:
        "Inventory, accounting, sales, HR and finance — manage your entire business from a single unified interface.",
      learnMore: "Learn more",
      before: "Before Retex Solution",
      after: "After Retex Solution",
      beforeItems: [
        "Unknown stock balances",
        "Scattered customer & supplier accounts",
        "Uncontrolled purchases",
        "No sales analysis",
        "Improvised chart of accounts",
        "Invisible manufacturing stages",
        "Manual employee time tracking",
        "Guesswork overtime and deductions",
        "Branch profits impossible to isolate",
        "Financial operations spread everywhere",
      ],
      afterItems: [
        "Stock balance tracking",
        "Customer & supplier account tracking",
        "Purchase tracking per item",
        "Sales analysis",
        "Structured chart of accounts",
        "Manufacturing stage tracking",
        "Employee attendance schedules",
        "Automated overtime & deductions",
        "Profit & loss per branch",
        "All financial operations in one place",
      ],
      blocks: [
        {
          tag: "Inventory",
          title: "Inventory Management",
          text: "Track every item balance across all stores — valued at purchase and selling price — with regular automated stock counts.",
        },
        {
          tag: "Accounting",
          title: "Account Management",
          text: "Follow customer, supplier and cash box balances in one place, with a structured chart of accounts powering every operation.",
        },
        {
          tag: "Point of Sale",
          title: "Interactive POS",
          text: "An intuitive cashier interface to manage sales, display products, complete payments and follow manufacturing stages.",
        },
        {
          tag: "Finance A to Z",
          title: "From Transaction to Balance Sheet",
          text: "Drive every financial operation — from daily transactions to the final balance sheet and Profit & Loss report.",
        },
        {
          tag: "Human Resources",
          title: "Complete HR Department",
          text: "Track attendance, daily schedules, overtime, deductions, performance reviews and employee end-of-month entitlements.",
        },
      ],
    },
    features: {
      badge: "Features",
      title: "One Platform.",
      titleHighlight: "Every Operation",
      items: [
        { t: "Inventory Management", d: "Follow item balances across all stores with regular stock count." },
        { t: "Account Management", d: "Follow customers, providers and cash box balances in one place." },
        { t: "Point of Sale", d: "Interactive POS for sales, products, payments and manufacturing stages." },
        { t: "Finance A to Z", d: "From daily financial transactions to the final balance sheet and P&L." },
        { t: "HR Department", d: "Attendance, schedules, overtime, deductions, performance and entitlements." },
        { t: "Sales & Profits", d: "Track sales, profits per item and customer with growth over time." },
      ],
    },
    benefits: {
      badge: "Benefits",
      title: "Why Choose",
      titleHighlight: "Retex Solution",
      titleSuffix: "?",
      items: [
        "Reduce administrative workload",
        "Improve payroll accuracy",
        "Increase operational efficiency",
        "Real-time HR visibility",
        "Minimize attendance errors",
        "Scale your operations with confidence",
      ],
    },
    industries: {
      badge: "Industries",
      title: "Built for Your Industry",
      desc: "HR management adapted to specific operational constraints.",
      items: ["Hotels", "Hospitals", "Clinics", "Resorts", "Restaurants", "Businesses"],
    },
    howItWorks: {
      badge: "Getting Started",
      title: "How It Works",
      steps: [
        "Add Your Employees",
        "Connect Attendance Devices",
        "Manage Schedules",
        "Generate Payroll & Reports",
      ],
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Watch how our clients transform their daily HR management.",
      all: "All testimonials",
      featuredName: "Our clients on video",
      featuredRole: "Compilation of 5 testimonials",
      individual: "Individual testimonials",
      prev: "Previous testimonial",
      next: "Next testimonial",
      roles: [
        "IT Manager, Radi Trans Company",
        "Assistant Minister of Interior",
        "President of consumer cooperatives (Alex Market)",
        "Financial Director, Grand Mall",
        "Real estate and commercial investment",
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "A Plan for Every Stage",
      subtitle: "Flexible plans, no hidden commitments. Let's discuss your needs.",
      popular: "Popular",
      cta: "Contact Sales",
      plans: [
        {
          n: "Starter",
          d: "For small teams starting their HR structuring.",
          f: [
            "Up to 25 employees",
            "Attendance & time clock",
            "Leave management",
            "Basic reports",
            "Email support",
          ],
        },
        {
          n: "Professional",
          d: "The choice for growing hotels, clinics and restaurants.",
          f: [
            "Up to 250 employees",
            "Full automated payroll",
            "Multi-site scheduling",
            "Performance reviews",
            "24/7 priority support",
            "Biometric integrations",
          ],
        },
        {
          n: "Enterprise",
          d: "For multi-site groups with custom needs.",
          f: [
            "Unlimited employees",
            "Custom workflows",
            "API & system integrations",
            "Dedicated manager",
            "Contractual SLA",
            "Advanced compliance",
          ],
        },
      ],
    },
    finalCta: {
      title: "Ready to Transform Your",
      titleHighlight: "HR Management",
      titleEnd: "?",
      subtitle:
        "Join organizations that simplify their HR operations and improve productivity.",
      cta: "Schedule a Demo",
    },
    contact: {
      badge: "Contact",
      title: "Let's Talk About Your Teams",
      subtitle: "An HR expert will get back to you within 24 hours to schedule a personalized demo.",
      name: "Full name",
      email: "Work email",
      phone: "Phone",
      message: "Tell us about your HR needs...",
      send: "Submit request",
      offices: "Our Offices",
      location: "Miami, Alexandria, Egypt",
      phoneNum: "+20 122 426 4564",
      mail: "info@dotnetsolutions.com",
      mapTitle: "Miami District, Alexandria",
      mapCountry: "Egypt",
    },
    footer: {
      desc: "Retex Solution — intelligent HR platform by DotNet for hotels, hospitals, clinics, resorts, restaurants and businesses.",
      company: "Company",
      about: "About",
      careers: "Careers",
      product: "Product",
      demo: "Demo",
      stayInTouch: "Stay in touch",
      emailPlaceholder: "Your email",
      rights: "© 2026 DotNet. All rights reserved.",
    },
  },
  ar: {
    brand: {
      solution: "Retex Solution",
      company: "DotNet",
    },
    nav: {
      home: "الرئيسية",
      features: "الميزات",
      industries: "القطاعات",
      benefits: "المزايا",
      pricing: "الأسعار",
      contact: "اتصل بنا",
      demo: "طلب عرض توضيحي",
    },
    hero: {
      subtitle:
        "أتمتة إدارة الحضور والجداول والرواتب والإجازات والتقييمات وتقارير الموارد البشرية من منصة ذكية واحدة.",
      presentation: "مشاهدة العرض",
      trustCount: "+500 شركة",
      trustLabel: "تثق بنا",
      slides: [
        { title: "أدِر موظفيك كمحترف", eyebrow: "الفنادق والمنتجعات" },
        { title: "أتمتة الموارد البشرية للفنادق والقطاع الصحي", eyebrow: "المستشفيات والعيادات" },
        { title: "الرواتب والحضور والجداول بنقرة واحدة", eyebrow: "الشركات والمطاعم" },
      ],
    },
    trust: {
      title: "موثوق به من قبل مؤسسات في نمو مستمر",
      stats: [
        { l: "شركات" },
        { l: "دقة الرواتب" },
        { l: "الوقت الإداري" },
        { l: "الدعم" },
      ],
    },
    clarity: {
      badge: "الوضوح",
      title: "مصمم لإعادة",
      titleHighlight: "الوضوح",
      subtitle:
        "لا مزيد من الجداول المفقودة أو ضغط نهاية الشهر. فقط سلاسة وراحة بال وتحكم كامل في فرقك.",
      learnMore: "اعرف المزيد",
      before: "قبل Retex Solution",
      after: "بعد Retex Solution",
      beforeItems: [
        "جداول مفقودة",
        "أخطاء في الرواتب",
        "تسجيل يدوي للحضور",
        "متابعة موارد بشرية مبعثرة",
        "فرق محبطة",
        "تقارير مستحيلة",
      ],
      afterItems: [
        "جداول مركزية",
        "رواتب آلية",
        "حضور في الوقت الفعلي",
        "موارد بشرية موحدة",
        "فرق متناسقة",
        "تقارير فورية",
      ],
      blocks: [
        {
          tag: "الرواتب",
          title: "لا مزيد من الرواتب التقريبية",
          text: "كشوف الرواتب اليدوية وأخطاء الحساب وضغط نهاية الشهر. تحسب Retex Solution الرواتب والساعات الإضافية والخصومات تلقائياً — بدون أخطاء وبدون تأخير.",
        },
        {
          tag: "الحضور",
          title: "كل حضور محسوب، كل دقيقة مسجلة",
          text: "اربط أجهزة البصمة ودع المنصة تركز الحضور في الوقت الفعلي. لا مزيد من جداول Excel ولا شكوك.",
        },
        {
          tag: "التخطيط",
          title: "ذكي حيث يهم",
          text: "لا نكتفي بالأتمتة، بل نتوقع. تتعلم المنصة إيقاع فرقك وتنظم أيامك في الموارد البشرية.",
        },
      ],
    },
    features: {
      badge: "الميزات",
      title: "منصة واحدة.",
      titleHighlight: "جميع عمليات الموارد البشرية",
      items: [
        { t: "إدارة الموظفين", d: "الملفات والعقود والأقسام وملفات الموارد البشرية المركزية." },
        { t: "الحضور والبصمة", d: "اربط أجهزة التسجيل، متابعة تلقائية للحضور." },
        { t: "جدولة الورديات", d: "أنشئ الجداول، قارن الساعات المخططة بالفعلية." },
        { t: "إدارة الإجازات", d: "الإجازات المدفوعة والمرضية والعطل بسهولة." },
        { t: "رواتب آلية", d: "حساب تلقائي للرواتب والساعات الإضافية والمكافآت والخصومات." },
        { t: "تقييم الأداء", d: "متابعة وتقييم أداء موظفيك." },
        { t: "التقارير والتحليلات", d: "تقارير الحضور والرواتب والساعات الإضافية ورؤى الموارد البشرية." },
      ],
    },
    benefits: {
      badge: "المزايا",
      title: "لماذا تختار",
      titleHighlight: "Retex Solution",
      titleSuffix: "؟",
      items: [
        "قلل العبء الإداري",
        "حسّن دقة الرواتب",
        "زد الكفاءة التشغيلية",
        "رؤية الموارد البشرية في الوقت الفعلي",
        "قلل أخطاء الحضور",
        "طوّر عملياتك بثقة",
      ],
    },
    industries: {
      badge: "القطاعات",
      title: "مصمم لقطاعك",
      desc: "إدارة موارد بشرية متكيفة مع القيود التشغيلية الخاصة.",
      items: ["فنادق", "مستشفيات", "عيادات", "منتجعات", "مطاعم", "شركات"],
    },
    howItWorks: {
      badge: "البدء",
      title: "كيف يعمل",
      steps: [
        "أضف موظفيك",
        "اربط أجهزة الحضور",
        "أدر الجداول",
        "أنشئ الرواتب والتقارير",
      ],
    },
    testimonials: {
      badge: "الشهادات",
      title: "ماذا يقول عملاؤنا",
      subtitle: "اكتشف بالفيديو كيف يحول عملاؤنا إدارة الموارد البشرية يومياً.",
      all: "جميع الشهادات",
      featuredName: "عملاؤنا على الفيديو",
      featuredRole: "تجميع 5 شهادات",
      individual: "شهادات فردية",
      prev: "الشهادة السابقة",
      next: "الشهادة التالية",
      roles: [
        "مسؤول تقنية المعلومات، شركة رادي ترانس",
        "مساعد وزير الداخلية",
        "رئيس التعاونيات الاستهلاكية (أليكس ماركت)",
        "المدير المالي، جراند مول",
        "الاستثمار العقاري والتجاري",
      ],
    },
    pricing: {
      badge: "الأسعار",
      title: "عرض لكل مرحلة",
      subtitle: "خطط مرنة، بدون التزامات خفية. لنتحدث عن احتياجاتك.",
      popular: "الأكثر شعبية",
      cta: "اتصل بالمبيعات",
      plans: [
        {
          n: "Starter",
          d: "للفرق الصغيرة التي تبدأ هيكلة الموارد البشرية.",
          f: [
            "حتى 25 موظفاً",
            "الحضور وجهاز التسجيل",
            "إدارة الإجازات",
            "تقارير أساسية",
            "دعم بالبريد الإلكتروني",
          ],
        },
        {
          n: "Professional",
          d: "اختيار الفنادق والعيادات والمطاعم النامية.",
          f: [
            "حتى 250 موظفاً",
            "رواتب آلية كاملة",
            "تخطيط متعدد المواقع",
            "تقييمات الأداء",
            "دعم أولوية 24/7",
            "تكاملات بيومترية",
          ],
        },
        {
          n: "Enterprise",
          d: "للمجموعات متعددة المواقع ذات الاحتياجات المخصصة.",
          f: [
            "موظفون غير محدودين",
            "سير عمل مخصص",
            "API وتكاملات النظام",
            "مدير مخصص",
            "اتفاقية مستوى خدمة",
            "امتثال متقدم",
          ],
        },
      ],
    },
    finalCta: {
      title: "مستعد لتحويل",
      titleHighlight: "إدارة الموارد البشرية",
      titleEnd: "؟",
      subtitle: "انضم إلى المؤسسات التي تبسط عمليات الموارد البشرية وتحسن الإنتاجية.",
      cta: "جدولة عرض توضيحي",
    },
    contact: {
      badge: "اتصل بنا",
      title: "لنتحدث عن فرقك",
      subtitle: "خبير موارد بشرية سيتواصل معك خلال 24 ساعة لجدولة عرض توضيحي مخصص.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني المهني",
      phone: "الهاتف",
      message: "أخبرنا عن احتياجاتك في الموارد البشرية...",
      send: "إرسال الطلب",
      offices: "مكاتبنا",
      location: "ميامي، الإسكندرية، مصر",
      phoneNum: "+20 122 426 4564",
      mail: "info@dotnetsolutions.com",
      mapTitle: "حي ميامي، الإسكندرية",
      mapCountry: "مصر",
    },
    footer: {
      desc: "Retex Solution — منصة موارد بشرية ذكية من DotNet للفنادق والمستشفيات والعيادات والمنتجعات والمطاعم والشركات.",
      company: "الشركة",
      about: "من نحن",
      careers: "الوظائف",
      product: "المنتج",
      demo: "عرض توضيحي",
      stayInTouch: "ابق على تواصل",
      emailPlaceholder: "بريدك الإلكتروني",
      rights: "© 2026 DotNet. جميع الحقوق محفوظة.",
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "dotnet-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored && stored in translations ? stored : "fr";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
