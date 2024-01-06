import { Entity,Column,PrimaryGeneratedColumn, Unique, Generated } from "typeorm";

@Entity()
@Unique(['email','memberId'])
export class Member{
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({unique:true})
    @Generated('uuid')
    memberId:string

    @Column({unique:true})
    email:string;

    @Column()
    phone:string;

    @Column()
    address:string;
}