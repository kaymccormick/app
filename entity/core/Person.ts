import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Person {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    displayName?: string;

    @Column({nullable: true})
    givenName?: string;

    @Column({nullable: true})
    surname?: string;

    @Column({nullable: true})
    commonName?: string;

    @Column({nullable: true})
    telephoneNumber?: string;

    @Column({nullable: true})
    title?: string;
 }
 