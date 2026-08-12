import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";

export type IndustryWithFeatures =
  Prisma.IndustryGetPayload<{}>;

export async function getIndustries(): Promise<IndustryWithFeatures[]> {
  return prisma.industry.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}