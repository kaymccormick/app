import { Map } from 'immutable';
import {Pojo} from 'classModel';

jest.mock('@heptet/rest-client', () => {
    return function() {
        return {getAll: () => Promise.resolve({}),
        };
    };
});

import RestClient from '@heptet/rest-client';
import actionsFn from './actions';
import {FETCH_INITIAL_DATA,REQUEST_INITIAL_DATA} from './types';
import { createRestClient } from '../../src/testUtils';

const restClient = new RestClient({baseUri:'', logDebug: (arg) => console.log(arg)});

const actions = actionsFn(restClient);
const { fetchInitialData, intermediateReceiveInitialData } = actions;

beforeAll(() => {
});

test('fetchInitialData', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    return fetchInitialData()(dispatch).then((result) => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_INITIAL_DATA});
    });
});

test('intermediateReceiveInitialData', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    const result = Map<string, Map<number, Pojo.BasePojo>>();
    // @ts-ignore
    const fn: (arg: any) => any = intermediateReceiveInitialData(result);
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
    const fn: (arg: any) => any = receiveInitialData(result);
    const r = fn (dispatch);
    if(r && typeof r.then === 'function'){
        return r.then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_INITIAL_DATA});
        });
    }
});
  
