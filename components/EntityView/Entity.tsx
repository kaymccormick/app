import React from 'react';
import * as EntityCore from '../../entity/core';
import { Types } from '../../src/types';
import {DragSource} from 'react-dnd';
export interface EntityProps {
  entity: EntityCore.Entity;
  editMode?: boolean;
  connectDragSource:any,
  isDragging: any,
}

const entitySource = {
beginDrag(props) {
const item = { id: props.id };
return item
},
}

function collect(connect, monitor) {
return {
connectDragSource: connect.dragSource(),
isDragging: monitor.isDragging(),
};
}

class Entity extends React.Component<EntityProps> {
  render() {
  const { isDragging, connectDragSource } = this.props;
    return connectDragSource(<div className="entityView__entity"><div className="entityView__entity__displayName">{this.props.editMode ? <input value={this.props.entity.displayName}/> : <span>this.props.entity.displayName</span>}</div></div>);
    }
    }

export default DragSource(Types.ENTITY, entitySource, collect)(Entity);
