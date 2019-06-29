import EntityElement from './EntityElement';

export default class EntityMethod extends EntityElement {
    public toJS(): { id?: number; commonName?: string } {
        return { id: this.id, commonName: this.commonName };
    }
}

	