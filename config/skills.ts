import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Laravel",
    description: "Build robust business apps and accounting systems.",
    rating: 5,
    icon: Icons.laravel,
  },
  {
    name: "React",
    description: "Craft interactive user interfaces using components and state.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description: "Build dynamic apps with routing, layouts and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Tailwind CSS",
    description: "Design beautiful, modern websites faster with utility-first CSS.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "n8n",
    description: "Automate emails, accounting and business processes with visual workflows.",
    rating: 5,
    icon: Icons.workflow,
  },
  {
    name: "LangChain",
    description: "Build AI agents and RAG pipelines for business automation.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Typescript",
    description: "Enhance JavaScript with static types for reliable code.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description: "Create interactive and dynamic web experiences.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "PostgreSQL",
    description: "Robust relational database for business and accounting data.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MySQL",
    description: "Manage relational databases for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Python",
    description: "Automate and build AI backends with Python and FastAPI.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "PHP",
    description: "Server-side scripting for Laravel and custom business logic.",
    rating: 4,
    icon: Icons.php,
  },
  {
    name: "Docker",
    description: "Containerize apps for reliable deployment on Dokku and Cloud.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Git",
    description: "Version control for collaborative development.",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "FastAPI",
    description: "Build fast AI and automation APIs with Python.",
    rating: 4,
    icon: Icons.fastapi,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
