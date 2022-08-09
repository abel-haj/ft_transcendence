import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Users
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    username: string


    @Column()
    intra_login: string

    @Column()
    avatart: string

    @Column()
    status: string
}