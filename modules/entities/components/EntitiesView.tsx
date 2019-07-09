import React from 'react';
import ReactDataGrid from 'react-data-grid';
import * as Components from './';
import { List } from 'immutable'
import classNames from 'classnames';
import {ApplicationState} from "../../../model/types";
import {EntitiesState,EntityPojo} from '../types';
import {ApplicationModule} from '../../../src/ApplicationModule';
import Site from '../../../model/site/Site';

export interface EntitiesViewProps {
    entities?: EntitiesState;
    fetchEntities?: () => void;
    module?: ApplicationModule;
    site?: Site;
}

/* used in MainView */
class EntitiesView extends React.Component<EntitiesViewProps> {

    state: any = { };
    public constructor(props: EntitiesViewProps) {
        super(props);
    }

    public componentDidMount() {
        console.log('moutn');
        if(this.props.fetchEntities) {
            console.log('fetch entities');
            this.props.fetchEntities();
        }
    }

    public render() {
        const model = this.props.entities;
        const content = model && model.entities ? model.entities.map((entity: EntityPojo) => entity ? <Components.Entity key={entity.name} entity={entity}/> :null ) : null;
        return <div>{content}</div>;
    }
}
export { EntitiesView };
export default EntitiesView;

