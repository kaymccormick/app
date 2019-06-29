import EntityAttribute from './EntityAttribute';

export default class Entity {
    public id?: number;

    public commonName?: string;

    public displayName?: string;

    public attributes?: EntityAttribute[];

public toJS(): { id?: number, commonName?: string, displayName?: string,
attributes: {}[] } {
return { id: this.id,
commonName: this.commonName,
displayName: this.displayName,
attributes: this.attributes !== undefined ? this.attributes.map(a => a.toJS()) : [],
}
}
}


