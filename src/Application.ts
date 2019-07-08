import fs from 'fs';

import path from 'path';
import winston, {Logger} from 'winston';

import { Connection } from 'typeorm';
import {createConnection}from './Factory';
import {ServerConfiguration} from './ServerConfiguration';
import {ServerApplicationModule} from './ServerApplicationModule';

const modules = [];
const relModulePath = '../modules';
const moduleRoot = path.join(__dirname, relModulePath);

export class Application {
    /* These are for database entities */
    public entities: any[] = [];
    public connection?: Connection;
    public get modules(): ServerApplicationModule[] { return this.configuration.modules; }

    public configuration: ServerConfiguration;
    // @ts-ignore
    public logger: Logger;
    public constructor(logger: Logger) {
        this.configuration = new ServerConfiguration();
        this.logger = logger;
        if(logger.debug === undefined) {
        throw new Error('invalid logger');
        }
        this.logger.debug('Application.constructor');
    }

    public init(): Promise<any> {
        this.logger.info('Application.init');
        fs.readdirSync(moduleRoot).filter(e => !/^\./.test(e) && fs.statSync(path.join(moduleRoot, e)).isDirectory()).forEach(ent => {
            this.logger.info(ent);
            try {
            const m = require(path.join(relModulePath, ent + '/ServerModule'));
            const serverModule = new m.ServerModule();
            this.configuration.addModule(serverModule);
            } catch(error) {
            }

        });
        this.entities.length = 0;
        this.modules.forEach((module: ServerApplicationModule) => {
            this.entities.push(...module.getEntities());
        });

        return createConnection(this.entities).then(connection => {
            this.connection = connection;
            this.modules.forEach((module: ServerApplicationModule) => {
                module.setup(this, this.configuration);
            });
            return true;
        });
    }

public getModule(name: string) {
return this.modules.find(m => m.name === name);
}
}