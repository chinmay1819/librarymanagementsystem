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

  async borrowBook(
    bookId: string,
    memberId: string,
  ): Promise<{ message: string; transactionId?: string }> {
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
        return { message: 'Book or member not found' };
      }

      // Check if there are available copies of the book
      if (book.quantityAvailable <= 0) {
        return { message: 'No available copies of the book' };
      }

      // Create a new transaction record

      const newTransaction = this.transactionRepository.create({
        book,
        member,
        status: TransactionStatus.BORROWED,
        borrowedDate: currentDate,
        expectedReturnDate,
      });

      const savedTransaction = await this.transactionRepository.save(
        newTransaction,
      );
      book.quantityAvailable -= 1;
      await this.bookRepository.save(book);

      // Additional logic or return value based on the result...

      return {
        message: 'Book borrowed successfully',
        transactionId: savedTransaction.id,
      };
    } catch (error) {
      // Handle errors...
      console.error(error);
      return { message: 'Error borrowing book' };
    }
  }

  // return a book

  async returnBook(
    borrowingId: string,
  ): Promise<{ message: string; transactionId?: string }> {
    try {
      // Retrieve the transaction record from the database
      const transaction = await this.transactionRepository.findOne({
        where: { id: borrowingId },
      });

      if (!transaction) {
        return { message: 'Transaction not found' };
      }

      // Check if the book is already returned
      if (transaction.status === TransactionStatus.RETURNED) {
        return { message: 'The book is already returned' };
      }

      // Update the transaction status to 'returned'
      transaction.status = TransactionStatus.RETURNED;
      transaction.returnedDate = new Date();

      // Save the updated transaction record to the database
      await this.transactionRepository.save(transaction);

      // Retrieve the associated book using transaction's book ID
      const book = await this.bookRepository.findOne({
        where: { bookId: transaction.book.bookId },
      });

      if (!book) {
        return { message: 'Book not found' };
      }

      // Increase the quantityAvailable field in the book repository by 1
      book.quantityAvailable += 1;

      // Save the updated book record to the database
      await this.bookRepository.save(book);

      // Additional logic or return value based on the result...
      return {
        message: 'Book returned successfully',
        transactionId: transaction.id,
      };
    } catch (error) {
      // Handle errors...
      console.error(error);
      return { message: 'Error returning book' };
    }
  }

  async getBooksMultipleBorrowers(): Promise<{ bookName: string; borrowerCount: number }[]> {
    const queryResult = await this.bookRepository
      .createQueryBuilder('book')
      .leftJoin('book.transactions', 'transaction')
      .select('book.bookName', 'bookName')
      .addSelect('COUNT(DISTINCT transaction.memberId)', 'borrowerCount')
      .groupBy('book.bookName')
      .having('COUNT(DISTINCT transaction.memberId) > 1')
      .getRawMany();
  
    return queryResult.map((result) => ({
      bookName: result.bookName,
      borrowerCount: parseInt(result.borrowerCount, 10),
    }));
  }
  
  
  
}
