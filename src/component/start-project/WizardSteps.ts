            import StepWebsiteType from "./steps/StepWebsiteType";
            import StepIndustry from "./steps/StepIndustry";
            import StepProjectGoals from "./steps/StepProjectGoals";



            import type { ProjectRequestForm } from "@/types/Project-request";
          import type { WizardData } from "./wizardTypes";
        import StepBusinessInfo from "./steps/StepBusineesInfo";
        import StepProjectDetails from "./steps/StepProjectDetails.tsx";
        import StepFeatures from "./steps/StepFeatures";
        import StepProjectTimeline from "./steps/StepTimeLine";
        import StepDesignPreferences from "./steps/StepDesignpreference";
      import StepAdditionalRequirements from "./steps/StepAdditionalRequirements";
    import StepProjectFiles from "./steps/StepProjectFiles";
  import StepProjectReview from "./steps/StepProjectReview";
  


            export interface WizardStepDefinition {
            title: string;
            description: string;

            autoAdvance: boolean;
            

            isValid: (data: ProjectRequestForm) => boolean;

            component: React.ComponentType<{
            wizardData: WizardData;
            }>;
            }

             const StepSubmitPlaceholder = () => null;

            export const WIZARD_STEPS: Record<number, WizardStepDefinition> = {
               

            1: {
                title: "What would you like us to build?",
                description:
                "Choose the option that best describes your project.",

                component: StepWebsiteType,

                autoAdvance: true,

                isValid: (data) => !!data.websiteTypeId,
            },

            2: {
                title: "What industry are you in?",

                description:
                "This helps us recommend features tailored to your business.",

                component: StepIndustry,

                autoAdvance: true,

                isValid: (data) => !!data.industryId,
            },

            3: {
                title: "What are your project goals?",

                description:
                "Select one or more goals you want your project to achieve.",

                component: StepProjectGoals,

                autoAdvance: false,

              isValid: (data) => {
                    if (data.projectGoals.length === 0) {
                      return false;
                    }

                    if (
                      data.projectGoals.includes("Other") &&
                      !data.otherProjectGoal.trim()
                    ) {
                      return false;
                    }

                    return true;
  },
            },

            4:{
                title: "Tell us about your business",
                description:
                  "Provide some information about your business and how we can reach you.",

                component: StepBusinessInfo,

                autoAdvance: false,

                isValid: (data) =>
                  data.clientName.trim().length > 0 &&
                  data.clientEmail.trim().length > 0 &&
                  data.clientPhone.trim().length > 0 &&
                  data.businessName.trim().length > 0 &&
                  data.countryOfOperation.trim().length > 0 &&
                  data.servicesOffered.length > 0,
              },

        5: {
          title: "Tell us about your project",
          description:
            "Give us a little more detail about what you want us to build.",

          component: StepProjectDetails,

          autoAdvance: false,

          isValid: (data) =>
            data.projectName.trim().length > 0 &&
            data.description.trim().length > 0,
        },

        6: {
            title: "What features do you need?",
            description: "...",
            component: StepFeatures,
            autoAdvance: false,
            isValid: (data) =>
              data.selectedFeatureIds.length > 0 ||
              data.customFeatures.length > 0,
              
          },
        7: {
          title: "When would you like the project completed?",
          description:
            "Choose the timeline that best matches your expectations.",
          component: StepProjectTimeline,
          autoAdvance: true,
          isValid: (data) => Boolean(data.timeline),
          
        },

        8: {
          title: "How would you like your website to look?",
          description:
            "Tell us about your preferred visual style, colors, and design inspiration.",
          component: StepDesignPreferences,
          autoAdvance: false,
          isValid: () => true,
        
        },

        9: {
        title: "Anything else we should know?",
        description:
          "Tell us about your logo and any additional requirements for the project.",
        component: StepAdditionalRequirements,
        autoAdvance: false,
        isValid: (data) => Boolean(data.logoOption),
      
      },
      
      10: {
      title: "Do you have any files or references?",
      description:
        "Share your logo, images, documents, screenshots, or other materials that may help us build your project.",
      component: StepProjectFiles,
      autoAdvance: false,
      isValid: () => true,
    
    },

    11: {
    title: "Review your project",
    description:
      "Take a moment to review your project details before submitting your request.",
    component: StepProjectReview,
    isValid: () => true,
    autoAdvance: false,
  },
        12: {
  title: "Submit your project",
  description:
    "Review your project details and submit your request.",
  component: StepSubmitPlaceholder,
  autoAdvance: false,
  isValid: () => true,
},    
            };

          