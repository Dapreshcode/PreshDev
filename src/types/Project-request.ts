  import { LogoOption } from "@/generated/prisma/enums";

  export interface ProjectRequestForm {
  // Step 1
  websiteTypeId: string;
  otherWebsiteType: string;

  // Step 2
  industryId: string;
  otherIndustry: string;

  // Step 3 — Business information
  clientName: string;
  clientEmail: string;
  clientPhone: string;

  businessName: string;
  businessDescription: string;
  servicesOffered: string[];
  businessRegistrationNumber: string;
  businessAddress: string;
  countryOfOperation: string;

  // Step 4
  projectGoals: string[];
  otherProjectGoal: string;

  // Step 5
  projectName: string;
  description: string;

  // Step 6
  selectedFeatureIds: string[];

  // Step 7
  customFeatures: string[];

  // Step 8
  designStyle: string;
  designPreference: string;

  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  referenceWebsiteUrl: string;

  // Step 9
  logoOption: LogoOption | null;
  additionalRequirements: string;
  files: File[];

  // Step 10
  hasContent: boolean;

  // Step 11
  timeline: string;

  // Step 12
  budget: string;

  // Step 13 / final commercial information
  currency: string;
}