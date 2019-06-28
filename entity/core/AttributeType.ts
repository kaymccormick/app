import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";

@Entity()
export default class AttributeType {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;

    

}
