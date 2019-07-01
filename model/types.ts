import {ADD_ATTRIBUTE, ADD_ENTITY, MOVE_ENTITY} from './actions';
import {List} from "immutable";
import Entity from "./Entity";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface Pojo {[propName: string]: any}
export interface Action {
    type: string;
}
export interface MoveEntityAction extends Omit<Action, 'type'> {
    type: "MOVE_ENTITY";
    index: number;
    x: number;
    y: number;
}
export interface AddEntityAction extends Omit<Action, 'type'> {
    type: "ADD_ENTITY";
}
export interface ChangeSelectionAction extends Omit<Action, 'type'> {
type: "CHANGE_SELECTION";
index: number;
}

export interface EntityUIState {
    x?: number;
    y?: number;
}

export interface EntityViewUIState {
    selectedIndex: number | undefined;
    entityUIState: List<EntityUIState>;
}

export interface ModelState {
    entities: List<Entity>;
}

export interface ApplicationState {
    model: ModelState;
    entityViewUI: EntityViewUIState;
}
export interface AddAttributeAction extends Omit<Action, 'type'> {
type:"ADD_ATTRIBUTE";
  index:number;
  }
export interface AddMethodAction extends Omit<Action, 'type'> {
type:"ADD_METHOD";
  index:number;
  }

export interface UpdateEntityAction extends Omit<Action, 'type'> {
type:"UPDATE_ENTITY";
  index:number;
  entityData: Entity;
  }



export interface EntityViewState {
x?: number;
y?: number;
}
