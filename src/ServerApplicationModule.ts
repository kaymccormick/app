import { ServerConfiguration } from './ServerConfiguration';
import { Application } from './Application';

export abstract class ServerApplicationModule {
    public name: string = '';
    public key: string = '';
    public constructor() {
    }
    public abstract setup(app: Application, config: ServerConfiguration): void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract getEntities(): any[];
}

