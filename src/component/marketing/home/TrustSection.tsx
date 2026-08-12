import {
  Code2,
  Layers3,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

const trustPoints = [
  {
    icon: MonitorSmartphone,
    title: "Built for every screen",
    description:
      "Responsive experiences that look and work beautifully across phones, tablets, and desktops.",
  },
  {
    icon: Code2,
    title: "Modern technology",
    description:
      "Built with modern web technologies designed for performance, maintainability, and scalability.",
  },
  {
    icon: Layers3,
    title: "Designed around your needs",
    description:
      "Every project is tailored to your business, audience, goals, and specific requirements.",
  },
  {
    icon: Rocket,
    title: "Built to help you grow",
    description:
      "Digital solutions designed to give your business a strong foundation for growth and future expansion.",
  },
];

export default function TrustSection() {
  return (
    <Section className="border-y border-border-subtle bg-surface/40">
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Presh Dev
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            More than just a website.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
            We build thoughtful digital experiences that combine modern
            technology, strong design, and your unique business goals.
          </p>
        </div>

        {/* Trust points */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="bg-background p-7 transition-colors duration-200 hover:bg-surface"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-base font-semibold text-text-primary">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}