import BasicModelFactory from "./BasicModelFactory";
import { ModelFactory } from "./types";

const createFactory = (): ModelFactory => new BasicModelFactory();

test("1", () => {
    const f = createFactory();
    const entity = f.createEntity();
    expect(entity).toBeDefined();
    expect(entity.key).toBeDefined();
    expect(entity.key).toBeTruthy();
    expect(entity.toJS()).toMatchInlineSnapshot(`
        Object {
          "attributes": Object {
            "sectionContents": Array [],
          },
          "commonName": undefined,
          "displayName": undefined,
          "objectid": undefined,
        }
    `);
});

test("createEntityAttribute", () => {
    const f = createFactory();
    const entityAttribute = f.createEntityAttribute();
    expect(entityAttribute).toBeDefined();
    expect(entityAttribute.key).toBeDefined();
    expect(entityAttribute.key).toBeTruthy();
    const asJs = entityAttribute.toJS();
    expect(asJs.key).toBe(entityAttribute.key);
    expect(asJs).toMatchInlineSnapshot(`
    Object {
      "commonName": undefined,
      "displayName": undefined,
      "isNew": undefined,
      "key": "EntityAttribute:1",
      "objectid": undefined,
      "owner": undefined,
      "tenant": undefined,
    }
  `);
});
