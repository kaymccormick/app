import Entity from './entity/Entity';
import {List} from 'immutable'
import {ApplicationState, EntityUIState,ModelState,ClassModelState} from "./types";
export const entityViewUI = {
    entityUIState: List<EntityUIState>(),
    selectedIndex: undefined,
};
export const model: ModelState = {
    entities: List<Entity>(),
};
export const classModel: ClassModelState = {
};

export const initialState: ApplicationState = {
    model,
    entityViewUI
}
