            import { useState } from "react";
            import { useProjectWizard } from "@/context/projectWizardContext";
            import { CheckCircle2 } from "lucide-react";
            import type { WizardData } from "../wizardTypes";


        interface StepIndustryProps {
            wizardData: WizardData;
        }


            export default function StepIndustry({
            wizardData,
            }: StepIndustryProps) {
                const  { industries } = wizardData; 

                        const sortedIndustries = [...industries].sort((a, b) => {
                        if (a.slug === "other") return 1;
                        if (b.slug === "other") return -1;

                        return a.name.localeCompare(b.name);
                        });

            const { data, updateField, nextStep } = useProjectWizard();
            const [pendingId, setPendingId] = useState<string | null>(null);


            const handleSelect = (id: string) => {
    setPendingId(id);
    updateField("industryId", id);

    const selectedIndustry = industries.find(
        (industry) => industry.id === id
    );

    if (selectedIndustry?.slug === "other") {
        setPendingId(null);
        return;
    }
    // small delay so the user sees the selection register
        // before the next step slides in

    setTimeout(() => {
        nextStep();
        setPendingId(null);
    }, 250);
    };

            return (
                <div className="grid gap-6 md:grid-cols-2">
                {sortedIndustries.map((industry) => {
                    const selected = data.industryId === industry.id || pendingId === industry.id;

                    return (
                    <button
                        key={industry.id}
                        type="button"
                        onClick={() => handleSelect(industry.id)}
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
                        <h3 className="text-xl font-semibold text-text-primary">
                            {industry.name}
                        </h3>

                        {selected && (
                            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">
                            <CheckCircle2 />
                            </span>
                        )}
                        </div>

                        <p className="mt-3 text-sm leading-7 text-text-muted">
                        {industry.description}
                        </p>

                        <div className="mt-6">
                        <p className="mb-3 text-sm font-semibold text-text-secondary">
                            Included Features
                        </p>

                        {/*<ul className="space-y-2">
                            {industry.features.map((websiteTypeFeature) => (
                            <li
                                key={websiteTypeFeature.feature.id}
                                className="flex items-center gap-2 text-sm text-text-muted"
                            >
                                <span className="text-yellow-400">✓</span>
                                {websiteTypeFeature.feature.name}
                            </li>
                            ))}
                        </ul>*/}
                        </div>
                        {selected && industry.slug === "other" && (
                            <div
                                className="mt-5"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <label
                                htmlFor="other-industry"
                                className="mb-2 block text-sm font-medium text-text-secondary"
                                >
                                What industry is your business in?
                                </label>

                                <input
                                id="other-industry"
                                type="text"
                                value={data.otherIndustry}
                                onChange={(event) =>
                                    updateField("otherIndustry", event.target.value)
                                }
                                placeholder="e.g. Renewable Energy"
                                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                                />
                            </div>
                            )}
                    </button>
                    );
                })}
                </div>
            );
            }