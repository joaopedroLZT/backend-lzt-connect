/*
  Warnings:

  - Made the column `firstname` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthday` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `street` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `zip_code` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "birthday" SET NOT NULL,
ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "zip_code" SET NOT NULL;
