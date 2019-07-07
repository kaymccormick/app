import { ServerConfiguration } from './ServerConfiguration';
import { Application } from './Application';

export abstract class ServerApplicationModule {
    public name: string = '';
    public key: string = '';
    public constructor() {
    }
    public abstract setup(app: Application, config: ServerConfiguration): void
    public abstract getEntities(): any[];
}

