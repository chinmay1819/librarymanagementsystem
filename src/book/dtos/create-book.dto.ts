export class CreateBookDto {
    readonly bookName: string;
    readonly author: string;
    readonly ISBN: string;
    readonly publicationYear: number;
    readonly genre: string;
}