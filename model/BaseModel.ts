import Tenant from './core/Tenant';
import User from './user/User';

export default class BaseModel {
    public objectid?: number;
    public commonName?: string;
    public displayName?: string;
    public tenant?: Tenant;
    public owner?: User;
}
