import { ClassModelState, Action} from '../../model/types';
import { EntitiesState, ReceiveEntitiesAction } from './types';
import {LOAD_ENTITIES,RECEIVE_ENTITIES} from "./actions";
import { ApplicationModule } from '../../src/ApplicationModule';

import {RestClient} from './RestClient';

export interface Args { module: ApplicationModule; restClient: RestClient }
export default (args: Args) => (state: EntitiesState = args.module.getInitialState(), action: Action): EntitiesState | undefined => {
    switch(action.type) {
        case RECEIVE_ENTITIES:
            const a = action as ReceiveEntitiesAction;
            return Object.assign({}, state, { entities: a.entities });
        default:
            return state;
    }
};
