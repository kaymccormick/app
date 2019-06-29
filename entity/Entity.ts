import {Entity as OrmEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@OrmEntity()
export default class Entity {
  @PrimaryGeneratedColumn()
    public  id: number;
  @Column()
  public   name: string;
  @Column()
  public   dynamic: boolean;
  @Column()
  public  objectId: number;

  public constructor(entityid: number, name: string, dynamic: boolean, objectId: number) {
      this.entityid = entityid;
      this.name = name;
      this.dynamic = dynamic;
      this.objectId = objectId;
  }
}

