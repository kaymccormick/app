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

export const initialState: ApplicationState = {
  entities: List<Entity>(),
  ui: {
  entityUIState: List<EntityUIState>(),
  },
}
