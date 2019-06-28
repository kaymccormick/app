import React from 'react';
import * as EntityCore from '../../entity/core';
import { Types } from '../../src/types';
import {DragSource, DragSourceConnector, DragSourceMonitor} from 'react-dnd';
export interface EntityProps {
  entity: EntityCore.Entity;
  editMode?: boolean;
  connectDragSource:any,
  isDragging: any,
}

const entitySource = {
beginDrag(props: EntityProps) {
const item = { id: props.entity.id };
return item
},
endDrag(props: EntityProps, monitor: DragSourceMonitor, component: React.RefObject<any>) {
if(!monitor.didDrop()) {
return;
}
const item = monitor.getItem();
console.log(item);
},
};


function collect(connect: DragSourceConnector, monitor: DragSourceMonitor) {
return {
connectDragSource: connect.dragSource(),
isDragging: monitor.isDragging(),
};
}

class Entity extends React.Component<EntityProps> {
  render() {
  const { isDragging, connectDragSource } = this.props;
  console.log(isDragging);
    return connectDragSource(<div className="entityView__entity"><div className="entityView__entity__displayName">{this.props.editMode ? <input value={this.props.entity.displayName}/> : <span>this.props.entity.displayName</span>}</div></div>);
    }
    }

export default DragSource(Types.ENTITY, entitySource, collect)(Entity);
