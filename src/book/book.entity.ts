import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

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

  @Column()
  publicationYear: number;

  @Column()
  genre: string;

  @Column()
  quantityAvailable: number;
}
