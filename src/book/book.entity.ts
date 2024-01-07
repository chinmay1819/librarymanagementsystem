import { Transaction } from 'src/transactions/transactions.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';

@Entity()
@Unique(['bookId', 'ISBN'])
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Unique(['bookId'])
  bookId: string;

  @Column()
  bookName: string;

  @Column()
  author: string;

  @Column({ unique: true })
  @Unique(['ISBN'])
  ISBN: string;

  @OneToMany(() => Transaction, (transaction) => transaction.book)
  transactions: Transaction[];

  @Column()
  publicationYear: number;

  @Column()
  genre: string;

  @Column()
  quantityAvailable: number;
}
