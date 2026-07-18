import { MetadataRoute } from "next/types";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || "https://abhinavkumar.co.in";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
