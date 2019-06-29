import Entity from './Entity';
import {Pojo} from './types';

export default abstract class EntityElement {
    public id?: number;
    public commonName?: string;
    public displayName?: string;

    public entity?: Entity;

    public abstract toJS(): Pojo;
}
