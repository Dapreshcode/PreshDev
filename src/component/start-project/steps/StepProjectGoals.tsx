"use client";

import { PROJECT_GOALS } from "@/data/project-goals";
import { useProjectWizard } from "@/hooks/useProjectWizard";
import { CheckCircle2 } from "lucide-react";
import type { WizardData } from "../wizardTypes";

interface StepProjectGoalsProps {
  wizardData: WizardData;
}

export default function StepProjectGoals({
  wizardData,
}: StepProjectGoalsProps) {
  void wizardData;

  const { data, toggleProjectGoal, updateField } = useProjectWizard();

  const otherGoalSelected = data.projectGoals.includes("Other");

  const handleGoalClick = (goalTitle: string) => {
    if (goalTitle === "Other") {
      toggleProjectGoal("Other");
      return;
    }

    toggleProjectGoal(goalTitle);
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECT_GOALS.map((goal) => {
          const selected = data.projectGoals.includes(goal.title);

          return (
            <button
              key={goal.title}
              type="button"
              onClick={() => handleGoalClick(goal.title)}
              className={`
                rounded-2xl border p-6 text-left transition-all duration-200
                ${
                  selected
                    ? "border-yellow-400 bg-yellow-400/5 ring-2 ring-yellow-400/20"
                    : "border-slate-700 hover:border-yellow-400 hover:bg-slate-900"
                }
              `}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  {goal.title}
                </h3>

                {selected && (
                  <CheckCircle2
                    size={20}
                    className="text-yellow-400"
                  />
                )}
              </div>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {goal.description}
              </p>
            </button>
          );
        })}
      </div>

      {otherGoalSelected && (
        <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
          <label
            htmlFor="otherProjectGoal"
            className="block text-sm font-semibold text-text-primary"
          >
            Tell us about your goal
          </label>

          <p className="mt-1 text-sm text-text-muted">
            Describe what you want your website to achieve.
          </p>

          <textarea
            id="otherProjectGoal"
            value={data.otherProjectGoal}
            onChange={(event) =>
              updateField("otherProjectGoal", event.target.value)
            }
            placeholder="For example, I want customers to book appointments directly from the website."
            rows={4}
            className="mt-4 w-full resize-none rounded-xl border border-slate-700 bg-background px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20"
          />
        </div>
      )}
    </div>
  );
}