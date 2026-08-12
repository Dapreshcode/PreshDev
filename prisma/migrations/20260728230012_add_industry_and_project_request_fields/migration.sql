/*
  Warnings:

  - You are about to drop the column `customFeatureRequest` on the `ProjectRequest` table. All the data in the column will be lost.
  - You are about to drop the column `referenceWebsite` on the `ProjectRequest` table. All the data in the column will be lost.
  - The `timeline` column on the `ProjectRequest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProjectTimeline" AS ENUM ('ONE_TO_SEVEN_DAYS', 'ONE_TO_THREE_WEEKS', 'THREE_TO_SIX_WEEKS', 'MORE_THAN_SIX_WEEKS', 'FLEXIBLE');

-- AlterTable
ALTER TABLE "ProjectRequest" DROP COLUMN "customFeatureRequest",
DROP COLUMN "referenceWebsite",
ADD COLUMN     "industryId" TEXT,
ADD COLUMN     "referenceWebsiteUrl" TEXT,
DROP COLUMN "timeline",
ADD COLUMN     "timeline" "ProjectTimeline";

-- CreateTable
CREATE TABLE "Industry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryFeature" (
    "id" TEXT NOT NULL,
    "industryId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "IndustryFeature_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Industry_slug_key" ON "Industry"("slug");

-- CreateIndex
CREATE INDEX "IndustryFeature_featureId_idx" ON "IndustryFeature"("featureId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryFeature_industryId_featureId_key" ON "IndustryFeature"("industryId", "featureId");

-- CreateIndex
CREATE INDEX "ProjectRequest_industryId_idx" ON "ProjectRequest"("industryId");

-- AddForeignKey
ALTER TABLE "IndustryFeature" ADD CONSTRAINT "IndustryFeature_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryFeature" ADD CONSTRAINT "IndustryFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequest" ADD CONSTRAINT "ProjectRequest_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
