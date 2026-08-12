"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { ProjectRequestForm } from "@/types/Project-request";

const TOTAL_STEPS = 12;

const initialData: ProjectRequestForm = {
  websiteTypeId: "",
  industryId: "",
  otherIndustry: "",
  otherWebsiteType: "",
  
  
  businessName: "",
  businessDescription: "",
  servicesOffered: [],

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

interface ProjectWizardContextType {
  currentStep: number;
  totalSteps: number;

  data: ProjectRequestForm;

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

 const nextStep = () => {
  setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
};

const previousStep = () => {
  setCurrentStep((prev) => Math.max(prev - 1, 1));
};

const goToStep = (step: number) => {
  setCurrentStep(step);
};
  function updateField<K extends keyof ProjectRequestForm>(
    field: K,
    value: ProjectRequestForm[K]
  ) {
    setData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function updateFields(values: Partial<ProjectRequestForm>) {
    setData((previous) => ({
      ...previous,
      ...values,
    }));
  }
//project goals
  const toggleProjectGoal = (goal: string) => {
  const exists = data.projectGoals.includes(goal);

  updateField(
    "projectGoals",
    exists
      ? data.projectGoals.filter((g) => g !== goal)
      : [...data.projectGoals, goal]
  );
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
    }),
    [currentStep, data]
  );

  return (
    <ProjectWizardContext.Provider value={value}>
      {children}
    </ProjectWizardContext.Provider>
  );
}

export function useProjectWizard() {
  const context = useContext(ProjectWizardContext);

  if (!context) {
    throw new Error(
      "useProjectWizard must be used inside ProjectWizardProvider"
    );
  }

  return context;
}