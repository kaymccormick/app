import EntityAttribute from './EntityAttribute';
import EntitySection from './EntitySection';
import EntityMethod from './EntityMethod';

export default class Entity {
    public id?: number;

    public commonName?: string;

    public displayName?: string;

    public attributes?: EntitySection<EntityAttribute>;
    public methods?: EntitySection<EntityMethod>;

    public toJS(): { [propName: string]: any } {
        return { id: this.id,
            commonName: this.commonName,
            displayName: this.displayName,
            attributes: this.attributes !== undefined ? this.attributes.toJS() : undefined,
        }
    }
}


