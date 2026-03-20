/*
  Warnings:

  - You are about to drop the column `fileId` on the `WintourTicket` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `WintourHeader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WintourTicket" DROP CONSTRAINT "WintourTicket_fileId_fkey";

-- AlterTable
ALTER TABLE "WintourHeader" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WintourTicket" DROP COLUMN "fileId",
ADD COLUMN     "headerId" TEXT;

-- CreateTable
CREATE TABLE "WintourOther" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "WintourOther_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WintourOther_ticketId_key" ON "WintourOther"("ticketId");

-- AddForeignKey
ALTER TABLE "WintourTicket" ADD CONSTRAINT "WintourTicket_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "WintourHeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourOther" ADD CONSTRAINT "WintourOther_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
