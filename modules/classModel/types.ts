import { Map, List } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';
import {Pojo} from 'classModel';

export interface InputObject {
    [propName: string]: any;
}
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const LOAD_PROJECTS= 'LOAD_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA';
export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';
export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ApplicationModule<ModuleState> {
}

export interface RequestProjectsAction {
    type: typeof REQUEST_PROJECTS;
}
export interface RequestInitialDataAction {
    type: typeof REQUEST_INITIAL_DATA;
}
export interface ReceiveInitialDataAction {
    type: typeof RECEIVE_INITIAL_DATA;
    result: InputObject;
}
export interface LoadInitialDataAction {
    type: typeof LOAD_INITIAL_DATA;
}
export interface FetchInitialDataAction {
    type: typeof FETCH_INITIAL_DATA;
}
export interface LoadProjectsAction {
    type: typeof LOAD_PROJECTS;

}
export interface ReceiveProjectsAction {
    type: typeof RECEIVE_PROJECTS;
    projects: List<Pojo.ProjectPojo>;
}

export type ActionTypes = ReceiveProjectsAction | LoadProjectsAction | RequestProjectsAction | RequestInitialDataAction |
ReceiveInitialDataAction | LoadInitialDataAction | FetchInitialDataAction;

export type EntitiesType = Map<string, Map<number, Pojo.BasePojo>> ;
export interface ModuleState {
/* Module state fields */
    entities: EntitiesType;
}
