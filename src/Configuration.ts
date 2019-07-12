import { ApplicationModule } from './ApplicationModule';
import { Resources,Reducers }from './types';
export class Configuration {
    protected resources: Resources = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public modules: ApplicationModule<any>[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public addModule(module: ApplicationModule<any>): void {
        this.modules.push(module);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public addResource(resourceName: string, resource: any): void {
        this.resources[resourceName] = resource;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getInitialState(): any {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const initialState: any = {};
        this.modules.forEach((module): void => { initialState[module.key] = module.getInitialState(); });
        return initialState;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public collectReducers(): any {
        const reducers: Reducers = {};
        this.modules.forEach((module): void => {
            const r = module.getReducers();
            reducers[module.key] = r;
        });
        return reducers;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getResource(name: string): any {
        return this.resources[name];
    }

}
