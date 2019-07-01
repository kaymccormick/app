import KeyManager from './KeyManager';
import { ModelFactory } from './types';
import * as Model from './';

export default class BasicModelFactory implements ModelFactory {
    public keyManager: KeyManager;

    public constructor() {
        this.keyManager = new KeyManager();
    }

    public createEntity(objectid?: number, commonName?: string, displayName?: string | undefined) {
        const key = this.keyManager.getKey('Entity');
        const entity = new Model.Entity(objectid, commonName, displayName);
        entity.key = key.toString();
        return entity;
    }

    public createEntityAttribute(objectid?: number, commonName?: string, displayName?: string | undefined, entity?: Model.Entity) {

        const key = this.keyManager.getKey('EntityAttribute');
        const att = new Model.EntityAttribute(objectid, commonName, displayName, entity);
        att.key = key;
        if(entity) {
            entity.attributes.add(att);
        }
        return att;
    }
}
