import { prisma } from "@/lib/prisma";

export async function getWizardFeatures() {
  const [defaultFeatures, websiteTypeFeatures, industryFeatures] =
    await Promise.all([
      prisma.feature.findMany({
        where: {
          isDefault: true,
          isActive: true,
        },
        orderBy: {
          name: "asc",
        },
      }),

      prisma.websiteTypeFeature.findMany({
        where: {
          feature: {
            isActive: true,
          },
        },
        include: {
          feature: true,
        },
      }),

      prisma.industryFeature.findMany({
        where: {
          feature: {
            isActive: true,
          },
        },
        include: {
          feature: true,
        },
      }),
    ]);

  return {
    defaultFeatures,
    websiteTypeFeatures,
    industryFeatures,
  };
}

export type WizardFeatures = Awaited<
  ReturnType<typeof getWizardFeatures>
>;