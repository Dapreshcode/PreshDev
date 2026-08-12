import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

export default function FinalCTA() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-surface-elevated px-6 py-16 text-center shadow-2xl sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
              <Sparkles size={15} className="text-accent" />

              <span className="text-sm font-medium text-accent">
                Let's build something meaningful
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-6xl">
              Have a project in mind?
              <br />
              <span className="text-accent">Let's build it.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Whether you need a professional business website, an e-commerce
              platform, or a custom digital solution, tell us what you have in
              mind and let's explore the right way to bring it to life.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/start-project"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-accent-hover"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold text-text-primary transition-all duration-200 hover:border-accent hover:text-accent"
              >
                Explore Our Work
              </Link>
            </div>

            <p className="mt-6 text-xs text-text-muted sm:text-sm">
              Tell us about your project. We'll help you figure out the next
              step.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}