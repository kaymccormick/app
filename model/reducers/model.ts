import { Action } from '../types'
import { ADD_ENTITY, UPDATE_ENTITY, ADD_ATTRIBUTE } from '../actions';
import {ModelFactory,ModelState, UpdateEntityAction, AddAttributeAction} from "../types";
import Entity from '../Entity';
import EntityAttribute from '../EntityAttribute';
import { model as initialModelState } from '../ApplicationState';
import {List} from 'immutable';

const model = (factory: ModelFactory) => (state: ModelState = initialModelState, action: Action): ModelState|undefined => {
    switch(action.type) {
        case ADD_ENTITY:
            console.log(state.entities);
            const ary = state.entities || List<Entity>();
            const entity = factory.createEntity(undefined, 'unnamed');
            return Object.assign({}, state, { entities: ary.push(entity) });
        case UPDATE_ENTITY:
            console.log('update');
            const a = action as UpdateEntityAction;
            const e = state.entities.get(a.index);
            if(e) {
                e.updateFrom(a.entityData);
                return Object.assign({}, state, { entities: state.entities.set(a.index, e) });
            }
            return state;
        case ADD_ATTRIBUTE:
            console.log('add attribute');
            const index = (action as AddAttributeAction).index;
            if(index === undefined || index === -1) {
                console.log('index invalid');
                return state;
            }
            const entity1 = state.entities.get(index);
            if(entity1) {
                const entity2 = entity1.copy();
                if(entity2.attributes && entity2.attributes.sectionContents) {

                    console.log('here');
                    const att = factory.createEntityAttribute(undefined, undefined, undefined, entity2);
                    //entity2.attributes.sectionContents = entity2.attributes.sectionContents.push(new EntityAttribute());
                }
                console.log(entity2.toJS());
                return Object.assign({}, state, { entities: state.entities.set(index, entity2) });
            }
            return state;
        default:
            return state;
    }
}
export default (factory: ModelFactory) => model(factory);
