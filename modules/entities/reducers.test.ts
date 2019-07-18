import makeReducer from "./reducers";
import actionFn from "./actions";
import { EntityPojo } from "./types";
import { Module } from "./Module";
import RestClient from "@heptet/rest-client";
jest.mock('@heptet/rest-client');
import { AppLogger } from '../../src/AppLogger';

const actions = actionFn();

beforeEach((): void => {
// @ts-ignore
    RestClient.mockClear();
});

test("1", () => {
    const restClient = new RestClient({ baseUri: "" });
    const mod = new Module({ logger: new AppLogger(), restClient });
    const reducer = makeReducer({ module: mod, restClient });
    const entities: EntityPojo[] = [{ name: "foo" }];
    // @ts-ignore
    const state = reducer(undefined, { type: "test" });
    expect(state).toMatchInlineSnapshot(`
    Object {
      "entities": Array [],
      "entitiesMap": Immutable.Map {},
      "ui": Object {
        "entities": Array [],
      },
    }
  `);
    const newState = reducer(state, actions.receiveEntities(entities));
    expect(newState).toMatchSnapshot();
});
