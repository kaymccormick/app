import React from 'react';
/*import Popover from 'react-simple-popover';*/
import {Types} from '../../src/types';
import {DragSource, DragSourceConnector, DragSourceMonitor} from 'react-dnd';
import {EntityAttributesSectionProps} from './EntityAttributesSection';
import {EntityMethodsSectionProps} from './EntityMethodsSection';
import * as Components from './';
import {EntityDragDropItem, EntityProps} from "../types";

const defaultWidth = 100;
const defaultHeight = 400;

const Sections = {
    attributes: { render: (props: EntityAttributesSectionProps) => <Components.EntityAttributesSection key={props.section} {...props}/> },
    methods: { render: (props: EntityMethodsSectionProps) => <Components.EntityMethodsSection key={props.section} {...props}/> },
};

const entitySource = {
    beginDrag(props: EntityProps): EntityDragDropItem {
        // const r = this.myRef.current.getBoundingClientRect();
	if(props.modelKey === undefined) {
	return;
	}
        const item = { modelKey: props.modelKey,
        // clientRect: { x: r.x, y: r.y, width: r.width, height: r.height },
        };
        return item;
    },
    endDrag(props: EntityProps, monitor: DragSourceMonitor, component: React.RefObject<any>) {
        if (!monitor.didDrop()) {
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
private target: any;
    private myRef: React.RefObject<any>;
    public constructor(props: EntityProps) {
        super(props);
        console.log(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const rect = this.myRef.current.getBoundingClientRect();
        console.log(rect);
    }

    public render() {
    /*<Popover placement='right' container={this} target={this.target} show={this.state.popoverOpen}>test</Popover>*/
        const {isDragging, connectDragSource} = this.props;
        return connectDragSource(<div className="entity__outerGrid" style={{display: 'grid', gridTemplateColumns: '100% 1px'}}><div className="entityView__draggableEntity" ref={this.myRef} style={{position: 'absolute', left: (this.props.x || 0), top: (this.props.y || 0), right: ((this.props.x || 0) + (this.props.width || defaultWidth)), bottom: ((this.props.y || 0) + (this.props.height || defaultHeight))}}><div className="entityView__entityContainer"><div className="entityView__entity">
            <div style={{gridColumn: '1 / 4'}} className="entity__displayName">{this.props.editMode ?
                <input value={this.props.entity.displayName}/> : <span>{this.props.entity.displayName}</span>}</div>
            {Object.keys(Sections).map(section => {
	    // @ts-ignore
	    const render = Sections[section].render;
	    return render({ entity: this.props.entity, section });
	    })}
        </div></div><div style={{width: '1px'}} ref={(node) => { this.target = node; }}/></div></div>);
    }
}

export default DragSource(Types.ENTITY, entitySource, collect)(Entity);
