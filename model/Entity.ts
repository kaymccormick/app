import EntityAttribute from './EntityAttribute';
import EntitySection from './EntitySection';
import EntityMethod from './EntityMethod';
import BaseModel from './BaseModel';

class Entity extends BaseModel {
    public attributes?: EntitySection<EntityAttribute> = new EntitySection<EntityAttribute>();
    public methods?: EntitySection<EntityMethod> = new EntitySection<EntityMethod>();
    public description?: string;

public constructor() {
super();
}

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

public copy(): Entity {
const r = new Entity();
    r.objectid = this.objectid;
r.commonName = this.commonName;
r.displayName = this.displayName;
r.tenant = this.tenant;
r.owner = this.owner;
r.attributes = this.attributes;
r.methods = this.methods;
r.description = this.description;
return r;
}
}



export default Entity;
