import AttributeType from './AttributeType';
import EntityElement from './EntityElement';

export default class EntityAttribute extends EntityElement {
    public toJS(): { id?: number; commonName?: string } {
        return { id: this.id, commonName: this.commonName };
    }
}

	