"use client";

import { BrainCircuit } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./reveal";
import { CountUp } from "./count-up";
import { PortraitCard } from "@/components/ui/portrait-card";

export function About() {
  return (
    <div className="space-y-8">
      {/* narrative + portrait */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-xl leading-snug text-text-primary sm:text-2xl">
              I build AI systems where model quality, latency, and reliability meet — especially
              LLM workflows that have to be
              <span className="text-accent"> measured, not guessed</span>.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 leading-relaxed text-text-secondary">
              Today I&apos;m at{" "}
              <span className="text-text-primary">ESDS Software Solutions Limited</span>, working
              across AI, LLM optimization, and ML-backed software systems. My focus is turning
              intelligent features into production-ready systems: faster inference, better
              evaluation, cleaner automation, and cloud-aware engineering that holds up in real use.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 leading-relaxed text-text-secondary">
              My CV brings together Python, C++, cloud tooling, NLP, Hugging Face, PyTorch,
              TensorFlow, and LLM-enhanced projects like DeepParse. The constant in my work is
              practical optimization: define the metric, profile the bottleneck, and make the model
              output reliable enough to ship.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <PortraitCard imageUrl={profile.portrait} name={profile.name} subtitle={profile.location} />
          </Reveal>
        </div>
      </div>

      {/* bento highlights */}
      <Reveal delay={120}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* feature: focus */}
          <div className="panel glow-border ticks col-span-2 flex items-center gap-4 p-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--accent-2-soft)" }}
            >
              <BrainCircuit className="h-5 w-5" style={{ color: "var(--accent-2)" }} />
            </div>
            <div className="min-w-0">
              <div className="text-gradient font-display text-lg font-semibold leading-tight">
                AI &amp; LLM Optimization
              </div>
              <div className="eyebrow mt-1.5">ESDS Software Solutions Ltd.</div>
            </div>
          </div>

          <div className="panel-quiet ticks p-4">
            <div className="text-gradient font-display text-2xl font-semibold">
              <CountUp value={2} decimals={1} suffix="+ months" />
            </div>
            <div className="eyebrow mt-1.5 leading-tight">Experience</div>
          </div>

          <div className="panel-quiet ticks p-4">
            <div className="text-gradient font-display text-2xl font-semibold">
              <CountUp value={402} suffix="+" />
            </div>
            <div className="eyebrow mt-1.5 leading-tight">people visited</div>
          </div>

          <div className="panel-quiet ticks col-span-2 flex items-center gap-4 p-4">
            <div className="text-gradient font-display text-2xl font-semibold">
              <CountUp value={profile.experience.length} />
            </div>
            <div className="eyebrow leading-tight">roles across AI, cloud, ML &amp; systems</div>
          </div>

          <div className="panel ticks col-span-2 flex items-center gap-2.5 p-4">
            <span className="pulse-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="mono text-xs text-text-secondary">
              building production AI systems &amp; optimized LLM workflows
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
