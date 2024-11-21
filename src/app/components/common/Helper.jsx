import {
  ABOUT,
  CONTACT,
  EMAIL,
  GITHUB,
  LINKEDIN,
  PROJECTS,
} from "@/app/constant";
import {
  ExpressIcon,
  FigmaIcon,
  GithubIcon,
  IconEmail,
  IconGithub,
  IconLinkedin,
  JavaScriptIcon,
  MongoDBIcon,
  MySQLIcon,
  NetlifyIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
} from "./Icons";

export const NAVLINKS = [
  { label: "About", href: ABOUT },
  { label: "Work", href: PROJECTS },
  { label: "Contact", href: CONTACT },
];
export const SOCIAL_MEDIA = [
  { icon: <IconGithub />, url: GITHUB },
  { icon: <IconLinkedin />, url: LINKEDIN },
  { icon: <IconEmail />, url: EMAIL },
];
export const SKILLS = [
  { name: "Javascript", icon: <JavaScriptIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextJsIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Node.js", icon: <NodeJsIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "Sass", icon: <SassIcon /> },
  { name: "Tailwind", icon: <TailwindIcon /> },
  { name: "Github", icon: <GithubIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Netlify", icon: <NetlifyIcon /> },
  { name: "MySQL", icon: <MySQLIcon /> },
];
export const PROJECTSDETAIL = [
  {
    image: "/assets/images/png/clear-talk.png",
    title: "ClearTalk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    library: ["React", "Next", "Tailwind"],
    link: "https://cleartalk.ai",
  },
  {
    image: "/assets/images/png/clear-talk.png",
    title: "ClearTalk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    library: ["React", "Next", "Tailwind"],
    link: "https://cleartalk.ai",
  },
  {
    image: "/assets/images/png/clear-talk.png",
    title: "ClearTalk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    library: ["React", "Next", "Tailwind"],
    link: "https://cleartalk.ai",
  },
];
