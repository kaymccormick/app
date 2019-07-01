import { Action } from '../types'
import { ADD_ENTITY, UPDATE_ENTITY } from '../actions';
import {ModelState, UpdateEntityAction} from "../types";
import Entity from '../Entity';
import { model as initialModelState } from '../ApplicationState';
import {List} from 'immutable';

const model = (state: ModelState = initialModelState, action: Action): ModelState|undefined => {
    switch(action.type) {
        case ADD_ENTITY:
	console.log(state.entities);
	const ary = state.entities || List<Entity>();
            return Object.assign({}, state, { entities: ary.push(new Entity()) });
	    case UPDATE_ENTITY:
	      const a = action as UpdateEntityAction;
	      const e = state.entities.get(a.index);
	      if(e) {
	      	    e.updateFrom(a.entityData);
 return Object.assign({}, state, { entities: state.entities.set(a.index, e) });
	}
        default:
            return state;
    }
}
export default model;
