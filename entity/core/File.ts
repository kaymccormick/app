import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import User from './User';
import FileContent from './FileContent';

@Entity()
export default class File {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;

    @ManyToOne(type => User)
    public owner?: User;

    @OneToOne(type => FileContent, content => content.file)
    public fileContent?: FileContent;
}
