import{List} from 'immutable';
import { Pojo } from 'classModel';
import { RECEIVE_PROJECTS, REQUEST_PROJECTS, LOAD_PROJECTS } from './types';

export function requestProjects() {
    return { type: REQUEST_PROJECTS };
}

export function fetchProjects() {
    return (dispatch: any) => {
        dispatch(requestProjects());
    }
}
export function loadProjects() {
    console.log('load');
    return {type: LOAD_PROJECTS};
}



export function receiveProjects(projects: List<Pojo.ProjectPojo>) {
    return {type:RECEIVE_PROJECTS,projects};
}
