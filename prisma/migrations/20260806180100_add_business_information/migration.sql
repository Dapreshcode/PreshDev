/*
  Warnings:

  - Added the required column `businessName` to the `ProjectRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectRequest" ADD COLUMN     "businessDescription" TEXT,
ADD COLUMN     "businessName" TEXT NOT NULL,
ADD COLUMN     "businessServices" TEXT[];
