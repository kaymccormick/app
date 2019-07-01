import Tenant from './core/Tenant';
import User from './user/User';

export default class BaseModel {
    public objectid?: number;
    public commonName?: string;
    public displayName?: string;
    public tenant?: Tenant;
    public owner?: User;

    public copy(): BaseModel {
        const r = new BaseModel();
        r.objectid = this.objectid;
        r.commonName = this.commonName;
        r.displayName = this.displayName;
        r.tenant = this.tenant;
        r.owner = this.owner;
        return r;
    }
}
