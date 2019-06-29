import {connect} from 'react-redux';
import { addEntity } from '../../model/actions';
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
import Rect from '../../model/ui/Rect';
import { ApplicationState, EntityUIState } from '../../model/ApplicationState';

const mapStateToProps = (state: ApplicationState): EntityViewProps => ({
  entities: state.entities,
  entityUIState: state.ui.entityUIState,
  });

const mapDispatchToProps = (dispatch) => ({
});


/* used in MainView */
export interface EntityViewProps {
   entities: List<Entity>;
 entityUIState: List<EntityUIState>;
    canDrop?: boolean;
    connectDropTarget?: any;
    handleDrop?: (monitor: DropTargetMonitor) => void;
}

interface EntityViewState {
}

const spec = {
    drop(props: EntityViewProps, monitor: DropTargetMonitor, component: React.RefObject<any>) {
        const item = monitor.getItem();
/*        if(props.handleDrop) {
            props.handleDrop(monitor);
        }*/
	// KM!
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
        const rect = Rect.fromDOMRect(this.entityViewRef.current.getBoundingClientRect());
	console.log(`retrieving bound client reactangle for entity view: ${rect}`);
	console.log('setting state on EntityView');
 this.setState( { x: rect.x, y: rect.y } );
    }

    render() {
        const {  connectDropTarget } = this.props;
        return connectDropTarget(<div ref={this.entityViewRef} className={classNames('entityView', this.props.canDrop ? 'canDrop' : '')} style={{width: "100%", height: "100%"}}>{this.props.entities ? (this.props.entities.map ? this.props.entities.map((entity: Entity, i: number): {} => {
	const uiState = this.props.entityUIState.get(i);
	let x = 0;
	let y = 0;
	if(uiState) {
	x = uiState.x || 0;
	y = uiState.y || 0;
	}
            return <Components.Entity editMode={true} x={x} y={y} modelKey={i.toString()} key={i.toString()} entity={entity}/>;
        }) : []) : []}</div>);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(Types.ENTITY, spec, collect)(EntityView));
