import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty({ example: '', description: 'Email of the member' })
  readonly email: string;

  @ApiProperty({ example: '', description: 'Phone number of the member' })
  readonly phone: string;

  @ApiProperty({ example: '', description: 'Address of the member' })
  readonly address: string;
}
