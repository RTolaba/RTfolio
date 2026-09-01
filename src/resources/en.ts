import type { Resources } from "./types";

export const en: Resources = {
  meta: {
    description:
      "Ruben Tolaba — Mobile Developer specialized in React Native, TypeScript and Full Stack.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    about: "About Me",
    contact: "Contact",
    blog: "Blog",
  },
  hero: {
    title: "Ruben Tolaba",
    subtitle: "Mobile Developer · React Native · Full Stack",
    description:
      "Developer specialized in React Native, TypeScript and .NET, with 4+ years of experience building and maintaining production software. Experienced in digital banking platforms, working across Mobile, Web and Backend to deliver client-specific features, integrate APIs and SDKs, and solve performance and production issues.",
    techLine:
      "React Native · TypeScript · .NET · C# · React · Angular · SQL Server",
    ctaExperience: "View experience",
    ctaContact: "Contact me",
  },
  whatIDo: {
    title: "What I Do",
    description:
      "I build end-to-end software applications, with a primary focus on Mobile development while working across frontend, backend and external services.",
    mobile: {
      title: "Mobile",
      description:
        "Development of cross-platform mobile applications using React Native and TypeScript for Android and iOS. Implementation of navigation, components, stores, forms, notifications, SDKs and native modules.",
    },
    fullStack: {
      title: "Full Stack",
      description:
        "Development and integration of APIs and business logic using .NET, C# and SQL Server, working with REST, JWT, Dapper, Stored Procedures and external service integrations.",
    },
    productEngineering: {
      title: "Product Engineering",
      description:
        "Implementation and customization of products for specific business requirements, from new features and integrations to performance improvements and production issue resolution.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Professional experience on production platforms and projects with real impact across Mobile, Web and Backend.",
    contributionsTitle: "Technical contributions",
    items: [
      {
        id: "digital-banking",
        title: "Digital Banking Platform",
        role: "Mobile Developer · Full Stack Developer",
        company: "Openix IT Solutions",
        period: "2022 — Present",
        description:
          "Development and customization of a Digital Banking platform integrating Mobile, Web, Backend and Backoffice solutions for different financial institutions. Worked across multiple projects and clients, implementing client-specific features, banking service integrations and SDKs, performance improvements and production issue resolution.",
        contributions: [
          {
            id: "mobile",
            title: "Mobile Development",
            technologies:
              "React Native · TypeScript · Android · iOS · React Navigation · MobX",
            description:
              "Development and maintenance of mobile applications using React Native and TypeScript for Android and iOS. Implemented screens, reusable components, navigation, stores, forms, push notifications, Quick Actions, SDK integrations and native modules.",
          },
          {
            id: "backend",
            title: "Backend & API Integration",
            technologies:
              ".NET 6 · ASP.NET Core · C# · Dapper · SQL Server · REST · SOAP · JWT",
            description:
              "Development and integration of Backend services using .NET, C# and SQL Server. Implemented business logic, authentication, validations, REST API and banking service integrations, with data access through Dapper and Stored Procedures.",
          },
          {
            id: "geolocation",
            title: "Geolocation",
            technologies: "GeoLite2 · .NET",
            description:
              "Implemented geolocation capabilities using GeoLite2 to address client-specific requirements, integrating the solution across the necessary platform components.",
          },
          {
            id: "contracts",
            title: "Contract Management",
            technologies: ".NET · Templates · MHT · PDF · Email",
            description:
              "Implemented an end-to-end contract management and acceptance flow, including service-based contract loading, template-driven document generation, document processing, MHT-to-PDF conversion and email delivery with attachments.",
          },
          {
            id: "documents",
            title: "Document Processing",
            technologies: "MHT → PDF → PNG",
            description:
              "Developed document conversion and preparation workflows for mobile applications, including MHT-to-PDF and PDF-to-PNG conversion processes.",
          },
          {
            id: "sdk",
            title: "SDK & Native Integrations",
            technologies: "React Native · Native Modules · Firebase · FCM",
            description:
              "Integrated third-party SDKs and native capabilities into React Native applications, including fingerprint-related services, Firebase/FCM push notifications and platform-specific functionality.",
          },
          {
            id: "performance",
            title: "Performance & Production",
            technologies: "",
            description:
              "Investigated and resolved performance issues, race conditions and concurrent API calls. Contributed to the resolution of critical bugs, production incidents and hotfixes.",
          },
          {
            id: "migration",
            title: "Application Migration",
            technologies: "React Native · Authentication · Security",
            description:
              "Implemented application migration functionality including redirection flows, transition portal logic and credential handling using secure password hashing.",
          },
        ],
      },
      {
        id: "kioskad",
        title: "KioskAD",
        role: "Full Stack Developer · Personal Project",
        technologies: "Tauri · React · TypeScript · .NET · SQL Server",
        description:
          "Internal management and sales application currently under development, initially designed for local operation with an architecture prepared to evolve towards intranet and multi-branch connectivity.",
        features: [
          "User management",
          "Authentication",
          "Inventory control",
          "Sales",
          "Historical records",
          "Layered architecture",
          "JWT",
          "Argon2id",
        ],
        extraDescription:
          "The MVP implements JWT authentication, Argon2id password hashing and a layered architecture. The product is initially designed for local operation, with a future roadmap towards intranet and multi-branch connectivity.",
      },
    ],
  },
  about: {
    title: "About Me",
    description: "Professional background and working approach.",
    paragraphs: [
      "I'm a software developer from Jujuy, Argentina, with 4+ years of professional experience. My main specialization is Mobile development with React Native, while my experience also covers Frontend and Backend development using React, Angular, .NET, C# and SQL Server.",
      "Professionally, I've worked on a Digital Banking platform used as a foundation for different financial institutions, contributing to client-specific projects and requirements across Mobile, Web and Backend.",
      "I'm particularly interested in understanding systems end-to-end, solving technical problems and continuously evolving towards modern architectures and development practices. I'm currently also building a personal project with Tauri, React and .NET, while strengthening my knowledge of modern React, AWS, microservices and AI-assisted development.",
    ],
  },
  ai: {
    title: "AI-Assisted Development",
    description:
      "Incorporating AI-assisted development tools into professional software workflows, using Cursor and Claude for code generation, refactoring, debugging, technical analysis and implementation support. Practical experience reviewing, validating and supervising AI-generated code.",
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
    title: "Contact me",
    description: "Have a project in mind or want to connect? Reach out.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sending: "Sending...",
      success: "Thanks! I'll get back to you soon.",
      error: "Could not send the message. Please try again later.",
      validationError: "Please check the form fields.",
      disabled:
        "The form is paused for now. Reach out directly via email or LinkedIn.",
      rateLimited:
        "We already received a recent message from that email. Try again later or contact me on LinkedIn.",
    },
  },
  locale: {
    switchToEn: "EN",
    switchToEs: "ES",
  },
};
