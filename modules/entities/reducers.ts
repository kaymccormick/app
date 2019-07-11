import { ClassModelState, Action} from '../../model/types';
import { EntitiesState, EntitiesActionTypes, EntityPojo,LOAD_ENTITIES,RECEIVE_ENTITIES,SELECT_ITEM } from './types';
import { ApplicationModule } from '../../src/ApplicationModule';
import { ApplicationModuleType } from '../../src/types';
import {List,Map} from 'immutable';

import {RestClient} from './RestClient';

export interface Args {
 module: ApplicationModuleType;
 restClient: RestClient
 }
 
export default (args: Args) => (
  state: EntitiesState = args.module.getInitialState(),
  action: EntitiesActionTypes): EntitiesState | undefined => {
  console.log(action.type);
    switch(action.type) {
        case RECEIVE_ENTITIES:
            const a = action;
            const entitiesMap = Map<string, EntityPojo>(List<EntityPojo>(a.entities).filter(e => e != null).map((entity) => [entity!.name, entity]));
            return Object.assign({}, state, { entitiesMap, entities: a.entities });
            case SELECT_ITEM:
            const id = action.item.id;
console.log(id);
            const match = /entities-([^-]*)/.exec(id);
            if(match) {
            return Object.assign({}, state, { ui: Object.assign({}, state.ui, { entities: [...state.ui.entities, { name: match[1] }] }) });
            }
            return state;
        default:
            return state;
    }
};
