-- CreateEnum
CREATE TYPE "LogoOption" AS ENUM ('HAVE_LOGO', 'NEED_LOGO', 'NO_LOGO');

-- AlterTable
ALTER TABLE "ProjectRequest" ADD COLUMN     "logoOption" "LogoOption";
