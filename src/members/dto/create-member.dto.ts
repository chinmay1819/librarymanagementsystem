import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty({ example: 'john.doe@example.com', description: 'Email of the member' })
  readonly email: string;

  @ApiProperty({ example: '1234567890', description: 'Phone number of the member' })
  readonly phone: string;

  @ApiProperty({ example: '123 Main Street', description: 'Address of the member' })
  readonly address: string;
}
