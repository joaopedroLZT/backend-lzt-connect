-- AlterTable
ALTER TABLE "wintour_headers" ADD COLUMN     "integration_protocol" TEXT,
ADD COLUMN     "integration_raw_response" TEXT,
ADD COLUMN     "integration_status" TEXT;
