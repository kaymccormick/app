import React from 'react';
import {DragDropContext, DropTarget, DropTargetConnector, DropTargetMonitor} from 'react-dnd'
import Entity from '../../model/entity/Entity';
import EntityContainer from '../containers/EntityContainer';

import * as Components from './';
import { List } from 'immutable'
import classNames from 'classnames';
import Rect from '../../model/ui/Rect';
import {ApplicationState, EntityUIState, EntityViewState} from "../../model/types";
import {EntityViewProps,Types} from "../types";

/* used in MainView */

const spec = {
    drop(props: EntityViewProps, monitor: DropTargetMonitor, component: React.RefObject<any>) {
        const item = monitor.getItem();
        if(props.moveEntity) {
            const r = monitor.getInitialClientOffset();
            if(!r) {
                throw new Error('');
            }
            const { x, y  } = monitor.getDifferenceFromInitialOffset() || { x: 0, y: 0};
            props.moveEntity(parseInt(item.modelKey), r.x + x, r.y + y);
        }
        //        console.log(monitor.getInitialSourceClientOffset());
        //        console.log(monitor.getDifferenceFromInitialOffset());
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
    public constructor(props: EntityViewProps) {
        super(props);
        this.entityViewRef = React.createRef();
    }

    public componentDidMount() {
        const rect = Rect.fromDOMRect(this.entityViewRef.current.getBoundingClientRect());
        console.log(`retrieving bound client reactangle for entity view: ${rect}`);
        console.log('setting state on EntityView');
        this.setState( { x: rect.x, y: rect.y } );
    }

// @ts-ignore
public componentDidCatch(error: any, info: any) {
console.log(error);
}


    public render() {
        const {  connectDropTarget } = this.props;
        return connectDropTarget(<div ref={this.entityViewRef} className={classNames('entityView', this.props.canDrop ? 'canDrop' : '')} style={{width: "100%", height: "100%"}}>{this.props.entities ? (this.props.entities.map ? this.props.entities.map((entity: Entity|undefined, index?: number | undefined): {}|null => {
            if(!entity || index === undefined) {
                return null;
            }
            const uiState = this.props.entityUIState.get(index);
            let x = 0;
            let y = 0;
            if(uiState) {
                x = uiState.x || 0;
                y = uiState.y || 0;
            }
            return <EntityContainer key={index.toString()} index={index}/>;// editMode={true} x={x} y={y} modelKey={i.toString()} key={i.toString()} entity={entity}
        }) : []) : []}</div>);
    }
}
const EntityView_ = DropTarget(Types.ENTITY, spec, collect)(EntityView);
export { EntityView_ as EntityView };

