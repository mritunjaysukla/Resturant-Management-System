-- AlterTable
ALTER TABLE "StaffOnDuty" ADD COLUMN     "totalEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "workingHours" DOUBLE PRECISION NOT NULL DEFAULT 0;
