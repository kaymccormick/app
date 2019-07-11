import { Configuration } from './Configuration';
import{ WebApplication } from './WebApplication';

export interface Actions {
    [actionName: string]: any;
}

export abstract class ApplicationModule<S> {
    public actions: Actions = {};
    public name: string = '';
    public key: string = '';
    public constructor() {
    }
    public abstract setup(app: WebApplication, config: Configuration): void
    public abstract getReducers(): any;
    public abstract getInitialState(): S;
    public abstract getMainComponent(): Promise<any>;
    
}

