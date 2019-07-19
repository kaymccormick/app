import { Map } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';
import {PopoverPlace} from "react-popover";
import {EntityPojo,EntityColumnPojo} from '@heptet/rest-client';
export { EntityPojo,EntityColumnPojo};

export const REQUEST_ENTITIES = 'REQUEST_ENTITIES';
export const LOAD_ENTITIES = 'LOAD_ENTITIES';
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const ADD_SELECTED_ENTITIES = 'ADD_SELECTED_ENTITIES';
export const SELECT_ITEM = 'SELECT_ITEM';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EntitiesModule extends ApplicationModule<EntitiesState> {
}

export interface ReceiveEntitiesAction {
    type: typeof RECEIVE_ENTITIES;
    entities: EntityPojo[];
}
export interface RequestEntitiesAction {
    type: typeof REQUEST_ENTITIES;
}
export interface LoadEntitiesAction {
    type: typeof LOAD_ENTITIES;
}

export interface SelectItemAction {
    type: typeof SELECT_ITEM;
    item: any;
}

export interface AddSelectedEntitiesAction {
    type: typeof ADD_SELECTED_ENTITIES;
    selectedEntities: any;
};


export type EntitiesActionTypes = ReceiveEntitiesAction | SelectItemAction | AddSelectedEntitiesAction | LoadEntitiesAction | RequestEntitiesAction;

export interface PopoverState {
    isOpen: boolean;
    preferPlace: PopoverPlace;
}

export interface EntityUIState {
    name: string;
    popover: PopoverState;
}

export interface EntitiesUIState {
    entities: EntityUIState[];
    
}

export interface EntitiesState {
    entities?: EntityPojo[];
    entitiesMap?: Map<string, EntityPojo>;
    ui: EntitiesUIState;
}

