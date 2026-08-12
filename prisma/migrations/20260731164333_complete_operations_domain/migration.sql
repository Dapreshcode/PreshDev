/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `baseAmount` to the `Quotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseCurrency` to the `Quotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayAmount` to the `Quotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayCurrency` to the `Quotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PricingType" AS ENUM ('WEBSITE_TYPE', 'INDUSTRY', 'FEATURE');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('NGN', 'USD', 'EUR', 'GBP', 'CAD', 'AUD');

-- AlterEnum
ALTER TYPE "FeatureCategory" ADD VALUE 'INDUSTRY';

-- AlterTable
ALTER TABLE "Quotation" ADD COLUMN     "baseAmount" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "baseCurrency" "Currency" NOT NULL,
ADD COLUMN     "displayAmount" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "displayCurrency" "Currency" NOT NULL,
ADD COLUMN     "exchangeRate" DECIMAL(12,6),
ADD COLUMN     "exchangeRateDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "projectId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BusinessSettings" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "companyPhone" TEXT,
    "companyAddress" TEXT,
    "websiteUrl" TEXT,
    "logoUrl" TEXT,
    "currency" "Currency" NOT NULL DEFAULT 'NGN',
    "timezone" TEXT NOT NULL DEFAULT 'Africa/Lagos',
    "quotationValidityDays" INTEGER NOT NULL DEFAULT 14,
    "defaultDepositPercentage" DECIMAL(5,2) NOT NULL,
    "maxInstallments" INTEGER NOT NULL DEFAULT 3,
    "taxEnabled" BOOLEAN NOT NULL DEFAULT false,
    "taxPercentage" DECIMAL(5,2),
    "maintenanceMode" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingConfiguration" (
    "id" TEXT NOT NULL,
    "websiteTypeId" TEXT,
    "industryId" TEXT,
    "featureId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pricingType" "PricingType" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PricingConfiguration_websiteTypeId_idx" ON "PricingConfiguration"("websiteTypeId");

-- CreateIndex
CREATE INDEX "PricingConfiguration_industryId_idx" ON "PricingConfiguration"("industryId");

-- CreateIndex
CREATE INDEX "PricingConfiguration_featureId_idx" ON "PricingConfiguration"("featureId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_projectId_key" ON "Task"("projectId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingConfiguration" ADD CONSTRAINT "PricingConfiguration_websiteTypeId_fkey" FOREIGN KEY ("websiteTypeId") REFERENCES "WebsiteType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingConfiguration" ADD CONSTRAINT "PricingConfiguration_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingConfiguration" ADD CONSTRAINT "PricingConfiguration_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE SET NULL ON UPDATE CASCADE;
