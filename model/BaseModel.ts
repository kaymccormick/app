import Tenant from './core/Tenant';
import User from './user/User';
import {Pojo} from './types';

export default class BaseModel {
    public objectid?: number;
    public commonName?: string;
    public displayName?: string;
    public tenant?: Tenant;
    public owner?: User;
    public key?: string;

    public constructor(objectid?: number, commonName?: string, displayName?: string) {
        this.objectid = objectid;
        this.commonName = commonName;
        this.displayName = displayName;
    }

    public copy(): BaseModel {
        const r = new BaseModel();
        r.objectid = this.objectid;
        r.commonName = this.commonName;
        r.displayName = this.displayName;
        r.tenant = this.tenant;
        r.owner = this.owner;
        return r;
    }

    public toJS(): Pojo {
        return { objectid: this.objectid,
            commonName: this.commonName,
            displayName: this.displayName,
            tenant: this.tenant ? this.tenant.toJS() : undefined,
            owner: this.owner ? this.owner.toJS() : undefined,
        };
    }
      
}
