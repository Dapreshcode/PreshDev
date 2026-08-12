              "use client";

              import { useEffect, useState } from "react";
              import { WebsiteTypeWithFeatures } from "@/server/services/website-type.service";
              import {type IndustryWithFeatures,} from "@/server/services/industry.service";
              import WizardLayout from "./layout/WizardLayout";
              import { useProjectWizard } from "@/hooks/useProjectWizard";
              import { WIZARD_STEPS } from "./WizardSteps";

               import { WizardFeatures } from "@/server/services/project-feature.service";
               import { validateWizardStep } from "./wizardValidation";




              interface ProjectWizardProps {
          websiteTypes: WebsiteTypeWithFeatures[];
          industries: IndustryWithFeatures[];
          features: WizardFeatures;
              }
         
       

            

              export default function ProjectWizard({ websiteTypes, industries, features,  }: ProjectWizardProps) {
                const { currentStep, totalSteps, nextStep, previousStep, data: projectData } =
                useProjectWizard();

                const currentConfig = WIZARD_STEPS[currentStep];

              if (!currentConfig) {
                  throw new Error(`Step ${currentStep} is not registered.`);
              }
                const StepComponent = currentConfig.component;

              const wizardData = {
              websiteTypes,
              industries,
              features,
              data: projectData,
            };

              //validation for the current step
              const nextDisabled = !validateWizardStep({
                step: currentStep,
                data: projectData,
                websiteTypes,
                industries,
                defaultValidation: currentConfig.isValid,
              });

                // step 1 is the "base" screen, always mounted underneath
                const isOverlayOpen = currentStep >= 2;

                // mount/animate the overlay
                const [mounted, setMounted] = useState(isOverlayOpen);
                const [visible, setVisible] = useState(false);

                useEffect(() => {
                  if (isOverlayOpen) {
                    setMounted(true);
                    const raf = requestAnimationFrame(() => setVisible(true));
                    return () => cancelAnimationFrame(raf);
                  } else {
                    setVisible(false);
                    const timeout = setTimeout(() => setMounted(false), 250);
                    return () => clearTimeout(timeout);
                  }
                }, [isOverlayOpen]);

                useEffect(() => {
                  document.body.style.overflow = mounted ? "hidden" : "";
                  return () => {
                    document.body.style.overflow = "";
                  };
                }, [mounted]);

                
            const wizard = (
              <WizardLayout
                title={currentConfig.title}
                description={currentConfig.description}
                currentStep={currentStep}
                totalSteps={totalSteps}
                canGoBack={currentStep > 1}
                onBack={previousStep}
                onNext={nextStep}
              nextDisabled={nextDisabled}
              >
                <StepComponent wizardData={wizardData} />
              </WizardLayout>
            );
                
                return (
                  <>
                    {currentStep === 1 && wizard}

                    {mounted && (
                      <div
                        className={`fixed inset-0 z-40 overflow-y-auto bg-background transition-all duration-300 ease-out
                          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                        `}
                      >
                        {/*
                          Offset so content starts below the sticky/fixed navbar instead of
                          underneath it. Match this to your navbar's actual height —
                          swap pt-[88px] for whatever your navbar component uses.
                        */}
                          <div className="pt-[88px]">
                                {wizard}
                            </div>
                      </div>
                    )}
                  </>
                );
              }