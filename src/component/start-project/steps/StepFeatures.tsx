  "use client";

  import { useState } from "react";
  import { Plus, X, Check } from "lucide-react";

  import { useProjectWizard } from "@/hooks/useProjectWizard";
  import type { WizardData } from "../wizardTypes";


  interface StepFeaturesProps {
    wizardData: WizardData;
  }

  export default function StepFeatures({
    wizardData,
  }: StepFeaturesProps) {


    const { features } = wizardData;
    
    const { data, updateField } = useProjectWizard();

    const [customFeatureInput, setCustomFeatureInput] = useState("");

    const applicableWebsiteTypeFeatures =
    features.websiteTypeFeatures.filter(
      (item) =>
        item.websiteTypeId === data.websiteTypeId
    );

  const applicableIndustryFeatures =
    features.industryFeatures.filter(
      (item) =>
        item.industryId === data.industryId
    );

    const featureMap = new Map<
    string,
    typeof features.defaultFeatures[number]
  >();

  for (const feature of features.defaultFeatures) {
    featureMap.set(feature.id, feature);
  }

  for (const item of applicableWebsiteTypeFeatures) {
    featureMap.set(item.feature.id, item.feature);
  }

  for (const item of applicableIndustryFeatures) {
    featureMap.set(item.feature.id, item.feature);
  }


  const availableFeatures = Array.from(
    featureMap.values()
  ).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

    

    const toggleFeature = (featureId: string) => {
      const alreadySelected =
        data.selectedFeatureIds.includes(featureId);

      if (alreadySelected) {
        updateField(
          "selectedFeatureIds",
          data.selectedFeatureIds.filter(
            (id) => id !== featureId
          )
        );
      } else {
        updateField("selectedFeatureIds", [
          ...data.selectedFeatureIds,
          featureId,
        ]);
      }
    };

    const addCustomFeature = () => {
      const feature = customFeatureInput.trim();

      if (!feature) return;

      if (data.customFeatures.includes(feature)) {
        setCustomFeatureInput("");
        return;
      }

      updateField("customFeatures", [
        ...data.customFeatures,
        feature,
      ]);

      setCustomFeatureInput("");
    };

    const removeCustomFeature = (feature: string) => {
      updateField(
        "customFeatures",
        data.customFeatures.filter(
          (item) => item !== feature
        )
      );
    };

    const handleCustomFeatureKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCustomFeature();
      }
    };

    return (
      <div className="space-y-10">
        {/* Recommended Features */}

        <section>
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-text-primary">
              Recommended features
            </h3>

            <p className="mt-1 text-sm text-text-muted">
              Select the features you would like included in your
              website.
            </p>
          </div>

        {availableFeatures.length === 0 ? (
    <p className="text-sm text-text-muted">
      No predefined features are available for this project yet.
    </p>
  ) : (
    <div className="grid gap-4 md:grid-cols-2">
      {availableFeatures.map((feature) => {
        const selected =
          data.selectedFeatureIds.includes(feature.id);

        return (
          <button
            key={feature.id}
            type="button"
            onClick={() => toggleFeature(feature.id)}
            className={`rounded-2xl border p-5 text-left transition-all ${
              selected
                ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                : "border-border bg-surface hover:border-accent/50"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-medium text-text-primary">
                  {feature.name}
                </h4>

                {feature.description && (
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {feature.description}
                  </p>
                )}
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
  )}
        </section>

        {/* Custom Features */}

        <section>
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-text-primary">
              Need something else?
            </h3>

            <p className="mt-1 text-sm text-text-muted">
              Add any custom functionality that isn't listed
              above.
            </p>
          </div>

          {/* Custom feature tags */}

          {data.customFeatures.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {data.customFeatures.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-text-primary"
                >
                  {feature}

                  <button
                    type="button"
                    onClick={() =>
                      removeCustomFeature(feature)
                    }
                    aria-label={`Remove ${feature}`}
                    className="text-text-muted hover:text-text-primary"
                  >
                    <X size={15} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <input
              type="text"
              value={customFeatureInput}
              onChange={(event) =>
                setCustomFeatureInput(event.target.value)
              }
              onKeyDown={handleCustomFeatureKeyDown}
              placeholder="e.g. Appointment booking"
              className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
            />

            <button
              type="button"
              onClick={addCustomFeature}
              disabled={!customFeatureInput.trim()}
              className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-text-primary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus size={16} />
              Add
            </button>
          </div>
        </section>
      </div>
    );
  }