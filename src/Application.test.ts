import { Application } from './Application';
/*import {ServerApplicationModule} from './ServerApplicationModule';*/
import winston from 'winston';
import EntityCore from 'classModel/lib/src/entityCore';

const logger = winston.createLogger({transports:[new winston.transports.Console()]});

test('construct', (): void  => {
    expect(new Application(logger)).toBeDefined();
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
test('construct & init', (): Promise<any> => {
    const a = new Application(logger);
    expect(a).toBeDefined();
    return a.init().then((x): void => {
        expect(x).toBe(true);
        /*        a.modules.forEach((m: ServerApplicationModule): void => {
            //            console.log(m);
        });*/
        if(!a.connection){
            return;
        }
        const c = a.connection;
        const rp = c.getRepository(EntityCore.Project);
        return rp.find();
    });
});
