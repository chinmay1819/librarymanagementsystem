import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/members/members.entity';
import { Transaction } from 'src/transactions/transactions.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Book, Member, Transaction])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
