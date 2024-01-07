import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    readonly bookName: string;
    @ApiProperty()
    readonly author: string;
    @ApiProperty()
    readonly ISBN: string;
    @ApiProperty()
    readonly publicationYear: number;
    @ApiProperty()
    readonly genre: string;
    @ApiProperty()
    readonly quantityAvailable:number
}