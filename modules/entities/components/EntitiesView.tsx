import { DropTarget,DropTargetMonitor,DropTargetConnector}from 'react-dnd';
import React from 'react';
import ReactDataGrid from 'react-data-grid';
import * as Components from './';
import { List,Map } from 'immutable'
import classNames from 'classnames';
import {ApplicationState} from "../../../model/types";
import {EntitiesState,EntityPojo,EntityUIState} from '../types';
import {ApplicationModule} from '../../../src/ApplicationModule';
import Site from '../../../model/site/Site';

export interface EntitiesViewProps {
    entities?: EntitiesState;
    fetchEntities?: () => void;
    module?: ApplicationModule<any>;
    site?: Site;
}

const spec = {
    drop(props: EntitiesViewProps, monitor: DropTargetMonitor, component: React.RefObject<any>) {
        const item = monitor.getItem();
        console.log(item);
    },
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
    }
}

/* used in MainView */
export default DropTarget('TreeNode', spec, collect)(class extends React.Component<EntitiesViewProps> {

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
        if(!model || !model.entities || !model.entitiesMap) {
            return null;
        }
        const e = model.ui.entities.map((ui: EntityUIState) => model.entitiesMap!.get(ui.name))
        const content = e.map((entity: EntityPojo) => entity ? <Components.Entity key={entity.name} entity={entity}/> :null );
        return <div>{content}</div>;
    }
}

);
