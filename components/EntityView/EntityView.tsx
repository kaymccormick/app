import React, {ClassAttributes, MouseEvent, MouseEventHandler} from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext, DragSourceMonitor, DropTarget, DropTargetConnector, DropTargetMonitor} from 'react-dnd'
import Entity from '../../model/Entity';
import * as Components from './';
import EntityAdd from './Command/EntityAdd';
import { List } from 'immutable'
import { Types } from '../../src/types';
import classNames from 'classnames';
import { EntityPosition } from './types';

export interface EntityViewProps {
entities: List<Entity>;
entityPositions: List<EntityPosition>;
canDrop?: boolean;
connectDropTarget: any;
handleDrop?: (monitor: DropTargetMonitor) => void;
}

interface EntityViewState {
x?: number;
y?: number;
}

const spec = {
  drop(props: EntityViewProps, monitor: DropTargetMonitor, component: React.RefObject<any>) {
  const item = monitor.getItem();
  if(props.handleDrop) {
  props.handleDrop(monitor);
  }
  console.log('props');
  console.log(props);
  
  console.log(monitor.getInitialSourceClientOffset());
  console.log(monitor.getDifferenceFromInitialOffset());
  },
  };

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
return {
connectDropTarget: connect.dropTarget(),
canDrop: monitor.canDrop(),
}
}

class EntityView extends React.Component<EntityViewProps> {
public entityViewRef: React.RefObject<any>;

  state: EntityViewState = { };
constructor(props: EntityViewProps) {
  super(props);
  this.entityViewRef = React.createRef();
  }

componentDidMount() {
const rect = this.entityViewRef.current.getBoundingClientRect();
console.log(rect);
this.setState( { x: rect.x, y: rect.y } );
}

    render() {
    const {  connectDropTarget } = this.props;
        return connectDropTarget(<div ref={this.entityViewRef} className={classNames('entityView', this.props.canDrop ? 'canDrop' : '')} style={{width: "100%", height: "100%"}}>{this.props.entities ? this.props.entities.map((entity: Entity, i: number): {} => {
	const position = this.props.entityPositions.get(i) || { x: this.state.x || 0, y:this.state.y || 0 };
	return <Components.Entity editMode={true} x={position.x} y={position.y} modelKey={i.toString()} key={i.toString()} entity={entity}/>;
	}) : []}</div>);
    }
}
export default DropTarget(Types.ENTITY, spec, collect)(EntityView);
