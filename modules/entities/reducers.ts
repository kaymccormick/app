import { ClassModelState, Action} from '../../model/types';
import { EntitiesState, ReceiveEntitiesAction,EntityPojo } from './types';
import {LOAD_ENTITIES,RECEIVE_ENTITIES} from "./actions";
import { ApplicationModule } from '../../src/ApplicationModule';
import { ApplicationModuleType } from '../../src/types';
import {List,Map} from 'immutable';

import {RestClient} from './RestClient';

export interface Args { module: ApplicationModuleType; restClient: RestClient }
export default (args: Args) => (
  state: EntitiesState = args.module.getInitialState(),
  action: Action): EntitiesState | undefined => {
    switch(action.type) {
        case RECEIVE_ENTITIES:
            const a = action as ReceiveEntitiesAction;
            const entitiesMap = Map<string, EntityPojo>(List<EntityPojo>(a.entities).filter(e => e != null).map((entity) => [entity!.name, entity]));
            return Object.assign({}, state, { entitiesMap, entities: a.entities });
        default:
            return state;
    }
};
