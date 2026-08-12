import ProjectWizard from "@/component/start-project/ProjectWizard";
import { fetchWebsiteTypes } from "@/server/actions/website-type.actions";
import { getWizardFeatures } from "@/server/services/project-feature.service";
import { ProjectWizardProvider } from "@/context/projectWizardContext";
import { getIndustries } from "@/server/actions/industry.actions";


export default async function StartProjectPage() {
  const [websiteTypes, industries, features] =
    await Promise.all([
      fetchWebsiteTypes(),
      getIndustries(),
      getWizardFeatures(),
    ]);
  return (
    <ProjectWizardProvider>
      <ProjectWizard
      websiteTypes={websiteTypes}
      industries={industries}
      features={features}
    
/>
    </ProjectWizardProvider>
  );
}