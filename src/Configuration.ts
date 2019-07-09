import { ApplicationModule } from './ApplicationModule';
import { Resources,Reducers }from './types';
export class Configuration {
    protected resources: Resources = {};
    public modules: ApplicationModule<any>[] = [];
    public addModule(module: ApplicationModule<any>) {
        this.modules.push(module);
    }
    public addResource(resourceName: string, resource: any): void {
        this.resources[resourceName] = resource;
    }
    public getInitialState(): any {
        const initialState: any = {};
        this.modules.forEach(module => initialState[module.key] = module.getInitialState());
        return initialState;
    }

    public collectReducers() {
        const reducers: Reducers = {};
        this.modules.forEach(module => {
            const r = module.getReducers();
            reducers[module.key] = r;
        });
        return reducers;
    }
    public getResource(name: string): any {
        return this.resources[name];
    }

}
