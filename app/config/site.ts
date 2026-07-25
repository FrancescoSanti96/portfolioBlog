import { profile } from "app/data/profile";

const configuredUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: `${profile.name} Portfolio`,
  title: `${profile.name} | Software Engineer e Full Stack Developer`,
  description:
    "Portfolio di Francesco Santi: prodotti digitali full stack, sviluppo software, integrazioni AI e approfondimenti tecnici.",
  url: configuredUrl.replace(/\/$/, ""),
} as const;
