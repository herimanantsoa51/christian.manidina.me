import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@herimanantsoa51",
    icon: Icons.gitHub,
    link: "https://github.com/herimanantsoa51",
  },
  {
    name: "LinkedIn",
    username: "Christian Herimanantsoa",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/christian-herimanantsoa",
  },
  {
    name: "Outlook",
    username: "manitra.christian@outlook.fr",
    icon: Icons.gmail,
    link: "mailto:manitra.christian@outlook.fr",
  },
];
