import { ClassModelState, Action} from '../types';
import { classModel as initialClassModelState } from '../ApplicationState';
import {LOAD_PROJECTS} from "../actions/classModel";

import RestClient from '@heptet/rest-client'

interface Args { restClient: RestClient }
export default (args: Args) => (state: ClassModelState = initialClassModelState, action: Action): ClassModelState | undefined => {
    switch(action.type) {
        case LOAD_PROJECTS:
        console.log('load projectss');
            args.restClient.getProjects().then(projects => {
                return Object.assign({},state, {projects});
            })
        default:
            return state;
    }
};
