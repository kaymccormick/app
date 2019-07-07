import{List} from 'immutable';
import { Pojo } from 'classModel';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const LOAD_PROJECTS= 'LOAD_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

/*export function fetchProjects() {
return (dispatch) => {
dispatch(requestProjects());
}
}*/
export function loadProjects() {
console.log('load');
    return {type: LOAD_PROJECTS};
}



export function receiveProjects(projects: List<Pojo.ProjectPojo>) {
return {type:RECEIVE_PROJECTS,projects};
}
