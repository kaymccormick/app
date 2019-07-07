import { Application } from './Application';
import {ServerApplicationModule} from './ServerApplicationModule';
import winston from 'winston';
import EntityCore from 'classModel/lib/src/entityCore';

const logger = winston.createLogger({transports:[new winston.transports.Console()]});

test('construct', () => {
    expect(new Application(logger)).toBeDefined();
});
test('construct & init', () => {
    const a = new Application(logger);
    expect(a).toBeDefined();
    a.init();
    a.modules.forEach((m: ServerApplicationModule) => {
        console.log(m);
    });
    if(!a.connection){
        return;
    }
    return a.connection.getRepository(EntityCore.Project).find().then(p =>console.log(p));
});
