import Entity from './Entity';
import{ List} from 'immutable'

export interface EntityUIState {
    x?: number;
    y?: number;
}

export interface ApplicationState {
    entities: List<Entity>;
    ui: {
        entityUIState: List<EntityUIState>;
        selectedEntityIndex?: number|undefined;
    };
}

export const initialState: ApplicationState = {
    entities: List<Entity>(),
    ui: {
        entityUIState: List<EntityUIState>(),
    },
}
