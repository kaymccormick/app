import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";

@Entity()
export default class User {
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

  @Column()
  public userEncryptedPassword?: string;
}
