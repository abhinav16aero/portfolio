import { Nav } from "./components/nav";
import { ScrollProgress } from "./components/scroll-progress";
import { BackToTop } from "./components/back-to-top";
import { Hero } from "./components/hero";
import { WorkedAt } from "./components/worked-at";
import { Section } from "./components/section";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Work } from "./components/work";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Signals } from "./components/signals";
import Blogs from "./components/blogs";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { CursorGlow } from "./components/cursor-glow";
import { InstrumentField } from "./components/instrument-field";
import { HeroBackdrop } from "./components/hero-backdrop";

export default function HomePage() {
  return (
    <>
      {/* skip-to-content: first focusable element, visible only on keyboard focus */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-accent focus:bg-bg-main focus:px-4 focus:py-2 focus:text-sm focus:text-text-primary focus:shadow-glow"
      >
        Skip to content
      </a>
      {/* animated plasma shader band with scroll parallax */}
      <HeroBackdrop />
      <div className="aurora" aria-hidden />
      <InstrumentField />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main id="content" className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />

          <WorkedAt />

          <Section
            id="about"
            index="01"
            title="About"
            meta="profile"
            lead="The short version of a longer story: aerospace engineering, computer science, and AI systems built for real-world use."
          >
            <About />
          </Section>

          <Section
            id="skills"
            index="02"
            title="Capabilities"
            meta="stack"
            lead="The tools I reach for across AI engineering, data systems, cloud deployment, and production software."
          >
            <Skills />
          </Section>

          <Section
            id="work"
            index="03"
            title="Selected Work"
            meta="case studies"
            lead="A few projects that show the pattern: model the problem, measure the result, and keep the system practical."
          >
            <Work />
          </Section>

          <Section
            id="experience"
            index="04"
            title="Experience"
            meta="timeline"
            lead="The path here: data science, GenAI internships, agentic AI systems, and now AI software engineering at ESDS."
          >
            <Experience />
          </Section>

          <Section
            id="education"
            index="05"
            title="Education & Awards"
            meta="credentials"
            lead="IIT Kharagpur foundations, AI coursework, competitive programming, open source, and data science community work."
          >
            <Education />
          </Section>

          <Section
            id="signals"
            index="06"
            title="Github Signals"
            meta="realtime"
            lead="Not a static resume, live proof that I am still building, learning, and shipping."
          >
            <Signals />
          </Section>

          <Section
            id="blogs"
            index="07"
            title="Blogs"
            meta="writing"
            lead="Short essays and notes on AI engineering, systems design, and practical learnings."
          >
            <Blogs />
          </Section>

          <Section
            id="contact"
            index="08"
            title="Contact"
            meta="say hi"
            lead="If any of this resonates with you — AI systems, LLM optimization, data pipelines, or a role — let's talk."
          >
            <Contact />
          </Section>

          <Footer />
        </div>
      </main>
      <BackToTop />
    </>
  );
}
