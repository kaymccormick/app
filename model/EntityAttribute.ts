import AttributeType from './AttributeType';

export default class EntityAttribute {
    public id?: number;

    public commonName?: string;

    public attributeType?: AttributeType;

public toJS(): { id?: number, commonName?: string } {
return { id: this.id, commonName: this.commonName };
}
}

	