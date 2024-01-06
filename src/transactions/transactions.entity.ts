import { Book } from 'src/book/book.enity';
import { Member } from 'src/members/members.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum TransactionStatus {
  BORROWED = 'borrowed',
  RETURNED = 'returned',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Book, { eager: true, nullable: false })
  book: Book;

  @ManyToOne(() => Member, { eager: true, nullable: false })
  member: Member;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.BORROWED,
  })
  status: TransactionStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  borrowedDate: Date;

  @Column({ type: 'timestamp' })
  expectedReturnDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  returnedDate: Date;
}
