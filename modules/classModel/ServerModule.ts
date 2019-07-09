import {ServerApplicationModule} from '../../src/ServerApplicationModule';
import {ServerConfiguration} from '../../src/ServerConfiguration';
import EntityCore from 'classModel/lib/src/entityCore';
import {TypeManager} from 'classModel/lib/src/TypeManager';
import { Factory } from 'classModel/lib/src/entity/core/Factory';
import { Application } from '../../src/Application';

export class ServerModule extends ServerApplicationModule {
    public name: string = 'classModel';
    public key: string = 'classModel';

    // @ts-ignore
    public typeManager: TypeManager;

    public setup(app: Application, config: ServerConfiguration) {
        const factory = new Factory(app.logger);
        const tm = new TypeManager({connection: app.connection!,
            createdBy: 'www', logger: app.logger,
            factory});
        this.typeManager = tm;
    }

    public getEntities(): any[] {
        return Object.values(EntityCore);
    }



}
