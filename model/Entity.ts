import { List } from 'immutable';

import EntityAttribute from './EntityAttribute';

export default class Entity {
    public id?: number;

    public commonName?: string;

    public displayName?: string;

    public attributes?: List<EntityAttribute>;
}
