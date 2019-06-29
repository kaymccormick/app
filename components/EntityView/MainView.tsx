import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import React, {MouseEvent, MouseEventHandler} from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext, DropTarget, DropTargetMonitor } from 'react-dnd'
import axios from 'axios';
import Entity from '../../model/Entity';
import * as Components from './';
import EntityAdd from './Command/EntityAdd';
import { List } from 'immutable'
import EntityView from './EntityView';
import { EntityPosition } from './types';
import {ButtonGroup, Toolbar, ToolbarItem,Button} from "@progress/kendo-react-buttons";
import {Menu,MenuItem} from '@progress/kendo-react-layout';

export interface MainViewState {
    entities: List<Entity>;
    entityPositions: List<EntityPosition>;
}

export interface MainViewProps  {
}

class MainView extends React.Component<MainViewProps> {
    public handleEntityAdd: (e: MouseEvent) => void;
    public handleDrop: (monitor: DropTargetMonitor) => void;

    public state: MainViewState = { entities: List<Entity>(),
        entityPositions: List<EntityPosition>() };

    public constructor(props: MainViewProps) {
        super(props);
        this.handleEntityAdd = this._handleEntityAdd.bind(this);
        this.handleDrop = this._handleDrop.bind(this);
    }

    componentDidMount() {
        axios.get('/entity/entity').then(response => response.data.entities).then(entities => this.setState({ entities })).catch(error => {
            console.log('unable to get entities');
        });
    }

    // @ts-ignore
    public _handleEntityAdd(e: any) {
        this.setState((state: MainViewState, props) => ({entities: state.entities.push(new Entity())}));
        e.preventDefault();
        console.log('add');
    }

    public _handleDrop(monitor: DropTargetMonitor) {
	  const rect1 = monitor.getInitialSourceClientOffset();
	  const rect2 = monitor.getDifferenceFromInitialOffset();
	  const item = monitor.getItem();
	  const i = parseInt(item.modelKey);
	  this.setState((state: MainViewState,props) => {
	  let entityPositions  = state.entityPositions;
	  if(entityPositions && rect2) {
	  entityPositions = entityPositions.set(i, { x: rect2.x, y: rect2.y });
	  return { entityPositions };
	  }
	  });
    }

    render() {
        return <div className="mainView"><Menu><MenuItem text="File"><MenuItem text="Reset"/></MenuItem></Menu><Toolbar><ToolbarItem><ButtonGroup><Button onClick={this.handleEntityAdd} title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button><Button onClick={this.handleEntityAdd} title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button></ButtonGroup></ToolbarItem></Toolbar><EntityView handleDrop={this.handleDrop} entityPositions={this.state.entityPositions} entities={this.state.entities}/></div>;
    }
}
export default MainView;



