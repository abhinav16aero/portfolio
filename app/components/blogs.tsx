"use client";

import Link from "next/link";

export default function Blogs() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4">
        <article className="panel p-4">
          <h3 className="text-lg font-semibold">
            <Link
              href="https://medium.com/@anu55abhi/transformers-how-large-language-models-think-f8b71547c6de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              Transformers: How Large Language Models Think
            </Link>
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            A concise deep dive into transformer architectures, attention
            mechanisms, and the mathematical foundations that enable modern
            large language models. Read the full analysis on Medium.
          </p>
        </article>
      </div>
    </div>
  );
}
