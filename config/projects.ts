import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "edlr-parrainage",
    companyName: "Enfants De La Rue — Parrainage Scolaire",
    type: "Professional",
    category: ["Web Dev", "Backend", "UI/UX"],
    shortDescription:
      "Système d'information pour l'ONG Enfants De La Rue (Madagascar) — parrainage scolaire: relie chaque enfant à un parrain à l'étranger, automatise les messages selon les résultats et centralise la comptabilité.",
    websiteLink: "https://christian.manidina.me",
    githubLink: "https://github.com/herimanantsoa51",
    techStack: ["Laravel", "PHP", "PostgreSQL", "React", "Tailwind CSS", "Docker"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-12-31"),
    companyLogoImg: "/projects/edlr/logo.png",
    pagesInfoArr: [
      {
        title: "Parrainage & Suivi Scolaire",
        description: "Association enfant–parrain international avec historique et suivi scolaire complet.",
        imgArr: ["/projects/edlr/logo.png", "/profile-img.jpg"],
      },
      {
        title: "Messages Automatisés",
        description: "Notifications déclenchées automatiquement selon les résultats scolaires.",
        imgArr: ["/images/n8n/n8n1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Conception d'un système d'information pour l'ONG Enfants De La Rue Madagascar, qui soutient la scolarisation d'enfants grâce au parrainage.",
        "La plateforme relie chaque enfant à un parrain à l'étranger, structure les résultats scolaires pour alimenter le suivi et déclenche des messages automatisés selon les résultats. La gestion comptable est centralisée pour l'association.",
      ],
      bullets: [
        "Parrainage international: association d'un enfant avec un parrain à l'étranger et suivi de la relation.",
        "Suivi scolaire structuré pour alimenter communications et historique.",
        "Messages et notifications automatisés déclenchés selon les résultats scolaires.",
        "Centralisation des informations financières et gestion comptable (Laravel/PostgreSQL).",
      ],
    },
  },
  {
    id: "reference-mg",
    companyName: "Reference.mg — Automatisation Métier",
    type: "Professional",
    category: ["Web Dev", "Backend", "Full Stack"],
    shortDescription:
      "Chez Reference.mg: applications métier Laravel & React, puis automatisation emails, comptabilité et processus métier avec n8n et LangChain. Workflows récurrents et intégrations IA.",
    websiteLink: "https://christian.manidina.me",
    githubLink: "https://github.com/herimanantsoa51",
    techStack: ["Laravel", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Python", "Docker"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/projects/reference-mg/logo.png",
    pagesInfoArr: [
      {
        title: "Workflows n8n",
        description: "Orchestration emails, compta et processus métier avec n8n et LangChain.",
        imgArr: ["/images/n8n/n8n1.png", "/images/n8n/n8n2.png"],
      },
      {
        title: "Apps Métier Laravel/React",
        description: "Applications métier structurant les opérations et base fiable pour l'automatisation.",
        imgArr: ["/projects/reference-mg/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Chez Reference.mg, développement d'applications métier avec Laravel & React, puis automatisation des emails, tâches comptables et processus métier avec n8n et LangChain.",
        "Workflows pour notifications récurrentes, traitement d'emails et comptabilité, avec APIs versionnées et dashboards.",
      ],
      bullets: [
        "Applications métier Laravel/React donnant une base fiable aux automatisations.",
        "Workflows n8n pour emails, notifications et opérations récurrentes.",
        "Automatisation comptable et processus métier avec intégrations IA/LangChain.",
        "APIs versionnées et intégration des systèmes d'information existants.",
      ],
    },
  },
  {
    id: "gestion-commerciale",
    companyName: "Gestion Commerciale & Comptabilité",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Backend"],
    shortDescription:
      "Solution tout-en-un en production: ventes rapides (cash/mobile money/mixte), crédit avec échéancier, stock FIFO par variantes, comptabilité automatisée, multi-devises et dashboards.",
    websiteLink: "https://manidina.me/portfolio",
    githubLink: "https://github.com/herimanantsoa51",
    techStack: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "Docker", "Typescript"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/gestion/logo.png",
    pagesInfoArr: [
      {
        title: "POS & Ventes Multi-Modes",
        description: "Vente rapide, crédit avec échéancier, réservations avec acomptes — 12 écrans en production.",
        imgArr: [
          "/images/express_sale/express_sale1.png",
          "/images/express_sale/express_sale2.png",
          "/images/express_sale/express_sale3.png",
          "/images/express_sale/express_sale4.png",
        ],
      },
      {
        title: "Stock FIFO & Comptabilité",
        description: "Gestion par variantes (taille/couleur/pointure), marges automatiques et rapprochement bancaire.",
        imgArr: [
          "/images/express_sale/express_sale5.png",
          "/images/express_sale/express_sale6.png",
          "/images/express_sale/express_sale7.png",
          "/images/express_sale/express_sale8.png",
        ],
      },
      {
        title: "Multi-devises & Dashboards",
        description: "EUR, USD, Baht, Yuan/Ariary, trésorerie multi-comptes et analytics.",
        imgArr: [
          "/images/express_sale/express_sale9.png",
          "/images/express_sale/express_sale10.png",
          "/images/express_sale/express_sale11.png",
          "/images/express_sale/express_sale12.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Solution professionnelle tout-en-un déployée en production pour une boutique: gestion des ventes rapides, crédit, réservations, stock FIFO et comptabilité automatisée.",
        "La solution calcule coûts, marges et rapprochements bancaires, gère le multi-devises et fournit des tableaux de bord décisionnels. 13+ écrans, 6 modules en production.",
      ],
      bullets: [
        "Ventes multi-modes: rapide, crédit avec échéancier, réservations avec acomptes.",
        "Stock FIFO par variantes avec gestion des coûts et marges automatiques.",
        "Multi-devises et trésorerie multi-comptes avec rapprochement bancaire.",
        "Dashboards et analytics pour pilotage quotidien.",
      ],
    },
  },
  {
    id: "taniko-madagascar",
    companyName: "Taniko Madagascar — Plateforme Multi-Services",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription:
      "Écosystème Laravel (API + OAuth Sanctum multi-tenant), frontends Next.js, agents IA FastAPI et réseau WordPress. Déployé sur Oracle Cloud avec Docker/Dokku.",
    websiteLink: "https://manidina.me",
    githubLink: "https://github.com/herimanantsoa51",
    techStack: ["Laravel", "Next.js", "React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/projects/taniko/logo.png",
    pagesInfoArr: [
      {
        title: "Multi-tenant & IA",
        description: "OAuth Sanctum centralisé + proxy FastAPI pour agents IA, réseau WordPress.",
        imgArr: ["/projects/taniko/logo.png", "/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Écosystème numérique complet: backend Laravel (API + OAuth Sanctum), frontends Next.js, agents IA FastAPI et réseau WordPress multi-tenant déployé sur Oracle Cloud.",
        "Mon rôle couvre le backend, l'architecture OAuth multi-tenant et l'intégration des agents IA.",
      ],
      bullets: [
        "API Laravel versionnée avec OAuth Sanctum multi-tenant.",
        "Frontends Next.js et réseau WordPress FSE + plugins réseau.",
        "Agents IA FastAPI (proxy OpenAI-compatible) derrière le backend, isolation par conteneur.",
        "Infra Docker + nginx + Dokku sur Oracle Cloud ARM.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
