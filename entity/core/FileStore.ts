import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class FileStore {
    @PrimaryGeneratedColumn()
    public id?: number;
}
