/** SERVER APPLICATION */
import fs from 'fs';

import path from 'path';
import {Logger} from 'winston';

import { Connection } from 'typeorm';
import {createConnection}from './Factory';
import {ServerConfiguration} from './ServerConfiguration';
import {ServerApplicationModule} from './ServerApplicationModule';

const relModulePath = '../modules';
const moduleRoot = path.join(__dirname, relModulePath);

export class Application {
    /* These are for database entities */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public init(): Promise<any> {
        fs.readdirSync(moduleRoot).filter((e): boolean => !/^\./.test(e) && fs.statSync(path.join(moduleRoot, e)).isDirectory()).forEach((ent): void => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const m = require(path.join(relModulePath, ent + '/ServerModule'));
                const serverModule = new m.ServerModule();
                this.configuration.addModule(serverModule);
            } catch(error) {
            }

        });
        this.entities.length = 0;
        this.modules.forEach((module: ServerApplicationModule): void => {
            this.entities.push(...module.getEntities());
        });

        return createConnection(this.entities).then((connection): boolean => {
            this.connection = connection;
            this.modules.forEach((module: ServerApplicationModule): void => {
                module.setup(this, this.configuration);
            });
            return true;
        });
    }

    public getModule(name: string): ServerApplicationModule|undefined {
        return this.modules.find((m): boolean => m.name === name);
    }
}