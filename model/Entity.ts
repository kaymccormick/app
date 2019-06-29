import EntityAttribute from './EntityAttribute';
import EntitySection from './EntitySection';
import EntityMethod from './EntityMethod';
import BaseModel from './BaseModel';

class Entity extends BaseModel {
    public attributes?: EntitySection<EntityAttribute>;
    public methods?: EntitySection<EntityMethod>;

    public toJS(): { [propName: string]: any } {
        return { objectid: this.objectid,
            commonName: this.commonName,
            displayName: this.displayName,
            attributes: this.attributes !== undefined ? this.attributes.toJS() : undefined,
        }
    }
}
export default Entity;
