import { ServerApplicationModule } from './ServerApplicationModule';
import { Resources }from './types';
export class ServerConfiguration {
    protected resources: Resources = {};
    public modules: ServerApplicationModule[] = [];
    public addModule(module: ServerApplicationModule) {
        this.modules.push(module);
    }
    public addResource(resourceName: string, resource: any): void {
        this.resources[resourceName] = resource;
    }
    public getResource(name: string): any {
        return this.resources[name];
    }
}
