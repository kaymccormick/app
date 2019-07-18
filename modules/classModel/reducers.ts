import { ModuleState } from './types';
import { Pojo } from 'classModel';
import { classModel as initialClassModelState } from '../../model/ApplicationState';
import {ActionTypes,LOAD_PROJECTS, RECEIVE_INITIAL_DATA,InputObject} from "./types";
import {Map,List,Set} from 'immutable';

import RestClient from '@heptet/rest-client'

interface Args { restClient: RestClient }


export default (args: Args) => (state: ModuleState = initialClassModelState, action: ActionTypes): ModuleState | undefined => {
    switch(action.type) {
        /*        case LOAD_PROJECTS:
            console.log('load projectss');
            args.restClient.getProjects().then(projects => {
                return Object.assign({},state, {projects});
            })
            */
        case RECEIVE_INITIAL_DATA:
            return Object.assign({}, state, { entities: action.result});
        default:
            return state;
    }
};
