import { Entity as OrmEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import AttributeType from './AttributeType';

@OrmEntity()
export default class EntityAttribute {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: true})
    public commonName?: string;
    @Column({nullable: true})
    public displayName?: string;

//    @OneToMany(type => AttributeType,

}
