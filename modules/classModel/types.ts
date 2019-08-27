import { Map, List } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';
import {Pojo} from 'classModel';

export interface InputObject {
    [propName: string]: any;
}
export const REQUEST_PROJECT_DATA = 'REQUEST_PROJECT_DATA';
export const LOAD_PROJECT_DATA= 'LOAD_PROJECT_DATA';
export const RECEIVE_PROJECT_DATA = 'RECEIVE_PROJECT_DATA';
export const FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA';
export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA';
export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';
export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ApplicationModule<ModuleState> {
}

export interface RequestProjectDataAction {
    type: typeof REQUEST_PROJECT_DATA;
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
export interface LoadProjectDataAction {
    type: typeof LOAD_PROJECT_DATA;

}
export interface ReceiveProjectDataAction {
    type: typeof RECEIVE_PROJECT_DATA;
    projects: List<Pojo.ProjectPojo>;
}

export type ActionTypes = ReceiveProjectDataAction | LoadProjectDataAction | RequestProjectDataAction | RequestInitialDataAction |
ReceiveInitialDataAction | LoadInitialDataAction | FetchInitialDataAction;

export type EntitiesType = Map<string, Map<number, Pojo.BasePojo>> ;
export interface ModuleState {
/* Module state fields */
    entities: EntitiesType;
    projects: List<Pojo.ProjectPojo>;
}
