import makeReducer from "./reducers";
import * as actions from "./actions";
import { EntitiesModule, EntityPojo } from "./types";
import { RestClient } from "./RestClient";

test("1", () => {
    const mod = new EntitiesModule();
    const restClient = new RestClient({ baseUri: "" });
    const reducer = makeReducer({ module: mod, restClient });
    const entities: EntityPojo[] = [{ name: "foo" }];
    const state = reducer(undefined, { type: "" });
    expect(state).toMatchInlineSnapshot(`
        Object {
          "entities": Array [],
        }
    `);
    const newState = reducer(state, actions.receiveEntities(entities));
    expect(newState).toMatchInlineSnapshot(`
    Object {
      "entities": Array [
        Object {
          "name": "foo",
        },
      ],
    }
  `);
});
