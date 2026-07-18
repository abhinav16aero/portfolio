import { profile } from "@/data/profile";

/**
 * schema.org structured data (JSON-LD) as a @graph: Person + WebSite +
 * ProfilePage. sameAs links tie the entity to authoritative profiles, which is
 * the main on-page signal for name-search ranking.
 *
 * Payload is fully static (from `profile`, no user input) with no HTML-special
 * characters, so rendering as script children is safe (no dangerous innerHTML).
 */
export function StructuredData() {
  const siteUrl = process.env.SITE_URL || "https://abhinav16aero.com";
  const email = profile.social.email.replace(/^mailto:/, "");
  const personId = `${siteUrl}/#person`;
  const siteId = `${siteUrl}/#website`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${email}`,
    worksFor: {
      "@type": "Organization",
      name: "ESDS Software Solutions Limited",
      url: "https://www.esds.co.in",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Kharagpur",
        url: "https://www.iitkgp.ac.in",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI Systems",
      "Large Language Models",
      "LLM Optimization",
      "Agentic AI",
      "Machine Learning",
      "Deep Learning",
      "RAG",
      "Anomaly Detection",
      "Data Pipelines",
      "Cloud Deployment",
    ],
    sameAs: [profile.social.github, profile.social.linkedin],
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": siteId,
        url: siteUrl,
        name: profile.name,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Abhinav Kumar // Software Engineer (AI)",
        isPartOf: { "@id": siteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
