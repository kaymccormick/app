import {ApplicationModule, ApplicationModuleArgs} from '../../src/ApplicationModule';
import {Configuration} from '../../src/Configuration';
import {Pojo} from 'classModel';
import reducer from './reducers';
import actions from './actions';
import { WebApplication } from '../../src/WebApplication';
import {ModuleState, EntitiesType} from './types';

import {Map,List,Set} from 'immutable';

import RestClient from '@heptet/rest-client'
/*export type Args = {
  restClient:RestClient,
}*/

export class Module extends ApplicationModule<ModuleState> {
    public restClient?: RestClient;
    public name: string = 'classModel';
    public key: string = 'classModel';

    public constructor(args: ApplicationModuleArgs) {
        super(args);
        this.actions = actions(args.restClient);
        this.restClient = args.restClient;
    }

    public getInitialState(): ModuleState {
        return {
            entities: Map<string, Map<number, Pojo.BasePojo>>(),
        }
    }
    

    public getReducers(): any {
        return reducer({restClient:this.restClient!});

    }
    public setup(app: WebApplication, config: Configuration) {
    }

    public getMainComponent(): Promise<any> {
        return import('./components/MainComponent');
    }
}


