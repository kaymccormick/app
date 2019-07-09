import Entity from './entity/Entity';
import {List,Map} from 'immutable'
import {ApplicationState, EntityUIState,ModelState,ClassModelState} from "./types";
import { Pojo  }from 'classModel';
import {EntitiesState, EntityPojo} from '../modules/entities/types';
//Deprecrate this module

export const entityViewUI = {
    entityUIState: List<EntityUIState>(),
    selectedIndex: undefined,
};
export const model: ModelState = {
    entities: List<Entity>(),
};
export const classModel: ClassModelState = {
    projects:List<Pojo.ProjectPojo>(),
};
export const entities: EntitiesState = {
    entities: [],
    entitiesMap: Map<string,EntityPojo>(),
    ui: { entities: [] },
}

export const initialState: ApplicationState = {
    model,
    entityViewUI,
    classModel,
    entities,
}
