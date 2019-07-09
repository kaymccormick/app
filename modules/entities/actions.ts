import{List} from 'immutable';
import { Pojo } from 'classModel';
import { RestClient } from './RestClient';
import { EntityPojo } from './types';
import GetEntitiesResponse from './rest/response/GetEntitiesResponse';

export const REQUEST_ENTITIES = 'REQUEST_ENTITIES';
export const LOAD_ENTITIES = 'LOAD_ENTITIES';
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';

export function requestEntities() {
    return { type: REQUEST_ENTITIES };
}
export function receiveEntities(entities: EntityPojo[]) {
    return { type: RECEIVE_ENTITIES, entities };
}

export function fetchEntities(restClient: RestClient) {
    if(!restClient || !restClient.getEntities) {
        console.log(restClient);
        return { type: 'NOOP'};
    }
    return (dispatch: any) => {
        dispatch(requestEntities());
        return restClient.getEntities().then((response: GetEntitiesResponse) => {
            if(response.success) {
                if(response.result) {
                    dispatch(receiveEntities(response.result));
                }
            }
        });
    }

}
export function loadEntities() {
    console.log('load');
    return {type: LOAD_ENTITIES};
}


