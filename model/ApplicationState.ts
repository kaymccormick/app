import Entity from './Entity';
import{ List} from 'immutable'

export interface EntityUIState {
    x?: number;
    y?: number;
}
export interface EntityViewUIState {
  selectedIndex: number|undefined;
  entityUIState: List<EntityUIState>;
}
export interface ModelState {
    entities: List<Entity>;
}

export interface ApplicationState {
    model: ModelState;
    entityViewUI: EntityViewUIState;
}

export const initialState: ApplicationState = {
    model: {
      entities: List<Entity>(),
    },
    entityViewUI: {
        entityUIState: List<EntityUIState>(),
	selectedIndex: undefined;
    },
}
