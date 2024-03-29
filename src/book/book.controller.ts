import { Controller,Get,Post,Body, HttpStatus, Param } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dtos/create-book.dto';
import { CustomResponse } from 'src/shared/custom-response';
import { BookService } from './book.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
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

      if (result.message === 'Book borrowed successfully') {
        const response = new CustomResponse('Book borrowed successfully', HttpStatus.OK, result);
        return response;
      } else if (result.message === 'Book or member not found') {
        const response = new CustomResponse('Book or member not found', HttpStatus.NOT_FOUND);
        return response;
      } else if (result.message === 'No available copies of the book') {
        const response = new CustomResponse('No available copies of the book', HttpStatus.BAD_REQUEST);
        return response;
      } else {
        const response = new CustomResponse('Error borrowing book', HttpStatus.INTERNAL_SERVER_ERROR);
        return response;
      }
    } catch (error) {
      console.error(error);
      const response = new CustomResponse('Error borrowing book', HttpStatus.INTERNAL_SERVER_ERROR);
      return response;
    }
  }

  
  // return a book
  @Post('/return/:borrowingId')
  async returnBook(@Param('borrowingId') borrowingId: string) {
    try {
      const result = await this.booksService.returnBook(borrowingId);

      if (result.message === 'Book returned successfully') {
        const response = new CustomResponse('Book returned successfully', HttpStatus.OK, result);
        return response;
      } else if (result.message === 'Transaction not found') {
        const response = new CustomResponse('Transaction not found', HttpStatus.NOT_FOUND);
        return response;
      }else if (result.message === 'The book is already returned') {
        const response = new CustomResponse('The book is already returned', HttpStatus.CONFLICT);
        return response;
      } 
      else {
        const response = new CustomResponse('Error returning book', HttpStatus.INTERNAL_SERVER_ERROR);
        return response;
      }
    } catch (error) {
      console.error(error);
      const response = new CustomResponse('Error returning book', HttpStatus.INTERNAL_SERVER_ERROR);
      return response;
    }
  }


  //books which are borrowed by more than 1 member
  @Get('/multiple-borrowers')
  async booksWithMultipleBorrowers(): Promise<CustomResponse<{ bookName: string; borrowerCount: number }[]>> {
    try {
      const result = await this.booksService.getBooksMultipleBorrowers();

      const response = new CustomResponse(
        'Books with multiple borrowers fetched successfully',
        HttpStatus.OK,
        result,
      );

      return response;
    } catch (error) {
      console.error(error);
      const response = new CustomResponse(
        'Error fetching books with multiple borrowers',
        HttpStatus.INTERNAL_SERVER_ERROR,
        null, // You can customize the payload based on your needs
      );
      return response;
    }
  }



} 
