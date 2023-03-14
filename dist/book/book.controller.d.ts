import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(query: ExpressQuery): Promise<any>;
    createBook(book: CreateBookDto): Promise<any>;
    getBook(id: string): Promise<any>;
    updateBook(id: string, book: UpdateBookDto): Promise<any>;
    deleteBook(id: string): Promise<any>;
}
