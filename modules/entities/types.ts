import { Map } from 'immutable';
export interface ReceiveEntitiesAction {
    type: string;
    entities: EntityPojo[];
}
export interface EntityUIState {
name: string;
}

export interface EntitiesUIState {
  entities: EntityUIState[];
}

export interface EntitiesState {
    entities?: EntityPojo[];
    entitiesMap?: Map<String, EntityPojo>;
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
