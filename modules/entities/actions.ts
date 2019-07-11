import{List} from 'immutable';
import { Pojo } from 'classModel';
import { RestClient } from './RestClient';
import { EntityPojo, REQUEST_ENTITIES, LOAD_ENTITIES, RECEIVE_ENTITIES, ADD_SELECTED_ENTITIES, SELECT_ITEM, EntitiesActionTypes } from './types';
import GetEntitiesResponse from './rest/response/GetEntitiesResponse';


export function selectItem(item: any): EntitiesActionTypes {
return { type: SELECT_ITEM, item };
}

export function addSelectedEntities(selectedEntities: any): EntitiesActionTypes {
return { type: ADD_SELECTED_ENTITIES, selectedEntities };
}

export function requestEntities(): EntitiesActionTypes {
    return { type: REQUEST_ENTITIES };
}
export function receiveEntities(entities: EntityPojo[]): EntitiesActionTypes {
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
export function loadEntities(): EntitiesActionTypes {
    console.log('load');
    return {type: LOAD_ENTITIES};
}


