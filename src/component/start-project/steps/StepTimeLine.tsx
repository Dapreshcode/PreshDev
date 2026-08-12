"use client";

import { Check } from "lucide-react";
import { useProjectWizard } from "@/hooks/useProjectWizard";
import type { ProjectTimeline } from "@/generated/prisma/client";

const timelineOptions: {
  value: ProjectTimeline;
  label: string;
  description: string;
}[] = [
  {
    value: "ONE_TO_SEVEN_DAYS",
    label: "1–7 days",
    description: "I need the project completed within the next week.",
  },
  {
    value: "ONE_TO_THREE_WEEKS",
    label: "1–3 weeks",
    description: "I can give the project a few weeks.",
  },
  {
    value: "THREE_TO_SIX_WEEKS",
    label: "3–6 weeks",
    description: "I'm comfortable with a longer development timeline.",
  },
  {
    value: "MORE_THAN_SIX_WEEKS",
    label: "More than 6 weeks",
    description: "The project can take more than six weeks.",
  },
  {
    value: "FLEXIBLE",
    label: "I'm flexible",
    description: "I'm open to whatever timeline is appropriate.",
  },
];

export default function StepProjectTimeline() {
  const { data, updateField } = useProjectWizard();

  const handleSelect = (timeline: ProjectTimeline) => {
    updateField("timeline", timeline);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {timelineOptions.map((option) => {
        const selected = data.timeline === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className={`rounded-2xl border p-5 text-left transition-all ${
              selected
                ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                : "border-border bg-surface hover:border-accent/50"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-text-primary">
                  {option.label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {option.description}
                </p>
              </div>

              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  selected
                    ? "border-accent bg-accent text-background"
                    : "border-border"
                }`}
              >
                {selected && <Check size={14} />}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}