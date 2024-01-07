import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';
import { Member } from 'src/members/members.entity';
import {
  Transaction,
  TransactionStatus,
} from '../transactions/transactions.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const {
      bookName,
      author,
      ISBN,
      publicationYear,
      genre,
      quantityAvailable,
    } = createBookDto;

    const newBook = this.bookRepository.create({
      bookName,
      author,
      ISBN,
      publicationYear,
      genre,
      quantityAvailable,
    });

    return await this.bookRepository.save(newBook);
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async borrowBook(bookId: string, memberId: string): Promise<string> {
    try {
      // Calculate the expectedReturnDate (15 days from the current date)
      const currentDate = new Date();
      const expectedReturnDate = new Date(
        currentDate.getTime() + 15 * 24 * 60 * 60 * 1000,
      );

      // Retrieve the Book and Member entities from the database based on their IDs
      const book = await this.bookRepository.findOne({ where: { bookId } });
      const member = await this.memberRepository.findOne({
        where: { memberId },
      });

      if (!book || !member) {
        return 'Book or member not found';
      }

      // Check if there are available copies of the book
      if (book.quantityAvailable <= 0) {
        return 'No available copies of the book';
      }

      console.log(book);
      console.log(member);
      // Create a new transaction record

      const newTransaction = this.transactionRepository.create({
        book,
        member,
        status: TransactionStatus.BORROWED,
        borrowedDate: currentDate,
        expectedReturnDate,
      });

      console.log('newTransaction', newTransaction);
      //   // Save the new transaction record to the database
      await this.transactionRepository.save(newTransaction);
      book.quantityAvailable -= 1;
      await this.bookRepository.save(book);

      // Additional logic or return value based on the result...

      return 'Book borrowed successfully';
    } catch (error) {
      // Handle errors...
      console.error(error);
      return 'Error borrowing book';
    }
  }

  
}
