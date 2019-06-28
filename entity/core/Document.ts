import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

import Person from './Person';

@Entity()
export default class Document {
    @PrimaryGeneratedColumn()
    public id?: number;

    public title?: string;

    public subtitle?: string;

    @ManyToMany(type => Person)
    @JoinTable()
    public authors?: Person[];
}
