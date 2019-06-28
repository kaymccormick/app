import { Entity as OrmEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";

@OrmEntity()
export default class Entity {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;

    @Column({nullable: true})
    public displayName?: string;


}
