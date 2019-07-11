import { ClassModelState} from '../../model/types';
import { classModel as initialClassModelState } from '../../model/ApplicationState';
import {LOAD_PROJECTS} from "./types";

import RestClient from '@heptet/rest-client'
import {Action} from "../../src/types";

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
