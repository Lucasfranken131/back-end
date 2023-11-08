/*
  Warnings:

  - Added the required column `book_author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_date` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_name` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_publisher` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "book_author" TEXT NOT NULL,
ADD COLUMN     "book_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "book_name" TEXT NOT NULL,
ADD COLUMN     "book_publisher" TEXT NOT NULL;
