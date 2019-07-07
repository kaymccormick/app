import { Configuration } from './Configuration';

export interface Actions {
    [actionName: string]: any;
}

export abstract class ApplicationModule {
    public actions: Actions = {};
    public name: string = '';
    public key: string = '';
    public constructor() {
    }
    public abstract setup(config: Configuration): void
    public abstract getReducers(): any;
    public abstract getInitialState(): any;
}

