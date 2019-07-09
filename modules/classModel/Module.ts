import {ApplicationModule} from '../../src/ApplicationModule';
import {Configuration} from '../../src/Configuration';
/*import {EntityCore} from 'classModel';*/
import reducer from './reducers';
import * as actions from './actions';
import { ClassModelContainer } from '../../components/containers/ClassModel/ClassModelContainer';
import { WebApplication } from '../../src/WebApplication';
import {ClassModelState} from "../../model/types";

import RestClient from '@heptet/rest-client'
/*export type Args = {
  restClient:RestClient,
}*/

export class Module extends ApplicationModule<ClassModelState> {
    public restClient?: RestClient;
    public name: string = 'classModel';
    public key: string = 'classModel';

    public constructor() {
        super();
        this.actions = actions;
    }

    public getInitialState(): any {
    }

    public getReducers(): any {
        /*KM1 if(!this.restClient) {
throw new Error('');
}*/
        const r = reducer({restClient:this.restClient!});
        console.log(r);
        return r;

    }
    public setup(app: WebApplication, config: Configuration) {
        const restClient = config.getResource('classModelRestClient');
        this.restClient = restClient;
    }

    public getMainComponent() {
        return ClassModelContainer;
    }
}


