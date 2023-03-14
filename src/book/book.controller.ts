import { Body, Controller, Delete, Get, Param, Post,Put, Query, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';
import {Query as ExpressQuery} from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
@Controller('books')
export class BookController {
      constructor(private bookService:BookService){}

      @Get()
      @UseGuards(AuthGuard())
      async getAllBooks(@Query() query:ExpressQuery):Promise<any>{
            return this.bookService.findAll(query)
      }

      @Post()
      @UseGuards(AuthGuard())
      async createBook(@Body() book:CreateBookDto):Promise<any>{
            return this.bookService.create(book)
      }

      @Get(':id')
      @UseGuards(AuthGuard())
      async getBook(
            @Param('id')
            id: string):Promise<any>{
            return this.bookService.findById(id)
      }

      @Put(':id')
      @UseGuards(AuthGuard())
      async updateBook(
      @Param('id') 
      id:string,
      @Body() book:UpdateBookDto):
      Promise<any>{
            console.log("in update book api call");
            return this.bookService.updateById(id,book)
      }

      @Delete(':id')
      @UseGuards(AuthGuard())
      async deleteBook(
      @Param('id')
      id: string,
      ): Promise<any> {
      return this.bookService.deleteById(id);
      }

      
}
