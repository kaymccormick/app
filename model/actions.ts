import {MoveEntityAction,AddEntityAction,ChangeSelectionAction,AddAttributeAction,AddMethodAction,UpdateEntityAction} from './types';
import Entity from './Entity';

export const ADD_ENTITY = 'ADD_ENTITY';
export const MOVE_ENTITY = 'MOVE_ENTITY';
export const CHANGE_SELECTION = 'CHANGE_SELECTION'
export const ADD_ATTRIBUTE = 'ADD_ATTRIBUTE';
export const ADD_METHOD = 'ADD_METHOD';
export const UPDATE_ENTITY = 'UPDATE_ENTITY';

export function moveEntity(index: number, x: number, y: number): MoveEntityAction {
    return {
        type: MOVE_ENTITY,
        index, x, y };
}

export function addEntity(): AddEntityAction {
    return {
        type: ADD_ENTITY,
    };
}

export function changeSelection(index: number): ChangeSelectionAction {
    return {
        type: CHANGE_SELECTION,
        index,
    }
}
export function addAttribute(index: number): AddAttributeAction {
    return { type: ADD_ATTRIBUTE, index };
}
export function addMethod(index: number): AddMethodAction {
    return { type: ADD_METHOD, index };
}
export function updateEntity(index: number, entityData: Entity): UpdateEntityAction {
    return { type: UPDATE_ENTITY, index, entityData };
}
