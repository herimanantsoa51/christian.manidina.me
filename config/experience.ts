import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "reference-mg",
    position: "Software Developer & Automation Developer",
    company: "Reference.mg",
    location: "Antananarivo, Madagascar",
    startDate: new Date("2023-01-01"),
    endDate: "Present",
    description: [
      "Développement d'applications métier avec Laravel et React, puis automatisation des emails, tâches comptables et processus métier avec n8n et LangChain.",
      "Workflows n8n pour notifications récurrentes, intégrations IA pour traitement d'emails et automatisation comptable.",
      "APIs versionnées, dashboards et intégration des systèmes d'information existants.",
    ],
    achievements: [
      "Applications métier Laravel/React structurant les opérations et donnant une base fiable aux automatisations.",
      "Workflows n8n pour emails, notifications et opérations récurrentes — réduction du temps manuel.",
      "Automatisation comptable et processus métier avec intégrations IA/LangChain et APIs.",
    ],
    skills: ["Laravel", "React", "Typescript", "PostgreSQL", "Tailwind CSS", "Docker", "Python"],
    companyUrl: "https://reference.mg",
    logo: "/experience/keys-logo.png",
  },
  {
    id: "edlr",
    position: "Software Developer — Système d'Information",
    company: "Enfants De La Rue (ONG)",
    location: "Antananarivo, Madagascar",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-12-31"),
    description: [
      "Conception d'un système d'information pour l'ONG qui soutient la scolarisation d'enfants via le parrainage.",
      "Plateforme reliant chaque enfant à un parrain à l'étranger, avec suivi de la relation et historique.",
      "Messages automatisés selon les résultats scolaires et centralisation de la gestion comptable (Laravel/PostgreSQL).",
    ],
    achievements: [
      "Mise en relation enfant–parrain international avec suivi et historique complet.",
      "Automatisation des messages selon les résultats scolaires — notifications déclenchées automatiquement.",
      "Système d'information Laravel et gestion comptable centralisée pour l'association.",
    ],
    skills: ["Laravel", "PHP", "PostgreSQL", "React", "Tailwind CSS", "Docker"],
    companyUrl: "https://manidina.me",
    logo: "/experience/muzeai-logo.png",
  },
  {
    id: "manidina",
    position: "Freelance — AI Automation & Software Developer",
    company: "Manidina",
    location: "Antananarivo — Remote",
    startDate: new Date("2023-06-01"),
    endDate: "Present",
    description: [
      "Développement freelance en AI Automation (n8n, LangChain, RAG) et applications web Laravel/React.",
      "De l'agence Manidina aux clients internationaux: transformation de processus manuels en outils fiables.",
      "Objectif: automatiser ce qui fait perdre du temps et mesurer l'impact.",
    ],
    achievements: [
      "Manidina comme agence vitrine + christian.manidina.me comme portfolio personnel premium (Next.js sur Vercel).",
      "Stack moderne: Laravel, React/Next.js, PostgreSQL, n8n, LangChain, FastAPI, Docker/Dokku.",
      "Livraison orientée ROI: outils mesurables, faciles à utiliser pour PME et ONG.",
    ],
    skills: ["Next.js", "React", "Laravel", "PostgreSQL", "Tailwind CSS", "Python", "Docker"],
    companyUrl: "https://manidina.me",
    logo: "/experience/builtdesign-logo.png",
  },
];
