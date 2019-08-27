import { ModuleState } from './types';
import { Pojo } from 'classModel';
import { classModel as initialClassModelState } from '../../model/ApplicationState';
import {ActionTypes, RECEIVE_INITIAL_DATA,RECEIVE_PROJECT_DATA,InputObject} from "./types";
import {Map,List,Set} from 'immutable';

import RestClient from '@heptet/rest-client'

interface Args { restClient: RestClient }


export default (args: Args) => (state: ModuleState = initialClassModelState, action: ActionTypes): ModuleState | undefined => {
    switch(action.type) {
        case RECEIVE_PROJECT_DATA:
            return Object.assign({}, state, {projects : action.projects});
        case RECEIVE_INITIAL_DATA:
            return Object.assign({}, state, { entities: action.result});
        default:
            return state;
    }
};
