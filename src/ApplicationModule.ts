import { Configuration } from './Configuration';
import{ WebApplication } from './WebApplication';
import { AppLogger } from './AppLogger';

export interface ApplicationModuleArgs {
    logger: AppLogger;
}

export interface Actions {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    [actionName: string]: any;
}

export abstract class ApplicationModule<S> {
    public logger: AppLogger;
    public actions: Actions = {};
    public name: string = '';
    public key: string = '';
    public constructor(args: ApplicationModuleArgs) {
        this.logger = args.logger;
    }
    public abstract setup(app: WebApplication, config: Configuration): void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract getReducers(): any;
    public abstract getInitialState(): S;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract getMainComponent(): Promise<any>;
    
}

