import RestClient from '@heptet/rest-client';
import { EntityPojo, REQUEST_ENTITIES, LOAD_ENTITIES,
    RECEIVE_ENTITIES, ADD_SELECTED_ENTITIES, SELECT_ITEM,
    EntitiesActionTypes } from './types';
import GetEntitiesResponse from './rest/response/GetEntitiesResponse';
import { addMenuItem } from '../../modules/menus/actions';

export default (restClient: RestClient) => {
    const selectItem = (item: any): EntitiesActionTypes => {
        return { type: SELECT_ITEM, item };
    };

    const addSelectedEntities = (selectedEntities: any): EntitiesActionTypes => {
        return { type: ADD_SELECTED_ENTITIES, selectedEntities };
    };

    const requestEntities = (): EntitiesActionTypes => {
        return { type: REQUEST_ENTITIES };
    }
    const receiveEntities = (entities: EntityPojo[]): EntitiesActionTypes => {
        return { type: RECEIVE_ENTITIES, entities };
    };
    const intermediateReceiveEntities = (entities: EntityPojo[]): (dispatch: any) => void => {
        return (dispatch: any) => {
            dispatch(receiveEntities(entities));
            const entitiesKey = 'entities';
            dispatch(addMenuItem({title: 'Entities', parentKey: '', key: entitiesKey}));
            entities.forEach((entity) => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                dispatch(addMenuItem({title: entity.name!, parentKey: entitiesKey,
                    key: `${entitiesKey}-${entity.name}`}));
            });
        };
    };

    const fetchEntities = (restClient: RestClient) => {
        if(!restClient || !restClient.getEntities) {
            console.log(restClient);
            return { type: 'NOOP'};
        }
        return (dispatch: any) => {
            dispatch(requestEntities());
            return restClient.getEntities().then((response: GetEntitiesResponse) => {
                if(response.success) {
                    if(response.result) {
                        dispatch(intermediateReceiveEntities(response.result));
                    }
                }
            });
        }

    };

    const loadEntities = (): EntitiesActionTypes => {
        console.log('load');
        return {type: LOAD_ENTITIES};
    };

    return { selectItem,
        addSelectedEntities,
        requestEntities,
        receiveEntities,
        intermediateReceiveEntities,
        fetchEntities,
        loadEntities,
    };
};
