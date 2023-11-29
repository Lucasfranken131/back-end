import { Body, Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class BookService {

    constructor(private prisma: PrismaService) {}

    async getAllBooks() {
        const books = await this.prisma.book.findMany();
        return books;
    }

    async getBookName(name: string) {
        const book = await this.prisma.book.findMany({
            where: {
                book_name:{mode:'insensitive', contains:name},
            },
        })

        if(!book) {
            throw new Error("Livro não encontrado");
        }

        return book;
    }

    async getBooks(name: string) {
        if(name) {
            const books = await this.prisma.book.findMany({
                where: {
                    book_name: name,
                },
                
            });
            return books;
        }
    }

    async getBook(id: number) {
        const book = await this.prisma.book.findUnique({
            where: {
                id_book: id,
            },
        });

        return book;
    }

    async createBook(data: CreateBookDto) {
        const book = await this.prisma.book.create({
            data,
        });

        return book;
    }

    async updateBook(id: number, data: UpdateBookDto) {
        const book = await this.prisma.book.findUnique({
            where: {
                id_book: id,
            },
        });

        if(!book) {
            throw new Error("Livro não existe")
        }

        return await this.prisma.book.update({
            data,
            where: {
                id_book: id,
            },
        });
    }

    async deleteBook(id: number) {
        const bookToDelete = this.prisma.book.delete({
            where: {
                id_book: id,
            },
        });

        return bookToDelete;
    }
}