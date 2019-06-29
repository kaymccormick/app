import Entity from './Entity';
import{ List} from 'immutable'
import { Action } from './types';
import { ADD_ENTITY } from './actions';

export interface EntityUIState {
  x?: number;
  y?: number;
}

export interface ApplicationState {
  entities: List<Entity>;
  ui: {
    entityUIState: List<EntityUIState>;
    };
}

const initialState: ApplicationState = {
  entities: List<Entity>(),
  ui: {
  entityUIState: List<EntityUIState>(),
  },
}
function entityViewApp(state: ApplicationState = initialState, action: Action): ApplicationState {
switch(action.type) {
case ADD_ENTITY:
return Object.assign({}, state, { entities: state.entities.push(new Entity()) });
}
return state;
}
