import React from 'react';
import {Types} from '../../src/types';
import ModelEntity from '../../model/Entity';
import {DragSource, DragSourceConnector, DragSourceMonitor} from 'react-dnd';
import * as Components from './';
import {EntityAttributesSectionProps} from './EntityAttributesSection';
import {EntityMethodsSectionProps} from './EntityMethodsSection';

const defaultWidth = 100;
const defaultHeight = 400;

const Sections = {
    attributes: { render: (props: EntityAttributesSectionProps) => <Components.EntityAttributesSection {...props}/> },
    methods: { render: (props: EntityMethodsSectionProps) => <Components.EntityMethodsSection {...props}/> },
};

export interface EntityProps {
    entity: ModelEntity;
    editMode?: boolean;
    connectDragSource: any;
    isDragging: boolean;
    modelKey: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface EntityDragDropItem {
    modelKey: string;
    clientRect?: Rect;
}

const entitySource = {
    beginDrag(props: EntityProps): EntityDragDropItem {
        // const r = this.myRef.current.getBoundingClientRect();
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
        const {isDragging, connectDragSource} = this.props;
        return connectDragSource(<div ref={this.myRef} style={{position: 'absolute', left: (this.props.x || 0), top: (this.props.y || 0), right: ((this.props.x || 0) + (this.props.width || defaultWidth)), bottom: ((this.props.y || 0) + (this.props.height || defaultHeight))}}><div className="entityView__entity">
            <div className="entityView__entity__displayName">{this.props.editMode ?
                <input value={this.props.entity.displayName}/> : <span>this.props.entity.displayName</span>}</div>
            {Object.keys(Sections).map(section => {
	    // @ts-ignore
	    const Component = Sections[section].component;
	    return <Component entity={this.props.entity} section={section}/>;
	    })}
        </div></div>);
    }
}

export default DragSource(Types.ENTITY, entitySource, collect)(Entity);
