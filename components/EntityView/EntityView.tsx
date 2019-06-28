import React, {ClassAttributes, MouseEvent, MouseEventHandler} from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext, DragSourceMonitor, DropTarget, DropTargetConnector, DropTargetMonitor} from 'react-dnd'
import Entity from '../../model/Entity';
import * as Components from './';
import EntityAdd from './Command/EntityAdd';
import { List } from 'immutable'
import { Types } from '../../src/types';

export interface EntityViewProps {
entities?: List<Entity>;
}

const spec = {
  drop(props: ClassAttributes<{}>, monitor: DropTargetMonitor, component: React.RefObject<any>) {
  console.log('drop');
  },
  };

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
return {
connectDropTarget: connect.dropTarget(),
}
}

class EntityView extends React.Component<EntityViewProps> {
//    public state: { entities: List<Entity> } = { entities: List<Entity>() };
public state: {} = {};

    render() {
        return <div className="entityView" style={{width: "100%", height: "100%"}}>{this.props.entities ? this.props.entities.map((entity: Entity): {} => <Components.Entity editMode={true} entity={entity}/>) : []}</div>;
    }
}
export default DropTarget(Types.ENTITY, spec, collect)(EntityView);
