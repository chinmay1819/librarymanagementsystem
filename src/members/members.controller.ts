import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from './members.entity';
import { CustomResponse } from 'src/shared/custom-response';
import { ApiTags } from '@nestjs/swagger';
import { CreateMemberDto } from './dto/create-member.dto';

@ApiTags('Members')
@Controller('members')
export class MembersController {
    constructor(
        private readonly membersService:MembersService) {        
    }

    @Get('/getall')
    async findAll():Promise<Member[]>{
        return this.membersService.findAll()
    }
    
    @Post('/create')
    async create(@Body() member:CreateMemberDto):Promise<Member>{
        return await this.membersService.createMember(member);
    }

    
    @Get('/history/:memberId')
    async history(@Param('memberId')memberId:string){
        try{
            const borrowingHistory = await this.membersService.getBorrowingHistory(memberId);
            const response = new CustomResponse('Borrowing history fetched successfully', HttpStatus.OK, borrowingHistory);
            return response;
          } catch (error) {
            console.error(error);
            const response = new CustomResponse('Error fetching borrowing history', HttpStatus.INTERNAL_SERVER_ERROR);
            return response;
        }
    }
    

}
