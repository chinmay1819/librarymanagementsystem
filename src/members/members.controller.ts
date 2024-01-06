import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from './members.entity';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService:MembersService) {        
    }

    @Get()
    async findAll():Promise<Member[]>{
        return this.membersService.findAll()
    }
    
    @Get("id")
    async findOne(@Param('id') id:number):Promise<Member>{
        const member = this.membersService.findOne(id);
        if(!member){
            throw new Error('User not found')
        }
        return member
    }

    @Post()
    async create(@Body() member:Member):Promise<Member>{
        return await this.membersService.createMember(member);
    }

    @Put(':id')
    async update(@Param('id') id:number,@Body() member:Member):Promise<Member>{
        return await this.membersService.updateMember(id,member);
    }

    @Delete(':id')
    async deleteMember(@Param('id')id:number){
        const member = await this.membersService.findOne(id);
        if(!member){
            throw new Error('Member not found')
        }
        return this.membersService.deleteMember(id);
    }

}
