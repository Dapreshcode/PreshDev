  "use client";

  import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
  } from "react";

  import { ProjectRequestForm } from "@/types/Project-request";
  import { Value } from "@prisma/client/runtime/client";

  const TOTAL_STEPS = 12;

  const STORAGE_KEY = "preshdev_project_wizard";

  const initialData: ProjectRequestForm = {
    websiteTypeId: "",
    industryId: "",
    otherIndustry: "",
    otherWebsiteType: "",

    clientName: "",
    clientEmail: "",
    clientPhone: "",

    businessName: "",
    businessDescription: "",
    servicesOffered: [],
    businessRegistrationNumber: "",
    businessAddress: "",
    countryOfOperation: "",

    projectGoals: [],
    otherProjectGoal: "",

    projectName: "",
    description: "",
    referenceWebsiteUrl: "",

    selectedFeatureIds: [],
    customFeatures: [],

    designStyle: "",
    designPreference: "",

    primaryColor: "",
    secondaryColor: "",
    accentColor: "",

    logoOption: null,
    additionalRequirements: "",
    files: [],

    hasContent: false,

    timeline: "",

    budget: "",

    currency: "",
  };

  type PersistedWizardData = Omit<ProjectRequestForm, "files">;

  interface StoredWizardState {
    currentStep: number;
    data: PersistedWizardData;
  }






  interface ProjectWizardContextType {
    currentStep: number;
    totalSteps: number;

    data: ProjectRequestForm;

    resetWizard: () => void;

    nextStep: () => void;
    previousStep: () => void;
    goToStep: (step: number) => void;

    updateField: <K extends keyof ProjectRequestForm>(
      field: K,
      value: ProjectRequestForm[K],
    ) => void;

    updateFields: (values: Partial<ProjectRequestForm>) => void;

    toggleProjectGoal: (goal: string) => void;
  }

  const ProjectWizardContext =
    createContext<ProjectWizardContextType | null>(null);

  interface ProviderProps {
    children: ReactNode;
  }


  



  export function ProjectWizardProvider({
    children,
  }: ProviderProps) {
    const [currentStep, setCurrentStep] = useState(1);

    const [data, setData] =
      useState<ProjectRequestForm>(initialData);

    
      

    /*
    * Prevents us from saving the initial empty state
    * before localStorage has been restored.
    */
    const [hydrated, setHydrated] = useState(false);

    /*
    * Restore the wizard after the component mounts.
    */
    useEffect(() => {
      
      try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (stored) {
          const parsed: StoredWizardState = JSON.parse(stored);

          if (
            parsed &&
            typeof parsed === "object" &&
            typeof parsed.currentStep === "number" &&
            parsed.data
          ) {
            setCurrentStep(
              Math.min(
                Math.max(parsed.currentStep, 1),
                TOTAL_STEPS,
              ),
            );

            setData({
              ...initialData,
              ...parsed.data,
              /*
              * Files cannot be restored from localStorage.
              */
              files: [],
            });
          }
        }
      } catch (error) {
        console.error(
          "Failed to restore project wizard:",
          error,
        );
      } finally {
        setHydrated(true);
      }
    }, []);

    /*
    * Persist wizard state whenever the step or form data changes.
    */
    
  useEffect(() => {
    
    if (!hydrated) return;

    try {
      const { files, ...persistedData } = data;

      const stateToStore: StoredWizardState = {
        currentStep,
        data: persistedData,
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(stateToStore),
      );
    } catch (error) {
      console.error(
        "Failed to save project wizard:",
        error,
      );
    }
  }, [data, currentStep, hydrated]);

    const nextStep = () => {
      setCurrentStep((prev) =>
        Math.min(prev + 1, TOTAL_STEPS),
      );
    };

    const previousStep = () => {
      setCurrentStep((prev) =>
        Math.max(prev - 1, 1),
      );
    };

    const goToStep = (step: number) => {
      setCurrentStep(
        Math.min(
          Math.max(step, 1),
          TOTAL_STEPS,
        ),
      );
    };

    function updateField<K extends keyof ProjectRequestForm>(
      field: K,
      value: ProjectRequestForm[K],
    ) {
      setData((previous) => ({
        ...previous,
        [field]: value,
      }));
    }

    function updateFields(
      values: Partial<ProjectRequestForm>,
    ) {
      setData((previous) => ({
        ...previous,
        ...values,
      }));
    }

    const toggleProjectGoal = (goal: string) => {
      setData((previous) => {
        const exists =
          previous.projectGoals.includes(goal);

        return {
          ...previous,
          projectGoals: exists
            ? previous.projectGoals.filter(
                (g) => g !== goal,
              )
            : [
                ...previous.projectGoals,
                goal,
              ],
        };
      });
    };

    //reset after submission to step 1
  const resetWizard = () => {
    localStorage.removeItem(STORAGE_KEY);

    setData({ ...initialData });
    setCurrentStep(1);
  };

    const value = useMemo(
      () => ({
        currentStep,
        totalSteps: TOTAL_STEPS,

        data,

        nextStep,
        previousStep,
        goToStep,

        updateField,
        updateFields,

        toggleProjectGoal,
        resetWizard,
      }),
      [currentStep, data],
    );

    return (
      <ProjectWizardContext.Provider value={value}>
        {children}
      </ProjectWizardContext.Provider>
    );
  }

  export function useProjectWizard() {
    const context = useContext(
      ProjectWizardContext,
    );

    if (!context) {
      throw new Error(
        "useProjectWizard must be used inside ProjectWizardProvider",
      );
    }

    return context;
  }