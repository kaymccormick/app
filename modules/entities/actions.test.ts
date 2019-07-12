import actionsFn from './actions';
import {REQUEST_ENTITIES} from './types';

const actions = actionsFn();
const { fetchEntities } = actions;

import RestClient from './RestClient';
jest.mock('./RestClient');/*, () => {
return jest.fn().mockImplementation(() => {
return {getEntities: mockGetEntities};
});
});*/
beforeAll(() => {
//@ts-ignore
    RestClient.mockImplementation(() => {
        return {
            getEntities: () => Promise.resolve([]),
        };
    });
});

test('fetchEntities', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    return fetchEntities(new RestClient({baseUri:''}))(dispatch).then(() => {
        console.log(dispatch.mock.calls);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_ENTITIES});
    });
});
