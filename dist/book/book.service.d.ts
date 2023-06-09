import mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { Query } from 'express-serve-static-core';
export declare class BookService {
    private bookModel;
    constructor(bookModel: mongoose.Model<Book>);
    findAll(query: Query): Promise<Book[]>;
    create(book: Book): Promise<Book>;
    findById(id: string): Promise<Book>;
    updateById(id: string, book: Book): Promise<Book>;
    deleteById(id: string): Promise<Book>;
}
