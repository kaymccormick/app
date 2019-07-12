import { ServerApplicationModule } from './ServerApplicationModule';
import { Resources }from './types';
export class ServerConfiguration {
    protected resources: Resources = {};
    public modules: ServerApplicationModule[] = [];
    public addModule(module: ServerApplicationModule): void {
        this.modules.push(module);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public addResource(resourceName: string, resource: any): void {
        this.resources[resourceName] = resource;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getResource(name: string): any {
        return this.resources[name];
    }
}
