import { ApplicationModule } from './src/ApplicationModule';
import {Module as ClassModelModule } from './modules/classModel';
import {Module as EntitiesModule } from './modules/entities';
import {Module as LoggingModule } from './modules/logging';
import {Module as MenusModule } from './modules/menus';

const modules: any[] = [ClassModelModule, EntitiesModule, LoggingModule, MenusModule];

exports.default = {
    modules,
};
