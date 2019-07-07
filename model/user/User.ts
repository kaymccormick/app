
import BaseModel from '../BaseModel';

export default class User extends BaseModel {
    public firstName?: string;
    public lastName?: string;
    public middleNameOrInitial?: string;
    public constructor(firstName?: string, lastName?: string, middleNameOrInitial?: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleNameOrInitial = middleNameOrInitial;
    }
}

