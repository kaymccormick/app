import {PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import User from './User';

export default class UniversalBase {
    @PrimaryGeneratedColumn()
    public objectid?: number;

    @Column({nullable: true})
    public commonName?: string;

    @Column({nullable: true})
    public displayName?: string;

    @ManyToOne(type => User)
    public owner?: User;

    @Column({type: 'bigint'})
    public flags?: number;

    @Column({type: 'bigint'})
    public permissions?: number;
}
