import EntityAttribute from './EntityAttribute';
import EntitySection from './EntitySection';
import EntityMethod from './EntityMethod';
import BaseModel from './BaseModel';

class Entity extends BaseModel {
    public attributes?: EntitySection<EntityAttribute>;
    public methods?: EntitySection<EntityMethod>;
    public description?: string;

    public toJS(): { [propName: string]: any } {
        return { objectid: this.objectid,
            commonName: this.commonName,
            displayName: this.displayName,
            attributes: this.attributes !== undefined ? this.attributes.toJS() : undefined,
        }
    }

    public updateFrom(from: Entity): void {
    	   if(from.commonName) {
    	   this.commonName = from.commonName;
	   }
	   if(from.displayName) {
	   this.displayName = from.displayName;
	   }
	   if(from.tenant) {
	   this.tenant = from.tenant;
	   }
	   if(from.owner) {
	   this.owner = from.owner;
	   }
	   }
}


export default Entity;
