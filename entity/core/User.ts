import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;
}
