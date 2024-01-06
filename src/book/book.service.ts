import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';


@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const { bookName, author, ISBN, publicationYear, genre,quantityAvailable } = createBookDto;

    const newBook = this.bookRepository.create({
      bookName,
      author,
      ISBN,
      publicationYear,
      genre,
      quantityAvailable
    });

    return await this.bookRepository.save(newBook);
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }


}
