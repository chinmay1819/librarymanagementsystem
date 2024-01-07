import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './members.entity';
import { Book } from 'src/book/book.entity';
import { Transaction } from 'src/transactions/transactions.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Member,Book,Transaction])],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
