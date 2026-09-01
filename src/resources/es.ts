import type { Resources } from "./types";

export const es: Resources = {
  meta: {
    description:
      "Ruben Tolaba — Mobile Developer especializado en React Native, TypeScript y Full Stack.",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    about: "Sobre mí",
    contact: "Contacto",
    blog: "Blog",
  },
  hero: {
    title: "Ruben Tolaba",
    subtitle: "Mobile Developer · React Native · Full Stack",
    description:
      "Desarrollador especializado en React Native, TypeScript y .NET, con más de 4 años de experiencia construyendo y manteniendo software productivo. Experiencia trabajando sobre plataformas de banca digital, participando en Mobile, Web y Backend, desarrollando funcionalidades específicas para entidades financieras, integrando APIs y SDKs y resolviendo problemas de performance y producción.",
    techLine:
      "React Native · TypeScript · .NET · C# · React · Angular · SQL Server",
    ctaExperience: "Ver experiencia",
    ctaContact: "Contactarme",
  },
  whatIDo: {
    title: "Qué hago",
    description:
      "Desarrollo aplicaciones de software de extremo a extremo, con especial foco en Mobile, integrando frontend, backend y servicios externos.",
    mobile: {
      title: "Mobile",
      description:
        "Desarrollo de aplicaciones móviles multiplataforma con React Native y TypeScript para Android e iOS. Implementación de navegación, componentes, stores, formularios, notificaciones, SDKs y módulos nativos.",
    },
    fullStack: {
      title: "Full Stack",
      description:
        "Desarrollo e integración de APIs y lógica de negocio con .NET, C# y SQL Server, trabajando con REST, JWT, Dapper, Stored Procedures e integraciones con servicios externos.",
    },
    productEngineering: {
      title: "Product Engineering",
      description:
        "Implementación y customización de productos para necesidades específicas, desde nuevas funcionalidades e integraciones hasta optimización de performance y resolución de problemas en producción.",
    },
  },
  experience: {
    title: "Experiencia",
    description:
      "Experiencia profesional en plataformas productivas y proyectos con impacto real en Mobile, Web y Backend.",
    contributionsTitle: "Contribuciones técnicas",
    items: [
      {
        id: "digital-banking",
        title: "Digital Banking Platform",
        role: "Mobile Developer · Full Stack Developer",
        company: "Openix IT Solutions",
        period: "2022 — Present",
        description:
          "Desarrollo y customización de una plataforma de Digital Banking que integra soluciones Mobile, Web, Backend y Backoffice para diferentes entidades financieras. Participación en múltiples proyectos y clientes, implementando funcionalidades específicas, integraciones con servicios bancarios y SDKs, mejoras de performance y resolución de incidencias en entornos productivos.",
        contributions: [
          {
            id: "mobile",
            title: "Mobile Development",
            technologies:
              "React Native · TypeScript · Android · iOS · React Navigation · MobX",
            description:
              "Desarrollo y mantenimiento de aplicaciones Mobile con React Native y TypeScript para Android e iOS. Implementación de screens, componentes reutilizables, navegación, stores, formularios, push notifications, Quick Actions, integraciones con SDKs y módulos nativos.",
          },
          {
            id: "backend",
            title: "Backend & API Integration",
            technologies:
              ".NET 6 · ASP.NET Core · C# · Dapper · SQL Server · REST · SOAP · JWT",
            description:
              "Desarrollo e integración de servicios Backend utilizando .NET, C# y SQL Server. Implementación de lógica de negocio, autenticación, validaciones, integración de APIs REST y servicios bancarios, acceso a datos mediante Dapper y Stored Procedures.",
          },
          {
            id: "geolocation",
            title: "Geolocation",
            technologies: "GeoLite2 · .NET",
            description:
              "Implementación de funcionalidades de geolocalización utilizando GeoLite2 como respuesta a requerimientos específicos de clientes, integrando la solución dentro de los componentes necesarios de la plataforma.",
          },
          {
            id: "contracts",
            title: "Contract Management",
            technologies: ".NET · Templates · MHT · PDF · Email",
            description:
              "Implementación de un flujo completo para gestión y aceptación de contratos, incluyendo carga de contratos según servicio, generación mediante templates, procesamiento de documentos, conversión de MHT a PDF y envío de documentación por email con attachments.",
          },
          {
            id: "documents",
            title: "Document Processing",
            technologies: "MHT → PDF → PNG",
            description:
              "Desarrollo de procesos de conversión y preparación de documentos para su utilización dentro de aplicaciones Mobile, incluyendo conversión de MHT a PDF y posterior conversión de PDF a PNG.",
          },
          {
            id: "sdk",
            title: "SDK & Native Integrations",
            technologies: "React Native · Native Modules · Firebase · FCM",
            description:
              "Integración de SDKs y funcionalidades nativas dentro de aplicaciones React Native, incluyendo servicios de fingerprint, push notifications mediante Firebase/FCM y otras capacidades específicas de plataforma.",
          },
          {
            id: "performance",
            title: "Performance & Production",
            technologies: "",
            description:
              "Investigación y resolución de problemas de performance, race conditions y llamadas concurrentes a endpoints. Participación en resolución de bugs críticos, incidentes de producción y hotfixes.",
          },
          {
            id: "migration",
            title: "Application Migration",
            technologies: "React Native · Authentication · Security",
            description:
              "Implementación de funcionalidades relacionadas con la migración entre aplicaciones, incluyendo flujos de redirección, portal de transición y manejo de credenciales mediante hashing.",
          },
        ],
      },
      {
        id: "kioskad",
        title: "KioskAD",
        role: "Full Stack Developer · Personal Project",
        technologies: "Tauri · React · TypeScript · .NET · SQL Server",
        description:
          "Aplicación de gestión y ventas actualmente en desarrollo, diseñada inicialmente para operar de forma local y con una arquitectura preparada para evolucionar hacia escenarios de intranet y conexión entre sucursales.",
        features: [
          "Gestión de usuarios",
          "Autenticación",
          "Control de stock",
          "Ventas",
          "Historial",
          "Arquitectura en capas",
          "JWT",
          "Argon2id",
        ],
        extraDescription:
          "El MVP implementa JWT para autenticación, Argon2id para hashing seguro de contraseñas y una arquitectura en capas. El producto está pensado inicialmente para operación local, con una futura evolución hacia escenarios de intranet y conexión entre sucursales.",
      },
    ],
  },
  about: {
    title: "Sobre mí",
    description: "Background profesional y enfoque de trabajo.",
    paragraphs: [
      "Soy desarrollador de software de Jujuy, Argentina, con más de 4 años de experiencia profesional. Mi especialización principal es el desarrollo Mobile con React Native, aunque mi experiencia también cubre Frontend y Backend, trabajando con React, Angular, .NET, C# y SQL Server.",
      "Durante mi experiencia profesional trabajé sobre una plataforma de Digital Banking utilizada como base para diferentes entidades financieras, participando en proyectos y requerimientos específicos de clientes desde las capas Mobile, Web y Backend.",
      "Me interesa especialmente entender cómo funcionan los sistemas de extremo a extremo, resolver problemas técnicos y seguir evolucionando hacia arquitecturas y herramientas modernas. Actualmente también estoy desarrollando un proyecto propio con Tauri, React y .NET, mientras profundizo mis conocimientos en React moderno, AWS, microservicios y desarrollo asistido por IA.",
    ],
  },
  ai: {
    title: "Desarrollo asistido por IA",
    description:
      "Incorporación de herramientas de IA al flujo profesional de desarrollo, utilizando Cursor y Claude para generación y refactorización de código, debugging, análisis técnico y soporte durante la implementación. Experiencia práctica en revisión, validación y supervisión de código generado mediante IA.",
  },
  techStack: {
    title: "Tech Stack",
    categories: [
      {
        id: "core",
        title: "Core",
        items: ["React Native", "TypeScript", ".NET / C#", "SQL Server"],
      },
      {
        id: "frontend",
        title: "Frontend",
        items: ["React", "Angular", "JavaScript", "TypeScript"],
      },
      {
        id: "mobile",
        title: "Mobile",
        items: [
          "React Native CLI",
          "React Navigation",
          "MobX",
          "Firebase / FCM",
          "Native Modules",
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          "ASP.NET Core",
          "REST APIs",
          "SOAP",
          "Dapper",
          "JWT",
          "SQL Server",
        ],
      },
      {
        id: "tools",
        title: "Tools & Workflow",
        items: ["Git", "GitHub", "Azure DevOps", "CI/CD", "Cursor", "Claude"],
      },
      {
        id: "exploring",
        title: "Currently Exploring",
        items: [
          "Modern React",
          "Tauri",
          "AWS",
          "Microservices",
          "AI-assisted development",
        ],
      },
    ],
  },
  contact: {
    title: "Contactame",
    description: "¿Tenés un proyecto en mente o querés charlar? Escribime.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Te responderé pronto.",
      error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde.",
      validationError: "Revisá los campos del formulario.",
      disabled:
        "El formulario está pausado por ahora. Escribime directo por email o LinkedIn.",
      rateLimited:
        "Ya recibimos un mensaje reciente con ese email. Probá más tarde o contactame por LinkedIn.",
    },
  },
  locale: {
    switchToEn: "EN",
    switchToEs: "ES",
  },
};
