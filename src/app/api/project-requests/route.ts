        import { NextResponse } from "next/server";
        import { prisma } from "@/lib/prisma";
        import { Prisma } from "@/generated/prisma/client";

        export async function POST(request: Request) {
        try {
            const body = await request.json();

            const {
            client,
            websiteTypeId,
            industryId,

            otherWebsiteType,
            otherIndustry,

            projectName,

            businessName,
            businessDescription,
            businessServices,
            businessRegistrationNumber,
            businessAddress,
            countryOfOperation,

            projectGoals,
            otherProjectGoal,

            description,

            selectedFeatureIds,
            customFeatures,

            designStyle,
            designPreference,

            primaryColor,
            secondaryColor,
            accentColor,

            referenceWebsiteUrl,

            logoOption,
            additionalRequirements,

            hasContent,

            timeline,
            budget,
            currency,
            } = body;

            if (!client?.name || !client?.email || !client?.phone) {
            return NextResponse.json(
                {
                error: "Name, email and phone number are required.",
                },
                { status: 400 }
            );
            }

            if (!websiteTypeId) {
            return NextResponse.json(
                { error: "Website type is required." },
                { status: 400 }
            );
            }

            if (!businessName?.trim()) {
            return NextResponse.json(
                { error: "Business name is required." },
                { status: 400 }
            );
            }

            if (!countryOfOperation?.trim()) {
            return NextResponse.json(
                { error: "Country of operation is required." },
                { status: 400 }
            );
            }

            if (!Array.isArray(businessServices) || businessServices.length === 0) {
            return NextResponse.json(
                { error: "At least one business service is required." },
                { status: 400 }
            );
            }

            const result = await prisma.$transaction(async (tx) => {
            /*
            * 1. Find existing client by email.
            *
            * We are not using authentication yet, so email is our
            * current client identity.
            */
            let existingClient = await tx.client.findFirst({
                where: {
                email: client.email.trim().toLowerCase(),
                },
            });

            if (!existingClient) {
                existingClient = await tx.client.create({
                data: {
                    name: client.name.trim(),
                    email: client.email.trim().toLowerCase(),
                    phone: client.phone.trim(),
                    company: businessName?.trim() || null,
                    country: countryOfOperation?.trim() || null,
                },
                });
            } else {
                existingClient = await tx.client.update({
                where: {
                    id: existingClient.id,
                },
                data: {
                    name: client.name.trim(),
                    phone: client.phone.trim(),
                    company: businessName?.trim() || existingClient.company,
                    country:
                    countryOfOperation?.trim() || existingClient.country,
                },
                });
            }

            /*
            * 2. Create the project request.
            */
            const projectRequest = await tx.projectRequest.create({
                data: {
                clientId: existingClient.id,

                websiteTypeId,
                otherWebsiteType,
                industryId: industryId || null,
                otherIndustry,
                

                projectName: projectName?.trim() || "Untitled Project",

                businessName: businessName.trim(),
                businessDescription:
                    businessDescription?.trim() || null,

                businessServices,

                businessRegistrationNumber:
                    businessRegistrationNumber?.trim() || null,

                businessAddress:
                    businessAddress?.trim() || null,

                countryOfOperation:
                    countryOfOperation?.trim() || null,

                projectGoals: Array.isArray(projectGoals)
                    ? projectGoals
                    : [],

                otherProjectGoal:
                    otherProjectGoal?.trim() || null,

                description:
                    description?.trim() || null,

                timeline: timeline || null,

                primaryColor:
                    primaryColor?.trim() || null,

                secondaryColor:
                    secondaryColor?.trim() || null,

                accentColor:
                    accentColor?.trim() || null,

                designStyle:
                    designStyle?.trim() || null,

                designPreference:
                    designPreference?.trim() || null,

                referenceWebsiteUrl:
                    referenceWebsiteUrl?.trim() || null,

                logoOption: logoOption || null,

                additionalRequirements:
                    additionalRequirements?.trim() || null,

                hasContent: Boolean(hasContent),

                

                status: "DRAFT",
                },
            });

            /*
            * 3. Selected predefined features.
            */
            if (
                Array.isArray(selectedFeatureIds) &&
                selectedFeatureIds.length > 0
            ) {
                await tx.projectRequestFeature.createMany({
                data: selectedFeatureIds.map((featureId: string) => ({
                    projectRequestId: projectRequest.id,
                    featureId,
                })),
                skipDuplicates: true,
                });
            }

            /*
            * 4. Custom features.
            */
            if (
                Array.isArray(customFeatures) &&
                customFeatures.length > 0
            ) {
                await tx.customFeature.createMany({
                data: customFeatures
                    .filter(
                    (feature: unknown): feature is string =>
                        typeof feature === "string" &&
                        feature.trim().length > 0
                    )
                    .map((feature: string) => ({
                    projectRequestId: projectRequest.id,
                    title: feature.trim(),
                    description: "Custom feature request",
                    })),
                });
            }

            return {
                projectRequest,
                client: existingClient,
            };
            });

            return NextResponse.json(
            {
                success: true,
                projectRequestId: result.projectRequest.id,
                
                message:
                "Your project request has been submitted successfully.",
            },
            { status: 201 }
            );
        } catch (error) {
            console.error("Project request submission failed:", error);

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json(
                {
                error:
                    "We could not save your project request. Please try again.",
                },
                { status: 500 }
            );
            }

            
        console.error("Project request submission failed:", error);

        return NextResponse.json(
            {
            error:
                error instanceof Error
                ? error.message
                : "Unknown server error",
            },
            { status: 500 }
        );
        }
        }