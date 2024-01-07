import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './members.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Member])],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
