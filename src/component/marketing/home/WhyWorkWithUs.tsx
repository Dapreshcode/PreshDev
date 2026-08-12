import {
  BriefcaseBusiness,
  Gauge,
  Layers3,
  Rocket,
} from "lucide-react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We start by understanding your business, your goals, and what you want your digital solution to achieve.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Modern Experiences",
    description:
      "We create clean, responsive, and intuitive digital experiences designed to work beautifully across devices and browsers.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Built to Perform",
    description:
      "We focus on performance, usability, maintainability, and choosing the right technology for your project.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description:
      "We build solutions with future growth in mind, allowing your digital product to evolve alongside your business.",
    icon: Rocket,
  },
];

export default function WhyWorkWithUs() {
  return (
    <Section className="bg-surface/30">
      <Container>
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Why Work With Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl ">
              Digital solutions built with purpose.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-text-muted sm:text-lg lg:justify-self-end">
            We don't just build websites and software. We take the time to
            understand what your business needs and create digital experiences
            designed to support your goals and future growth.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl sm:p-8"
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-opacity duration-300 group-hover:bg-accent/10"
                />

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                    {reason.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-surface text-accent">
                    <Icon size={19} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Credibility statement */}
        <div className="mt-12 rounded-3xl border border-accent/10 bg-accent/5 p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-lg font-medium leading-8 text-text-primary sm:text-xl">
              Every project is an opportunity to create something useful,
              reliable, and meaningful for the people who will use it.
            </p>

            <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
              From business websites and company profiles to e-commerce
              platforms and custom software, our approach is centered around
              solving real problems with thoughtful digital solutions.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}