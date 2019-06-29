import EntityElement from './EntityElement';
import { Pojo } from './Types';

export default class EntitySection<T extends EntityElement> {
    public sectionContents?: T[];

    public toJS(): Pojo {
        return this.sectionContents ? this.sectionContents.map(item => item.toJS()) : undefined;
    }
}
