"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./reveal";
import { CountUp } from "./count-up";
import { PanelLabel } from "./panel-label";
import { Sweep } from "./sweep";
import { TiltSpotlight } from "./tilt-spotlight";
import { BorderBeam } from "@/components/ui/border-beam";

type Metric = {
  value?: number;
  static?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const METRICS: Record<string, Metric[]> = {
  "Transactional Fraud Detection": [
    { value: 0.9395, decimals: 4, label: "PR AUC" },
    { value: 0.9612, decimals: 4, label: "test F1" },
    { static: "XGBoost", label: "core model" },
  ],
  "Predictive Modeling for Kidney Stone Detection": [
    { value: 0.77, decimals: 2, label: "ROC-AUC" },
    { value: 39, label: "Kaggle rank" },
    { static: "1000+ teams", label: "competition field" },
  ],
  "Reddit Data Pipeline and T20WC 2024 Analysis": [
    { value: 1000, suffix: "+", label: "Reddit posts" },
    { static: "RoBERTa", label: "sentiment model" },
    { static: "Spark", label: "analytics runtime" },
  ],
  "Image Captioning Pipeline": [
    { value: 0.3716, decimals: 4, label: "BLEU" },
    { value: 0.3795, decimals: 4, label: "METEOR" },
    { static: "ResNet50 + LSTM", label: "captioning model" },
  ],
  "RAG Engine for Assessment Recommendation": [
    { static: "BM25 + FAISS", label: "hybrid retrieval" },
    { static: "FastAPI", label: "service layer" },
    { static: "Gemini 2.5", label: "grounded generator" },
  ],
};

// Per-project accent so the cards read as distinct (teal · violet · fuchsia).
const PROJECT_ACCENTS = ["var(--accent)", "var(--accent-2)", "#d946ef"];

export function Work() {
  return (
    <div className="space-y-5">
      {profile.projects.map((project, i) => {
        const metrics = METRICS[project.title] ?? [];
        const color = PROJECT_ACCENTS[i % PROJECT_ACCENTS.length];
        return (
          <Reveal key={project.title} delay={i * 80}>
            <TiltSpotlight className="panel ticks p-6 sm:p-8">
              {/* per-project accent glow — gives each card its own identity */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 h-24 w-24 rounded-full opacity-[0.12] blur-2xl"
                style={{ background: color }}
              />
              <BorderBeam duration={8} delay={i * 4} size={70} />
              <BorderBeam duration={8} delay={i * 4 + 4} size={70} reverse />
              {/* header */}
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="eyebrow" style={{ color }}>
                      P-{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mono rounded border px-1.5 py-0.5 text-[10px] uppercase tracking-wider"
                      style={{
                        borderColor: color,
                        background: `color-mix(in srgb, ${color} 14%, transparent)`,
                        color,
                      }}
                    >
                      featured
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl sm:text-2xl">{project.title}</h3>
                  <p className="eyebrow mt-1.5">{project.role}</p>
                </div>
                <div className="flex gap-2">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Repository"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-accent hover:text-accent"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border-subtle px-3 text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent"
                    >
                      Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {/* metrics */}
              {metrics.length ? (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {metrics.map((m) => (
                    <div key={m.label} className="panel-quiet p-3.5">
                      <div className="text-gradient font-display text-xl font-semibold">
                        {m.static ? (
                          <span className="mono text-base">{m.static}</span>
                        ) : (
                          <CountUp
                            value={m.value ?? 0}
                            decimals={m.decimals ?? 0}
                            prefix={m.prefix}
                            suffix={m.suffix}
                          />
                        )}
                      </div>
                      <Sweep className="mt-2 w-8" />
                      <div className="eyebrow mt-1.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* problem / approach / result */}
              {project.details ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {(
                    [
                      ["problem", project.details.problem],
                      ["approach", project.details.approach],
                      ["result", project.details.results],
                    ] as const
                  ).map(([label, body]) => (
                    <div
                      key={label}
                      className="border-t border-border-subtle pt-3"
                    >
                      <PanelLabel className="mb-2">{label}</PanelLabel>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* tech */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-md border border-border-subtle bg-surface px-2 py-1 text-xs text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </TiltSpotlight>
          </Reveal>
        );
      })}
    </div>
  );
}
