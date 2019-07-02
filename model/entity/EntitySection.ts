import EntityElement from './EntityElement';
import { Pojo } from '../types';
import { List } from 'immutable';

export default class EntitySection<T extends EntityElement> {
    public sectionContents: List<T> = List<T>();

    public add(item: T) {
        this.sectionContents = this.sectionContents.push(item);
    }

    public toJS(): Pojo {
        return { sectionContents: this.sectionContents ? this.sectionContents.toJS() :undefined };
    }
}
