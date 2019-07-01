import Entity from './Entity';
import {List} from 'immutable'
import {ApplicationState, EntityUIState,ModelState} from "./types";
export const entityViewUI = {
    entityUIState: List<EntityUIState>(),
    selectedIndex: undefined,
};
export const model: ModelState = {
    entities: List<Entity>(),
};

export const initialState: ApplicationState = {
    model,
    entityViewUI
}
