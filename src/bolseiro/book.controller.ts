import { Controller, Get, Post, Put, Param, Body, Query} from '@nestjs/common';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get("/getAll")
    getUsers(@Query ("name") name: string) {
        return this.bookService.getBooks(name);
    }

    @Get(":id")
    getBook(@Param('id') id: string) {
        return this.bookService.getBook(+id);
    }
}