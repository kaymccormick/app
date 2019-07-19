import { Map } from 'immutable';
import {Pojo} from 'classModel';
import RestClient from '@heptet/rest-client';
jest.mock('@heptet/rest-client')
import actionsFn from './actions';
import { FETCH_INITIAL_DATA,
    REQUEST_INITIAL_DATA,
    RECEIVE_INITIAL_DATA,
} from './types';
import { createRestClient } from '../../src/testUtils';
import { Actions } from '../../src/types';

let actions: Actions;
let fetchInitialData: () => any;;
let intermediateReceiveInitialData: () => any;
let receiveInitialData: () => any;
let restClient;

beforeAll(() => {
    restClient = createRestClient();
    actions = actionsFn(restClient);
});

test('fetchInitialData', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    return actions.fetchInitialData()(dispatch).then((result) => {
        /* Calls dispatch twice */
        expect(dispatch).toHaveBeenCalledTimes(2);
        /* First is expect initial data. */
        expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_INITIAL_DATA});
    });
});

test('intermediateReceiveInitialData', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    let result = Map<string, Map<number, Pojo.BasePojo>>();
    result = result.set('Project', Map<number, Pojo.BasePojo>());
    // @ts-ignore
    const fn: (arg: any) => any = actions.intermediateReceiveInitialData(result);
    const r = fn (dispatch);
    if(r && typeof r.then === 'function'){
        return r.then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_INITIAL_DATA});
        });
    }
});


test('receiveInitialData', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    const result = Map<string, Map<number, Pojo.BasePojo>>();
    // @ts-ignore
    const r = actions.receiveInitialData(result);
    expect(r).toBeDefined();
    expect(r).toHaveProperty('type', RECEIVE_INITIAL_DATA);
});

