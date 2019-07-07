import {Registry, TypeOrmRegistry} from "classModel/lib/src";
import { Project,Class,Export,Import,Method,Parameter,Module,Name,Interface,InterfaceMethod,TSType,TSUnionType,Type,Property,InterfaceProperty,TSTypeReference } from
    "classModel/lib/src/entity/core";
import Entity from '../entity/core/Entity';
import EntityAttribute from '../entity/core/EntityAttribute';
import * as CoreEntityCore from '../entity/core';
import * as CoreEntityLogging from '../entity/logging';
import {Connection, createConnection} from "typeorm";

function myCreateConnection(): Promise<Connection> {
    return createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "servernodeuser",
        "password": "derpderp",
        "database": "myapp1",
        "synchronize": true,
        "logging": false,
        "migrations": [
            "src/migration/**/*.ts"
        ],
        "subscribers": [
            "src/subscriber/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
        }, entities: [Name,Project, Class, Export, Import, Method, Parameter, Module, Entity, EntityAttribute, Interface, InterfaceMethod, TSType, TSUnionType, TSTypeReference, InterfaceProperty,Property,Type, ...Object.values(CoreEntityCore), ...Object.values(CoreEntityLogging)]
    });
}

export function createRegistry(): Promise<Registry> {
    return myCreateConnection().then(connection =>
        connection.manager.getRepository(Project)
            .find({id: 1}).then(project => new TypeOrmRegistry(connection, project[0])));

}
export { myCreateConnection as createConnection }
