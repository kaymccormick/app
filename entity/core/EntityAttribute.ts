import { Entity as OrmEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import Entity from './Entity';

@OrmEntity()
export default class EntityAttribute {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;
    @Column({nullable: true})
    public displayName?: string;

    @ManyToOne(type => Entity, entity => entity.attributes)
    public entity?: Entity;

}
