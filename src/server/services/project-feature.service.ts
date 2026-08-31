import { prisma } from "@/lib/prisma";

export async function getWizardFeatures() {
  const [
    defaultFeatures,
    websiteTypeFeatures,
    industryFeatures,
  ] = await Promise.all([
    // Features automatically included in every website package
    prisma.feature.findMany({
      where: {
        isDefault: true,
        isActive: true,
      },
      orderBy: {
        name: "asc",
      },
    }),

    // Website-type-specific additional features
    prisma.websiteTypeFeature.findMany({
      where: {
        feature: {
          isActive: true,
          isDefault: false,
        },
      },
      include: {
        feature: true,
      },
    }),

    // Industry-specific additional features
    prisma.industryFeature.findMany({
      where: {
        feature: {
          isActive: true,
          isDefault: false,
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