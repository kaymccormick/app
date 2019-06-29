import EntityElement from './EntityElement';
import { Pojo } from './types';

export default class EntitySection<T extends EntityElement> {
    public sectionContents?: T[];

    public toJS(): Pojo {
        return { sectionContents: this.sectionContents ? this.sectionContents.map(item => item.toJS()) : undefined };
    }
}
