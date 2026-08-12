import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export type WebsiteTypeWithFeatures =
  Prisma.WebsiteTypeGetPayload<{
    include: {
      features: {
        include: {
          feature: true;
        };
      };
    };
  }>;

export async function getWebsiteTypes(): Promise<
  WebsiteTypeWithFeatures[]
> {
  return prisma.websiteType.findMany({
    orderBy: {
      name: "asc",
    },

    include: {
      features: {
        where: {
          isDefault: true,
        },

        include: {
          feature: true,
        },
      },
    },
  });
}