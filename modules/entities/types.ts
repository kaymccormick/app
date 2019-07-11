import { Map } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';

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

export interface EntityUIState {
    name: string;
}

export interface EntitiesUIState {
    entities: EntityUIState[];
}

export interface EntitiesState {
    entities?: EntityPojo[];
    entitiesMap?: Map<string, EntityPojo>;
    ui: EntitiesUIState;
}

export interface EntityPojo {
    name?: string;
    tableName?: string;
    columns?: EntityColumnPojo[];
}
export interface EntityColumnPojo {
    propertyName?: string;
    type?: string;
    isPrimary?: boolean;
    isNullable?: boolean;
    isGenerated?: boolean;
    comment?: string;
    isArray?: boolean ;
    propertyPath?: string;
    isObjectId?: boolean;
}
