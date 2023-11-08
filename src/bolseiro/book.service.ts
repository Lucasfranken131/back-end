import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
    private books = [
        { id_book: 1, book_picture: "Teste", book_name: "O Senhor dos Anéis", book_author: "Tolkien", book_date: "08/11/1950", book_publisher: "Don't know"},
        { id_book: 2, book_picture: "Teste2", book_name: "Crônicas de Nárnia", book_author: "C. S. Lewis", book_date: "08/11/1940", book_publisher: "Don't know either"}
    ];

    getBooks(name?: string) {
        if(name) {
            return this.books.filter((book) => book.book_name === name);
        }
        return this.books;
    }

    getBook(id: number) {
        const book = this.books.find((book) => book.id_book === id)
        if(!book) {
            throw new Error("Livro não foi achado.");
        }
        return book;
    }
}