import { Module } from './Module';
import { WebApplication } from '../../src/WebApplication';
import { Configuration } from '../../src/Configuration';
import{ AppLogger} from '../../src/AppLogger';
import RestClient from '@heptet/rest-client';
import { createRestClient,createAppLogger } from '../../src/testUtils';
jest.mock('@heptet/rest-client');
jest.mock('../../src/WebApplication');
jest.mock('../../src/Configuration');

let appLogger: AppLogger;
beforeEach(() => {
    appLogger = new createAppLogger);
    // @ts-ignore
    WebApplication.mockClear();
    // @ts-ignore
    Configuration.mockClear();
    // @ts-ignore
    RestClient.mockClear();
});

test('Module.constructor', () => {
    const restClient = createRestClient();
    const m = new Module({logger: appLogger, restClient});
    expect(m).toBeDefined();
    expect(m.id).toBeDefined();
    expect(m.actions).toBeDefined();
    expect(m.restClient).toBeDefined();
});

test('Module.getInitialState', () => {
    const restClient = createRestClient();
    const m = new Module({logger: appLogger, restClient});
    const state = m.getInitialState();
    expect(state).toBeDefined();
    expect(state.entities).toStrictEqual([]);
});
test('Module.getReducers', () => {
    const restClient = createRestClient();
    const m = new Module({logger: appLogger, restClient});
    const reducers = m.getReducers();
    expect(reducers).toBeDefined();
    expect(Object.keys(reducers)).toMatchSnapshot();
});
