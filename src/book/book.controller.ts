import { Controller,Get,Post,Body, HttpStatus, Param } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dtos/create-book.dto';
import { CustomResponse } from 'src/shared/custom-response';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly booksService: BookService) {}

  @Get('/allbooks')
  async getBooks(){
    try {
      const allBooks = await this.booksService.getAllBooks();
      const response = new CustomResponse<Book[]>('Books fetched successfully', HttpStatus.ACCEPTED, allBooks);
      return response;
    } catch (error) {
      // Handle errors, e.g., log them or return an error response
      console.error(error);
      const response = new CustomResponse<Book[]>('Error fetching books', HttpStatus.INTERNAL_SERVER_ERROR);
      return response;
    }
  }
    
  @Post('/addbook')
  async createBook(@Body() createBookDto: CreateBookDto) {
    const createdBook = await this.booksService.createBook(createBookDto);
    const response = new CustomResponse<Book>('Book added successfully', HttpStatus.CREATED, createdBook);
    return response;
  }

  


  @Post('/borrow/:bookId/:memberId')
  async borrowBook(@Param('bookId')bookId:string , @Param('memberId')memberId:string){
    try {
      const result = await this.booksService.borrowBook(bookId, memberId);
      const response = new CustomResponse('Book borrowed successfully', HttpStatus.OK, result);
      return response;
    } catch (error) {
      console.error(error);
      const response = new CustomResponse('Error borrowing book', HttpStatus.INTERNAL_SERVER_ERROR);
      return response;
    }
  }

  
} 
