import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import File from './File';


@Entity()
export default class FileContent {
    @PrimaryGeneratedColumn()
    public id?: number;

    @OneToOne(type => File)
    @JoinColumn()
    public file?: File;
}
