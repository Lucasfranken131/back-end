import { Controller, Get, Post, Put, Delete, Param, Body, Query} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getUsers(@Query ("name") name: string) {
        return this.bookService.getBooks(name);
    }

    @Get(":id")
    getBook(@Param("ids") id: string) {
        return this.bookService.getBook(+id);
    }

    @Post()
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.bookService.createBook(createBookDto);
    }

    @Put(":id")
    putBook(@Param("id") id: string, updateBookDto: UpdateBookDto) {
        return this.bookService.updateBook(+id, updateBookDto);
    }

    @Delete(":id")
    deleteBook(@Param("id") id: string) {
        return this.bookService.deleteBook(+id);
    }
}