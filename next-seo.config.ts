import { DefaultSeoProps } from "next-seo";
import { profile } from "./data/profile";

const siteUrl = process.env.SITE_URL || "https://abhinav16aero.github.io";

const keywords = [
  ...(profile.portraitBadges || []),
  "AI",
  "LLMs",
  "MLOps",
  "Production ML",
  "Software Engineering",
].join(", ");

const config: DefaultSeoProps = {
  title: `${profile.name} | ${profile.title}`,
  titleTemplate: "%s — Abhinav Kumar",
  defaultTitle: profile.name,
  description: profile.summary,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    images: [
      {
        url: profile.portrait,
        width: 1200,
        height: 1200,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "author", content: profile.name },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index,follow" },
    { name: "email", content: profile.contact?.email || "" },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};

export default config;
