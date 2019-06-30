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
}

export interface MainViewProps  {
}

class MainView extends React.Component<MainViewProps> {
//    public handleEntityAdd: (e: MouseEvent) => void;
//    public handleDrop: (monitor: DropTargetMonitor) => void;

    public state: MainViewState = { }

    public constructor(props: MainViewProps) {
        super(props);
//        this.handleEntityAdd = this._handleEntityAdd.bind(this);
//        this.handleDrop = this._handleDrop.bind(this);
    }

    componentDidMount() {
        axios.get('/entity/entity').then(response => response.data.entities).then(entities => this.setState({ "entities": List<Entity>(entities) })).catch(error => {
            console.log('unable to get entities');
        });
    }

    // @ts-ignore
/*    public _handleEntityAdd(e: any) {
        this.setState((state: MainViewState, props) => {
	console.log(`number of entities is ${state.entities ? state.entities.size : 'undefined'}`);
	return {entities: state.entities.push(new Entity()) };
	});
        e.preventDefault();
        console.log('add');
    }*/

    public _handleDrop(monitor: DropTargetMonitor) {/*
    console.log(`handle drop`);
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
	  });*/
    }

    render() {
        return <div className="mainView entityViewContainer"><EntityView/></div>;
    }
}
export default MainView;



