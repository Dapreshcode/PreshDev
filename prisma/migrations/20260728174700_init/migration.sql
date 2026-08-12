-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'RESPONDED', 'CLOSED');

-- CreateEnum
CREATE TYPE "ProjectRequestStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'QUOTE_PENDING', 'QUOTED', 'ACCEPTED', 'REJECTED', 'CONVERTED');

-- CreateEnum
CREATE TYPE "FeatureCategory" AS ENUM ('DEFAULT', 'WEBSITE', 'ECOMMERCE', 'BLOG', 'PORTFOLIO', 'REAL_ESTATE', 'SOFTWARE', 'CUSTOM');

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebsiteType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "FeatureCategory" NOT NULL,
    "price" DECIMAL(65,30),
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteTypeFeature" (
    "id" TEXT NOT NULL,
    "websiteTypeId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WebsiteTypeFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRequest" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "websiteTypeId" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT,
    "timeline" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "accentColor" TEXT,
    "designPreference" TEXT,
    "referenceWebsite" TEXT,
    "customFeatureRequest" TEXT,
    "additionalRequirements" TEXT,
    "status" "ProjectRequestStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRequestFeature" (
    "id" TEXT NOT NULL,
    "projectRequestId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,

    CONSTRAINT "ProjectRequestFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomFeature" (
    "id" TEXT NOT NULL,
    "projectRequestId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRequestFile" (
    "id" TEXT NOT NULL,
    "projectRequestId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT,
    "fileSize" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectRequestFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Enquiry_clientId_idx" ON "Enquiry"("clientId");

-- CreateIndex
CREATE INDEX "Enquiry_status_idx" ON "Enquiry"("status");

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteType_slug_key" ON "WebsiteType"("slug");

-- CreateIndex
CREATE INDEX "WebsiteTypeFeature_featureId_idx" ON "WebsiteTypeFeature"("featureId");

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteTypeFeature_websiteTypeId_featureId_key" ON "WebsiteTypeFeature"("websiteTypeId", "featureId");

-- CreateIndex
CREATE INDEX "ProjectRequest_clientId_idx" ON "ProjectRequest"("clientId");

-- CreateIndex
CREATE INDEX "ProjectRequest_websiteTypeId_idx" ON "ProjectRequest"("websiteTypeId");

-- CreateIndex
CREATE INDEX "ProjectRequest_status_idx" ON "ProjectRequest"("status");

-- CreateIndex
CREATE INDEX "ProjectRequestFeature_featureId_idx" ON "ProjectRequestFeature"("featureId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectRequestFeature_projectRequestId_featureId_key" ON "ProjectRequestFeature"("projectRequestId", "featureId");

-- CreateIndex
CREATE INDEX "CustomFeature_projectRequestId_idx" ON "CustomFeature"("projectRequestId");

-- CreateIndex
CREATE INDEX "ProjectRequestFile_projectRequestId_idx" ON "ProjectRequestFile"("projectRequestId");

-- AddForeignKey
ALTER TABLE "Enquiry" ADD CONSTRAINT "Enquiry_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTypeFeature" ADD CONSTRAINT "WebsiteTypeFeature_websiteTypeId_fkey" FOREIGN KEY ("websiteTypeId") REFERENCES "WebsiteType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTypeFeature" ADD CONSTRAINT "WebsiteTypeFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequest" ADD CONSTRAINT "ProjectRequest_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequest" ADD CONSTRAINT "ProjectRequest_websiteTypeId_fkey" FOREIGN KEY ("websiteTypeId") REFERENCES "WebsiteType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequestFeature" ADD CONSTRAINT "ProjectRequestFeature_projectRequestId_fkey" FOREIGN KEY ("projectRequestId") REFERENCES "ProjectRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequestFeature" ADD CONSTRAINT "ProjectRequestFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomFeature" ADD CONSTRAINT "CustomFeature_projectRequestId_fkey" FOREIGN KEY ("projectRequestId") REFERENCES "ProjectRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRequestFile" ADD CONSTRAINT "ProjectRequestFile_projectRequestId_fkey" FOREIGN KEY ("projectRequestId") REFERENCES "ProjectRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
