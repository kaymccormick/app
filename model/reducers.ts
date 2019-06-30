import { combineReducers } from 'redux';
import { ApplicationState, initialState, EntityUIState } from './ApplicationState';
import { ADD_ENTITY,MOVE_ENTITY } from './actions';
import { Action, MoveEntityAction, AddEntityAction } from './types';
import Entity from './Entity';

function moveEntity(state: ApplicationState, action: Action): ApplicationState {
    switch(action.type) {
        case MOVE_ENTITY:
            const a = action as MoveEntityAction;
            console.log(action);
            return Object.assign({}, state, { ui: Object.assign({}, state.ui,
                { entityUIState: state.ui.entityUIState.set(a.index,
                    Object.assign({}, state.ui.entityUIState.get(a.index), { x: a.x, y: a.y })) }) });
        default:
            return state;
    }
}

function addEntity(state: ApplicationState, action: Action): ApplicationState {
    switch(action.type) {
        case ADD_ENTITY:
            return Object.assign({}, state, { entities: state.entities.push(new Entity()),
                ui: Object.assign({}, state.ui, { selectedEntityIndex: state.entities.count, "entityUIState": state.ui.entityUIState.push({}) }),
            });
        default:
            return state;
    }
}

function entityViewApp(state: ApplicationState = initialState, action: Action): ApplicationState {
    return addEntity(moveEntity(state, action), action);
}

export default entityViewApp;
