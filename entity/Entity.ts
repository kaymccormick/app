import {Entity as OrmEntity, Column, PrimaryColumn} from "typeorm";

@OrmEntity()
class
Entity {
  @PrimaryColumn()
  entityid: number;
  @Column()  name: string;
  @Column()  dynamic: boolean;
  @Column()  objectId: number;

  constructor(entityid: number, name: string, dynamic: boolean, objectId: number) {
    this.entityid = entityid;
    this.name = name;
    this.dynamic = dynamic;
    this.objectId = objectId;
  }
}

@OrmEntity()
class EntityField {
  @PrimaryColumn()
  entityid: number;

  @Column()
  fieldname: string;
  @Column()
  typeid: number;
  @Column()
  flags: number;
  @Column()
  defaultid: number;

  constructor(entityid: number, fieldname: string, typeid: number, flags: number, defaultid: number) {
    this.entityid = entityid;
    this.fieldname = fieldname;
    this.typeid = typeid;
    this.flags = flags;
    this.defaultid = defaultid;
  }
}
@OrmEntity()
class FieldType {
  @PrimaryColumn()
  typeid: number;
  @Column()
  typename: string;
  @Column()
  objectid: number;

  constructor(typeid: number, typename: string, objectid: number) {
    this.typeid = typeid;
    this.typename = typename;
    this.objectid = objectid;
  }
}
@OrmEntity()
class ObjectRelationship {
  @PrimaryColumn()
  sourceid: number;
  @PrimaryColumn()
  destinationid: number;
  @Column()
  relkindid: number;

  constructor(sourceid: number, destinationid: number, relkindid: number) {
    this.sourceid = sourceid;
    this.destinationid = destinationid;
    this.relkindid = relkindid;
  }
}
