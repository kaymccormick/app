import {ADD_ATTRIBUTE, ADD_ENTITY, MOVE_ENTITY} from './actions';
import {List,Map} from "immutable";
import Entity from "./entity/Entity";
import * as Model from './';
import {FactoryInterface} from 'classModel/lib/src/types';
import {Pojo} from 'classModel';
import {Action} from "../src/types";

export { ApplicationState } from '../src/ApplicationState';

export interface Action {
    type: string;
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type ClassModelFactory = FactoryInterface;
export interface ClassModelState{
    projects: List<Pojo.ProjectPojo>;
}


export interface ModelFactory {
    createEntity(objectid?: number, commonName?: string, displayName?: string | undefined): Model.Entity;
    createEntityAttribute(objectid?: number, commonName?: string, displayName?: string | undefined, entity?: Entity): Model.EntityAttribute;

}

export interface Pojo {[propName: string]: any}
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

export interface AddAttributeAction extends Omit<Action, 'type'> {
    type: "ADD_ATTRIBUTE";
    index: number;
}
export interface AddMethodAction extends Omit<Action, 'type'> {
    type: "ADD_METHOD";
    index: number;
}

export interface UpdateEntityAction extends Omit<Action, 'type'> {
    type: "UPDATE_ENTITY";
    index: number;
    entityData: Entity;
}

export interface MenuState {
    /** Unique key across all menus and items */
    id: string;
    /** Title / label of menu */
    title: string;
    subItems: string[]; /* Array of keys for sub items */
}

export interface MainMenuState {
    menus: Map<string, MenuState>;
}

export interface EntityViewState {
    x?: number;
    y?: number;
}
