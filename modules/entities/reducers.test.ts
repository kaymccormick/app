import sinon from 'sinon';
import RestClient from '@heptet/rest-client';
import makeReducer from "./reducers";
import actionFn from "./actions";
import { EntityPojo } from "./types";
import { Module } from "./Module";
import { AppLogger } from '../../src/AppLogger';
import { createRestClient } from '../../src/testUtils';

//@ts-ignore
const restClient: RestClient = sinon.createStubInstance(RestClient, { getAll: sinon.stub().returns(Promise.resolve({})) });
const actions = actionFn(restClient);

beforeEach((): void => {
});

test("state", () => {
    const restClient = createRestClient();
    const mod = new Module({ logger: new AppLogger(), restClient });
    const reducer = makeReducer({ module: mod, restClient });
    const entities: EntityPojo[] = [{ name: "foo" }];
    // @ts-ignore
    const state = reducer(undefined, { type: "test" });
    expect(state).toMatchSnapshot();
    const newState = reducer(state, actions.receiveEntities(entities));
    expect(newState).toMatchSnapshot();
});

