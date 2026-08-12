    "use client";

    import { useProjectWizard } from "@/hooks/useProjectWizard";
    import { Check } from "lucide-react";

    const designOptions = [
    {
        value: "MODERN_MINIMAL",
        label: "Modern & Minimal",
        description:
        "Clean layouts, generous spacing, and a simple professional appearance.",
    },
    {
        value: "BOLD_CREATIVE",
        label: "Bold & Creative",
        description:
        "Strong visual elements, expressive typography, and an energetic appearance.",
    },
    {
        value: "PROFESSIONAL_CORPORATE",
        label: "Professional & Corporate",
        description:
        "Structured, trustworthy, and business-focused design.",
    },
    {
        value: "ELEGANT_LUXURY",
        label: "Elegant & Luxury",
        description:
        "Refined layouts, premium styling, and a sophisticated visual experience.",
    },
    {
        value: "FRIENDLY_PLAYFUL",
        label: "Friendly & Playful",
        description:
        "Warm colors, approachable layouts, and a more engaging personality.",
    },
    {
        value: "DARK_PREMIUM",
        label: "Dark & Premium",
        description:
        "Dark surfaces, strong contrast, and a premium modern appearance.",
    },
    ];

    export default function StepDesignPreferences() {
    const { data, updateField } = useProjectWizard();

    return (
        <div className="space-y-10">
        {/* Design style */}
        <section>
            <div className="mb-5">
            <h3 className="text-lg font-semibold text-text-primary">
                What design style do you prefer?
            </h3>

            <p className="mt-1 text-sm text-text-muted">
                Choose the visual direction that best represents your business.
            </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
            {designOptions.map((option) => {
                const selected = data.designPreference === option.value;

                return (
                <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                    updateField("designPreference", option.value)
                    }
                    className={`rounded-2xl border p-5 text-left transition-all ${
                    selected
                        ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                        : "border-border bg-surface hover:border-accent/50"
                    }`}
                >
                    <div className="flex items-start justify-between gap-4">
                    <div>
                        <h4 className="font-semibold text-text-primary">
                        {option.label}
                        </h4>

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
        </section>

        {/* Colors */}
        <section>
            <div className="mb-5">
            <h3 className="text-lg font-semibold text-text-primary">
                Do you have preferred brand colors?
            </h3>

            <p className="mt-1 text-sm text-text-muted">
                These are optional. Leave them empty if you want us to recommend
                suitable colors.
            </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
            <ColorInput
                label="Primary color"
                value={data.primaryColor}
                onChange={(value) =>
                updateField("primaryColor", value)
                }
            />

            <ColorInput
                label="Secondary color"
                value={data.secondaryColor}
                onChange={(value) =>
                updateField("secondaryColor", value)
                }
            />

            <ColorInput
                label="Accent color"
                value={data.accentColor}
                onChange={(value) =>
                updateField("accentColor", value)
                }
            />
            </div>
        </section>

        {/* Reference website */}
        <section>
            <div className="mb-5">
            <h3 className="text-lg font-semibold text-text-primary">
                Do you have a website you like?
            </h3>

            <p className="mt-1 text-sm text-text-muted">
                Share a website whose design or functionality inspires you.
            </p>
            </div>

            <input
            type="url"
            value={data.referenceWebsiteUrl}
            onChange={(event) =>
                updateField(
                "referenceWebsiteUrl",
                event.target.value
                )
            }
            placeholder="https://example.com"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
            />
        </section>
        </div>
    );
    }

    interface ColorInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    }

    function ColorInput({
    label,
    value,
    onChange,
    }: ColorInputProps) {
    return (
        <div>
        <label className="mb-2 block text-sm font-medium text-text-secondary">
            {label}
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-2">
            <input
            type="color"
            value={value || "#000000"}
            onChange={(event) => onChange(event.target.value)}
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent"
            />

            <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="#000000"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-text-primary outline-none"
            />
        </div>
        </div>
    );
    }