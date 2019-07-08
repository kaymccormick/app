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
    return a.init().then((x) => {
        expect(x).toBe(true);
        a.modules.forEach((m: ServerApplicationModule) => {
            console.log(m);
        });
        if(!a.connection){
            return;
        }
        const c = a.connection;
        const rp = c.getRepository(EntityCore.Project);
        return rp.find().then(p =>console.log(p));
    });
});
