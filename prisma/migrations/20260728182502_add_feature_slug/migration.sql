/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Feature_slug_key" ON "Feature"("slug");
