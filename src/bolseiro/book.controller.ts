import { Controller, Get, Post, Put, Delete, Param, Body, Query} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getUsers(@Query ("name") name: string) {
        return this.bookService.getAllBooks();
    }

    @Get(":id")
    getBook(@Param("id") id: string) {
        return this.bookService.getBook(+id);
    }

    @Post()
    createBook(@Body() data: CreateBookDto) {
        return this.bookService.createBook(data);
    }

    @Put(":id")
    putBook(@Param("id") id: string, @Body() data: UpdateBookDto) {
        return this.bookService.updateBook(+id, data);
    }

    @Delete(":id")
    deleteBook(@Param("id") id: string) {
        return this.bookService.deleteBook(+id);
    }
}