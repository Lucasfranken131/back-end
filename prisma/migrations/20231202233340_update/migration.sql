-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Disponivel', 'Ausente', 'Ocupado', 'Lendo');

-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Book" (
    "id_book" SERIAL NOT NULL,
    "book_picture" TEXT NOT NULL,
    "book_name" TEXT NOT NULL,
    "book_description" TEXT NOT NULL,
    "book_author" TEXT NOT NULL,
    "book_date" TEXT NOT NULL,
    "book_publisher" TEXT NOT NULL,
    "pdf_link" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id_book")
);

-- CreateTable
CREATE TABLE "_BookToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToUser_AB_unique" ON "_BookToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToUser_B_index" ON "_BookToUser"("B");

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id_book") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
