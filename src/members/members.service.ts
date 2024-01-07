import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './members.entity';
import { Transaction } from 'src/transactions/transactions.entity';
import { Book } from 'src/book/book.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Member[]> {
    return await this.memberRepository.find();
  }

  async findOne(id: number): Promise<Member> {
    return await this.memberRepository.findOne({ where: { id } });
  }

  async createMember(member: Member): Promise<Member> {
    const newMember = this.memberRepository.create(member);
    return await this.memberRepository.save(newMember);
  }

  async updateMember(id: number, member: Member): Promise<Member> {
    await this.memberRepository.update(id, member);
    return await this.memberRepository.findOne({ where: { id } });
  }

  async deleteMember(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }

  async getBorrowingHistory(memberId: string): Promise<Transaction[]> {
    // Fetch the member by memberId
    const member = await this.memberRepository.findOne({ where: { memberId } });
    if (!member) {
      throw new Error('Member not found');
    }
    // Fetch the borrowing history for the member
    return this.transactionRepository.find({ where: { member }, relations: ['book'] });
  }

  
}
