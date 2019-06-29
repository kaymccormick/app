import { Entity as OrmEntity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import EntityAttribute from './EntityAttribute';

@OrmEntity()
export default class Entity {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;

    @Column({nullable: true})
    public displayName?: string;

    @OneToMany(type => EntityAttribute, att => att.entity)
    public attributes?: EntityAttribute[]
}
