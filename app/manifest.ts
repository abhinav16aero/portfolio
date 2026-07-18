import type { MetadataRoute } from "next/types";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abhinav Kumar — Software Engineer AI/ML",
    short_name: "Abhinav Kumar",
    description:
      "Software Engineer (AI) at ESDS building AI systems, LLM optimization workflows, agentic APIs, and production ML systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e14",
    theme_color: "#0a0e14",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
