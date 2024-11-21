import { ABOUT, CONTACT, EMAIL, GITHUB, LINKEDIN, PROJECTS } from "@/app/constant";
import { IconEmail, IconGithub, IconLinkedin } from "./Icons";

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
