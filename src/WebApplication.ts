import {Configuration} from './Configuration';
import {ApplicationModule,ApplicationModuleArgs} from './ApplicationModule';
import {Module as ClassModelModule } from '../modules/classModel';
import {Module as EntitiesModule } from '../modules/entities';
import {Module as LoggingModule } from '../modules/logging';
import {Module as MenusModule } from '../modules/menus';
import { Store, applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState,Action } from '../model/types';
import { AppLogger } from './AppLogger';

const modules = [];
const relModulePath = '../modules';

export interface WebApplicationArgs{
  config: any;
}

export class WebApplication {
   public configJs: any;
    public logger: AppLogger;
    public store?: Store<ApplicationState, Action>;
    public get modules(): ApplicationModule<any>[] { return this.configuration.modules; }

    public configuration: Configuration;
    public constructor(args: WebApplicationArgs) {
        this.configJs = args.config;
        this.configuration = new Configuration();
        this.logger = new AppLogger();
    }

    public handleChange() {
    }

    public init(): void {
        this.logger.debug('init');
    /* This is totaly gross! */
    const args: ApplicationModuleArgs = { logger: this.logger };
    const modules = this.configJs.modules.map((Module: any) => new Module(args));
    modules.forEach((m: any) => m.setup(this, this.configuration));
    modules.forEach((m: any) => this.configuration.addModule(m));

/*        const m = new ClassModelModule(args);
        m.setup(this, this.configuration);
        this.configuration.addModule(m);
        const m2 = new EntitiesModule(aergs);
        m2.setup(this, this.configuration);
        this.configuration.addModule(m2);
        const m3 = new LoggingModule(args);
        m3.setup(this, this.configuration);
        this.configuration.addModule(m3);
        const m4 = new MenusModule(args);
        m4.setup(this, this.configuration);
        this.configuration.addModule(m4);
*/
        const reducers = this.configuration.collectReducers();
        // @ts-ignore
        this.store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
        this.store!.subscribe(this.handleChange);
    }


}
