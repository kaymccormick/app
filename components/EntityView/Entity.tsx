import React from 'react';
/*import Popover from 'react-simple-popover';*/
import {Types} from '../../src/types';
import {DragSource, DragSourceConnector, DragSourceMonitor} from 'react-dnd';
import * as Components from './';
import {EntityDragDropItem, EntityProps,EntityMethodsSectionProps,EntityAttributesSectionProps} from "../types";

const defaultWidth = 100;
const defaultHeight = 400;

const Sections = {
    attributes: { render: (props: EntityAttributesSectionProps) => <Components.EntityAttributesSection index={props.index||-1} key={props.section} {...props}/> },
    methods: { render: (props: EntityMethodsSectionProps) => <Components.EntityMethodsSection index={props.index} key={props.section} {...props}/> },
};

const entitySource = {
    beginDrag(props: EntityProps): EntityDragDropItem {
        // const r = this.myRef.current.getBoundingClientRect();
        const item = { modelKey: props.modelKey || '',
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
    // @ts-ignore
    public handleOnClick: any;
    public constructor(props: EntityProps) {
        super(props);
        console.log(props);
        this.myRef = React.createRef();
	this.handleOnClick = this._handleOnClick.bind(this);
    }

    componentDidMount() {
        const rect = this.myRef.current.getBoundingClientRect();
        console.log(rect);
    }
    public _handleOnClick(e: MouseEvent) {
      e.preventDefault();
      console.log('onclick');
      if(this.props.changeSelection) {
        this.props.changeSelection(this.props.index);
	}
	}

    public render() {
    /*<Popover placement='right' container={this} target={this.target} show={this.state.popoverOpen}>test</Popover>*/
        const {isDragging, connectDragSource} = this.props;
        return connectDragSource(<div className="entity__outerGrid"
	style={{display: 'grid',
	gridTemplateColumns: '100% 1px'}}><div className="entityView__draggableEntity" ref={this.myRef} style={{position: 'absolute', left: (this.props.x || 0), top: (this.props.y || 0), right: ((this.props.x || 0) + (this.props.width || defaultWidth)), bottom: ((this.props.y || 0) + (this.props.height || defaultHeight))}}><div className="entityView__entityContainer"><div onClick={(e) => this.handleOnClick(e)} className="entityView__entity">
            <div style={{gridColumn: '1 / 4'}} className="entity__displayName">{this.props.editMode ?
                <input value={this.props.entity !== undefined ? this.props.entity.displayName: ''}/> : <span>{this.props.entity !== undefined ? this.props.entity.displayName: ''}</span>}</div>
		<div className="entity__header" style={{gridColumn: '1 / 4'}}>Description</div>
	    <div className="entity__description" style={{gridColumn: '1 / 4'}}></div>

            {Object.keys(Sections).map(section => {
	    // @ts-ignore
	    const render = Sections[section].render;
	    return render({ index: this.props.index,
	    entity: this.props.entity, section });
	    })}
	    <div><a href="#" onClick={(e) => { e.preventDefault(); if(this.props.updateEntity) { this.props.updateEntity(); } }}>Update</a></div>
            </div></div><div style={{width: '1px'}} ref={(node) => { this.target = node; }}/></div></div>);
    }
}

export default DragSource(Types.ENTITY, entitySource, collect)(Entity);
