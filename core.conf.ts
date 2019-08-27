import {Module as ClassModelModule } from './modules/classModel';
import {Module as EntitiesModule } from './modules/entities';
import {Module as LoggingModule } from './modules/logging';
import {Module as JsonTreeModule } from './modules/jsontree';
import {Module as EditorModule } from './modules/editor';
import {Module as MenusModule } from './modules/menus';
import {Module as DocBrowserModule } from './modules/docBrowser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modules: any[] = [
    ClassModelModule,
    EntitiesModule,
    LoggingModule,
    MenusModule,
    JsonTreeModule,
    EditorModule,
    DocBrowserModule,
];

export default { modules };
