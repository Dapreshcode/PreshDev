import type { ProjectRequestForm } from "@/types/Project-request";
import type { WebsiteTypeWithFeatures } from "@/server/services/website-type.service";
import type { IndustryWithFeatures } from "@/server/services/industry.service";

interface ValidateStepOptions {
  step: number;
  data: ProjectRequestForm;
  websiteTypes: WebsiteTypeWithFeatures[];
  industries: IndustryWithFeatures[];
  defaultValidation: (data: ProjectRequestForm) => boolean;
}

export function validateWizardStep({
  step,
  data,
  websiteTypes,
  industries,
  defaultValidation,
}: ValidateStepOptions): boolean {
  switch (step) {
    case 1: {
      if (!data.websiteTypeId) {
        return false;
      }

      const selectedWebsiteType = websiteTypes.find(
        (type) => type.id === data.websiteTypeId
      );

      if (selectedWebsiteType?.slug === "other") {
        return data.otherWebsiteType.trim().length > 0;
      }

      return true;
    }

    case 2: {
      if (!data.industryId) {
        return false;
      }

      const selectedIndustry = industries.find(
        (industry) => industry.id === data.industryId
      );

      if (selectedIndustry?.slug === "other") {
        return data.otherIndustry.trim().length > 0;
      }

      return true;
    }

            case 3:
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

    default:
      return defaultValidation(data);
  }
}