import {Module as ClassModelModule } from './modules/classModel';
import {Module as EntitiesModule } from './modules/entities';
import {Module as LoggingModule } from './modules/logging';
import {Module as JsonTreeModule } from './modules/jsontree';
import {Module as MenusModule } from './modules/menus';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modules: any[] = [
    ClassModelModule,
    EntitiesModule,
    LoggingModule,
    MenusModule,
    JsonTreeModule,
];

export default { modules };
