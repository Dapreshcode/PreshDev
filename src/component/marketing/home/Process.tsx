import {
  ArrowRight,
  ClipboardList,
  Code2,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description:
      "Tell us about your business, what you want to build, your goals, and the features you need.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Plan & Define",
    description:
      "We turn your idea into a clear project scope, feature plan, timeline, and development direction.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We create a modern, responsive experience and build your solution using the right technology for your project.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "You review the work, provide feedback, and we refine the product to ensure it meets the agreed requirements.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We handle the final deployment and help you get your new digital solution ready for real users.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <Section>
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            A clear process from idea to launch.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
            We make building your digital solution simple, structured, and
            easy to understand from the first conversation to launch.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-border-subtle lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Step icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-background text-accent shadow-sm">
                    <Icon size={20} />
                  </div>

                  {/* Step content */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.2em] text-accent">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-text-primary">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border-subtle bg-surface/50 p-7 text-center sm:p-10 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
              Ready to build something great?
            </h3>

            <p className="mt-2 text-sm leading-7 text-text-muted sm:text-base">
              Tell us about your project and let's figure out the right
              solution for your business.
            </p>
          </div>

          <Link
            href="/start-project"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-hover"
          >
            Start Your Project

            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}