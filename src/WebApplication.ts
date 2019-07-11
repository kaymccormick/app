import {Configuration} from './Configuration';
import {ApplicationModule} from './ApplicationModule';
import {Module as ClassModelModule } from '../modules/classModel';
import {Module as EntitiesModule } from '../modules/entities';
import { Store, applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState,Action } from '../model/types';

const modules = [];
const relModulePath = '../modules';

export class WebApplication {
    public store?: Store<ApplicationState, Action>;
    public get modules(): ApplicationModule<any>[] { return this.configuration.modules; }

    public configuration: Configuration;
    public constructor() {
        this.configuration = new Configuration();
    }

    public handleChange() {
    }

    public init(): void {
    /* This is totaly gross! */
        const m = new ClassModelModule();
        m.setup(this, this.configuration);
        this.configuration.addModule(m);
        const m2 = new EntitiesModule();
        m2.setup(this, this.configuration);
        this.configuration.addModule(m2);

        const reducers = this.configuration.collectReducers();
        // @ts-ignore
        this.store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
        this.store!.subscribe(this.handleChange);
    }


}
