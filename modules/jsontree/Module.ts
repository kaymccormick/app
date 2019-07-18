import uuidv4 from 'uuid/v4';
import {List,Map} from 'immutable';
import {ApplicationModule, ApplicationModuleArgs} from '../../src/ApplicationModule';
import {Configuration} from '../../src/Configuration';
import reducer from './reducers';
import * as actions from './actions';
import { WebApplication } from '../../src/WebApplication';
import {ModuleState} from './types';

export class Module extends ApplicationModule<ModuleState> {
    public name: string = 'jsontree';
    public key: string = 'jsontree';
    public id: string;

    public constructor(args: ApplicationModuleArgs) {
        super(args);
        this.id = uuidv4();
        this.actions = actions;
    }

    public getInitialState(): ModuleState {
        return {
        }
    }

    public getReducers(): any {
        return reducer({module: this});
    }
    public setup(app: WebApplication, config: Configuration) {
    }
    public getMainComponent(): Promise<any> {
        return import('./components/MainComponent');
    }
}

        