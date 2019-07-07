import {Action, EntityViewUIState} from '../types';
import { ADD_ENTITY, ADD_ATTRIBUTE } from '../actions';
import {entityViewUI as initialState} from '../ApplicationState';

const entityViewUI = (state: EntityViewUIState = initialState, action: Action): EntityViewUIState|undefined => {
    switch(action.type) {
        case ADD_ENTITY:
            console.log('here');
            return Object.assign({}, state, { entityUIState: state.entityUIState.push({ x: 100, y: 100 }) });
            break;
        case ADD_ATTRIBUTE:
        default:
            return state;
    }
}

export default entityViewUI;
