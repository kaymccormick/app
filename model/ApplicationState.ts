import Entity from './entity/Entity';
import {List} from 'immutable'
import {ApplicationState, EntityUIState,ModelState,ClassModelState} from "./types";
import { Pojo  }from 'classModel';
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

export const initialState: ApplicationState = {
    model,
    entityViewUI,
    classModel,
}
