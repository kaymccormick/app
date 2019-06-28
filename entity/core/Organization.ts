import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Organization {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    commonName?: string;
}
