import type { WebsiteTypeWithFeatures } from "@/server/services/website-type.service";
import type { IndustryWithFeatures } from "@/server/services/industry.service";
import type { WizardFeatures } from "@/server/services/project-feature.service";

export interface WizardData {
  // Available catalog data
  websiteTypes: WebsiteTypeWithFeatures[];
  industries: IndustryWithFeatures[];
  features: WizardFeatures;

}