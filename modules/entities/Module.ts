import {ApplicationModule} from '../../src/ApplicationModule';
import {Configuration} from '../../src/Configuration';
import reducer from './reducers';
import * as actions from './actions';
import {RestClient} from './RestClient';
import { EntitiesViewContainer } from './components/containers/EntitiesViewContainer';
import { WebApplication } from '../../src/WebApplication';
import uuidv4 from 'uuid/v4';

export class Module extends ApplicationModule {
    public restClient?: RestClient;
    public name: string = 'entities';
    public key: string = 'entities';
    public id: string;

    public constructor() {
        super();
        this.id = uuidv4();
        this.actions = actions;
//        console.log(`${this.id} setting rest client`);
        this.restClient = new RestClient({ baseUri: '/cme'});
//        console.log(`${this.id} ${this.restClient}`);
    }

    public getInitialState(): any {
        return {
            entities: [],
        }
    }

    public getReducers(): any {
        if(!this.restClient) {
            throw new Error(`${this.id} No rest client`);
        }
        const r = reducer({module: this,restClient:this.restClient});
        console.log(r);
        return r;

    }
    public setup(app: WebApplication, config: Configuration) {
        //const restClient = config.getResource('restClient');
        //this.restClient = restClient;
    }

    public getMainComponent(): any {
        return EntitiesViewContainer;
    }

}

