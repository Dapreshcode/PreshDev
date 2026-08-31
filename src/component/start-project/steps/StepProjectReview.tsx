                        "use client";

                        import { FileText, Pencil, Check } from "lucide-react";

                        import { useProjectWizard } from "@/hooks/useProjectWizard";
                        import type { WizardData } from "../wizardTypes";

                        interface StepProjectReviewProps {
                        wizardData: WizardData;
                        }

                        export function getDisplayValue(
                        selectedItem: { name: string; slug: string } | undefined,
                        customValue: string
                        ) {
                        if (!selectedItem) return "";

                        if (selectedItem.slug === "other") {
                        return customValue;
                        }

                        return selectedItem.name;
                        }


                    
                        export default function StepProjectReview({
                        wizardData,
                        }: StepProjectReviewProps) {
                        const { data } = useProjectWizard();
                        
                        const selectedWebsiteType = wizardData.websiteTypes.find(
                            (type) => type.id === data.websiteTypeId
                            );

                            const selectedIndustry = wizardData.industries.find(
                            (industry) => industry.id === data.industryId
                            );

                            const websiteTypeDisplay = getDisplayValue(
                            selectedWebsiteType,
                            data.otherWebsiteType
                            );

                            const industryDisplay = getDisplayValue(
                            selectedIndustry,
                            data.otherIndustry
                            );
                
                    //adds other goals to the review
                    const resolvedProjectGoals = data.projectGoals
                        .filter((goal) => goal !== "Other")
                        .concat(
                            data.projectGoals.includes("Other") &&
                            data.otherProjectGoal.trim()
                            ? [data.otherProjectGoal.trim()]
                            : []
                        );



                    // Default features included with every website package
    const defaultFeatures = wizardData.features.defaultFeatures;

    // Features specifically selected by the client
    const selectedFeatures = wizardData.features.websiteTypeFeatures
    .filter(
        (item) => item.websiteTypeId === data.websiteTypeId
    )
    .map((item) => item.feature)
    .filter((feature) =>
        data.selectedFeatureIds.includes(feature.id)
    );

    // Industry-specific selected features
    const selectedIndustryFeatures = wizardData.features.industryFeatures
    .filter(
        (item) => item.industryId === data.industryId
    )
    .map((item) => item.feature)
    .filter((feature) =>
        data.selectedFeatureIds.includes(feature.id)
    );

    // Combine selected website + industry features
    // while preventing duplicates
    const selectedAdditionalFeatures = Array.from(
    new Map(
        [...selectedFeatures, ...selectedIndustryFeatures].map(
        (feature) => [feature.id, feature]
        )
    ).values()
    );


                        

                        

                        return (
                            <div className="space-y-6">
                            {/* Intro */}
                            <div className="rounded-2xl border border-border bg-surface p-6">
                                <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <Check size={20} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-text-primary">
                                    Almost there
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-text-muted">
                                    Review the information below before submitting your
                                    project request.
                                    </p>
                                </div>
                                </div>
                            </div>
                            
                            {/** client information */}   
                            <ReviewSection title="Client Details">
                            <ReviewRow label="Client Name"
                            value={data.clientName}/> 

                            <ReviewRow label="Client Phone"
                            value={data.clientPhone}/>

                            <ReviewRow label="Client Email"
                            value={data.clientEmail}/>

                            
                            </ReviewSection>
                                

                            {/* Project */}
                            <ReviewSection title="Project">
                                <section>
                                

                                <ReviewRow
                                label="project Name"
                                value={data.projectName}
                                />

                                <ReviewRow
                                label="Project Description"
                                value={data.description}
                                />
                                
                                </section>
                                <ReviewRow
                                label="Website type"
                                value={websiteTypeDisplay}
                                />

                                

                                <ReviewRow
                                label="Industry"
                                value={industryDisplay}
                                />
                            

                            <ReviewRow
                                    label="Project goals"
                                    value={
                                        resolvedProjectGoals.length > 0
                                        ? resolvedProjectGoals.join(", ")
                                        : "Not specified"
                                    }
                                    />
                                
                            </ReviewSection>

                            {/* Business */}
                            <ReviewSection title="Business information">
                                <ReviewRow
                                label="Business name"
                                value={data.businessName || "Not provided"}
                                />

                                <ReviewRow
                                label="Country Registration Number"
                                value={data.businessRegistrationNumber || "Not provided"}
                                />

                                <ReviewRow
                                label="Country Of Operation"
                                value={data.countryOfOperation || "Not provided"}
                                />

                                <ReviewRow
                                label="Business Address"
                                value={data.businessAddress || "Not provided"}
                                />

                                <ReviewRow
                                label="Business description"
                                value={
                                    data.businessDescription || "Not provided"
                                }
                                />

                                <ReviewRow
                                label="Services"
                                value={
                                    data.servicesOffered.length > 0
                                    ? data.servicesOffered.join(", ")
                                    : "Not provided"
                                }
                                />
                            </ReviewSection>

                            {/* Features */}
                            {/* Features */}
    <ReviewSection title="Features">
    {/* Default features */}
    <div>
        <div className="mb-3">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Included with your website
        </p>

        <p className="mt-1 text-sm text-text-muted">
            These are standard features included in your website package.
        </p>
        </div>

        {defaultFeatures.length > 0 ? (
        <div className="flex flex-wrap gap-2">
            {defaultFeatures.map((feature) => (
            <span
                key={feature.id}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-text-primary"
            >
                {feature.name}
            </span>
            ))}
        </div>
        ) : (
        <p className="text-sm text-text-muted">
            No default features specified.
        </p>
        )}
    </div>

    {/* Selected additional features */}
    <div className="mt-6">
        <div className="mb-3">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Additional features
        </p>

        <p className="mt-1 text-sm text-text-muted">
            Features you specifically selected for this project.
        </p>
        </div>

        {selectedAdditionalFeatures.length > 0 ? (
        <div className="flex flex-wrap gap-2">
            {selectedAdditionalFeatures.map((feature) => (
            <span
                key={feature.id}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-text-primary"
            >
                {feature.name}
            </span>
            ))}
        </div>
        ) : (
        <p className="text-sm text-text-muted">
            No additional features selected.
        </p>
        )}
    </div>

    {/* Custom features */}
    <div className="mt-6">
        <div className="mb-3">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Custom features
        </p>

        <p className="mt-1 text-sm text-text-muted">
            Additional functionality you requested that isn't part of the
            predefined options.
        </p>
        </div>

        {data.customFeatures.length > 0 ? (
        <div className="flex flex-wrap gap-2">
            {data.customFeatures.map((feature) => (
            <span
                key={feature}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-text-primary"
            >
                {feature}
            </span>
            ))}
        </div>
        ) : (
        <p className="text-sm text-text-muted">
            No custom features requested.
        </p>
        )}
    </div>
    </ReviewSection>

                            {/* Timeline */}
                            <ReviewSection title="Timeline">
                                <ReviewRow
                                label="Expected timeline"
                                value={formatTimeline(data.timeline)}
                                />
                            </ReviewSection>

                            {/* Design */}
                            <ReviewSection title="Design preferences">
                                <ReviewRow
                                label="Design style"
                                value={
                                    formatDesignPreference(data.designPreference)
                                }
                                />

                                <ReviewRow
                                label="Primary color"
                                value={data.primaryColor || "Not specified"}
                                />

                                <ReviewRow
                                label="Secondary color"
                                value={data.secondaryColor || "Not specified"}
                                />

                                <ReviewRow
                                label="Accent color"
                                value={data.accentColor || "Not specified"}
                                />

                                <ReviewRow
                                label="Reference website"
                                value={
                                    data.referenceWebsiteUrl || "None provided"
                                }
                                />
                            </ReviewSection>

                            {/* Additional requirements */}
                            <ReviewSection title="Additional requirements">
                                <ReviewRow
                                label="Logo"
                                value={formatLogoOption(data.logoOption)}
                                />

                                <div>
                                <p className="mb-2 text-sm font-medium text-text-secondary">
                                    Additional notes
                                </p>

                                <p className="whitespace-pre-wrap text-sm leading-6 text-text-muted">
                                    {data.additionalRequirements ||
                                    "No additional requirements provided."}
                                </p>
                                </div>
                            </ReviewSection>

                            {/* Files */}
                            <ReviewSection title="Files and references">
                                {data.files.length > 0 ? (
                                <div className="space-y-2">
                                    {data.files.map((file, index) => (
                                    <div
                                        key={`${file.name}-${index}`}
                                        className="flex items-center gap-3 rounded-xl border border-border p-3"
                                    >
                                        <FileText
                                        size={18}
                                        className="shrink-0 text-accent"
                                        />

                                        <span className="truncate text-sm text-text-primary">
                                        {file.name}
                                        </span>
                                    </div>
                                    ))}
                                </div>
                                ) : (
                                <p className="text-sm text-text-muted">
                                    No files uploaded.
                                </p>
                                )}
                            </ReviewSection>

                            {/* Final notice */}
                            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
                                <p className="text-sm leading-6 text-text-muted">
                                Everything look good? Continue to submit your project
                                request. You can still go back and make changes before
                                submission.
                                </p>
                            </div>
                            </div>
                        );
                        }

                        /* -------------------------------------------------------------------------- */
                        /* Reusable review components                                                 */
                        /* -------------------------------------------------------------------------- */

                        interface ReviewSectionProps {
                        title: string;
                        children: React.ReactNode;
                        }

                        function ReviewSection({
                        title,
                        children,
                        }: ReviewSectionProps) {
                        return (
                            <section className="rounded-2xl border border-border bg-surface p-6">
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-text-primary">
                                {title}
                                </h3>

                                <Pencil
                                size={16}
                                className="text-text-muted"
                                />
                            </div>

                            <div className="space-y-4">
                                {children}
                            </div>
                            </section>
                        );
                        }

                        interface ReviewRowProps {
                        label: string;
                        value: string;
                        }

                        function ReviewRow({
                        label,
                        value,
                        }: ReviewRowProps) {
                        return (
                            <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                                {label}
                            </p>

                            <p className="mt-1 text-sm leading-6 text-text-primary">
                                {value}
                            </p>
                            </div>
                        );
                        }

                        /* -------------------------------------------------------------------------- */
                        /* Formatting helpers                                                         */
                        /* -------------------------------------------------------------------------- */

                        function formatTimeline(
                        timeline: string | null
                        ) {
                        switch (timeline) {
                            case "ONE_TO_SEVEN_DAYS":
                            return "1–7 days";

                            case "ONE_TO_THREE_WEEKS":
                            return "1–3 weeks";

                            case "THREE_TO_SIX_WEEKS":
                            return "3–6 weeks";

                            case "MORE_THAN_SIX_WEEKS":
                            return "More than 6 weeks";

                            case "FLEXIBLE":
                            return "I'm flexible";

                            default:
                            return "Not specified";
                        }
                        }

                        function formatDesignPreference(
                        preference: string
                        ) {
                        switch (preference) {
                            case "MODERN_MINIMAL":
                            return "Modern & Minimal";

                            case "BOLD_CREATIVE":
                            return "Bold & Creative";

                            case "PROFESSIONAL_CORPORATE":
                            return "Professional & Corporate";

                            case "ELEGANT_LUXURY":
                            return "Elegant & Luxury";

                            case "FRIENDLY_PLAYFUL":
                            return "Friendly & Playful";

                            case "DARK_PREMIUM":
                            return "Dark & Premium";

                            default:
                            return "Not specified";
                        }
                        }

                        function formatLogoOption(
                        option: string | null
                        ) {
                        switch (option) {
                            case "HAVE_LOGO":
                            return "Client already has a logo";

                            case "NEED_LOGO":
                            return "Presh Dev should create a logo";

                            case "NO_LOGO":
                            return "No logo required";

                            default:
                            return "Not specified";
                        }
                        }