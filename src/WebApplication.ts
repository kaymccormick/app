import RestClient from '@heptet/rest-client'
import {Configuration} from './Configuration';
import {ApplicationModule,ApplicationModuleArgs} from './ApplicationModule';
import { Store, applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState,Action } from '../model/types';
import { AppLogger } from './AppLogger';
import { ModuleType } from './types';

export interface WebApplicationArgs{
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: any;
    restClient: RestClient;
}

export class WebApplication {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    public configJs: any;
    public logger: AppLogger;
    public restClient: RestClient;
    // not sure what action is
    public store?: Store<ApplicationState, Action>;
    /**
     * Convenience getter for modules which deferes to confiration.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public get modules(): ApplicationModule<any>[] {
     return this.configuration.modules;
    }

    public configuration: Configuration;
    public constructor(args: WebApplicationArgs) {
        this.configJs = args.config;
        this.configuration = new Configuration();
        this.logger = new AppLogger();
        this.restClient = args.restClient;
    }

/* for future listeners to the store */
    public handleChange(): void {
    }

    public init(): void {
        const args: ApplicationModuleArgs = {
	  logger: this.logger,
	  restClient: this.restClient,
	  };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const modules = this.configJs.modules.map((ModuleClass: any): ModuleType => new ModuleClass(args));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        modules.forEach((m: ModuleType): void => m.setup(this, this.configuration));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        modules.forEach((m: ModuleType): void => this.configuration.addModule(m));

        const reducers = this.configuration.collectReducers();
        this.store = createStore(combineReducers(reducers),
            compose(applyMiddleware(thunk),
                ...(window !== undefined
                // @ts-ignore
	&& window.__REDUX_DEVTOOLS_EXTENSION__ ?
                // @ts-ignore
                    [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.store!.subscribe(this.handleChange);
    }


}
