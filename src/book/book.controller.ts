import { Controller,Get,Post,Body, HttpStatus } from '@nestjs/common';
import { Book } from './book.enity';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { CustomResponse } from 'src/shared/custom-response';

@Controller('book')
export class BookController {
    constructor(private readonly booksService: BookService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    const createdBook = await this.booksService.createBook(createBookDto);
    const response = new CustomResponse<Book>('Book added successfully', HttpStatus.CREATED, createdBook);
    return response;
  }

}
