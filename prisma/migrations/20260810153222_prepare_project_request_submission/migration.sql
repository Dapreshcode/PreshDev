/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ProjectRequest" ADD COLUMN     "otherIndustry" TEXT,
ADD COLUMN     "otherWebsiteType" TEXT,
ADD COLUMN     "projectGoals" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
