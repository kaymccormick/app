import {MoveEntityAction,AddEntityAction} from './types';

export const ADD_ENTITY = 'ADD_ENTITY';
export const MOVE_ENTITY = 'MOVE_ENTITY';
export const ADD_ATTRIBUTE = 'ADD_ATTRIBUTE';
export const CHANGE_SELECTION = 'CHANGE_SELECTION'

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
