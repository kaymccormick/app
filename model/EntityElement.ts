import Entity from './Entity';
import {Pojo} from './types';

export default  class EntityElement {
    public id?: number;
    public commonName?: string;
    public displayName?: string;

    public entity?: Entity;

    public toJS(): Pojo {
        return  {};
    }
}
