import Entity from './Entity';
import {Pojo} from './types';
import BaseModel from './BaseModel';

export default class EntityElement extends BaseModel {
    public entity?: Entity;

    constructor(objectid?: number, commonName?: string, displayName?: string, entity?: Entity) {
        super(objectid, commonName, displayName);
        this.entity = entity;
    }

    public toJS(): Pojo {
        const v = super.toJS();
        if(this.entity !== undefined) {
            v.entity = this.entity.toJS();
        }
        return v;
    }

    public copy(): EntityElement {
        const v = super.copy() as EntityElement;
        v.entity = this.entity;
        return v;
    }
}

