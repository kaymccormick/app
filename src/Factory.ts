import {Connection, createConnection} from "typeorm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function myCreateConnection(entities: any[]): Promise<Connection> {
    return createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "myapp1",
        "password": "derp123",
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
        }, entities//: [Name,Project, Class, Export, Import, Method, Parameter, Module, Entity, EntityAttribute, Interface, InterfaceMethod, TSType, TSUnionType, TSTypeReference, InterfaceProperty,Property,Type, ...Object.values(CoreEntityCore), ...Object.values(CoreEntityLogging)]
    });
}

export { myCreateConnection as createConnection }
