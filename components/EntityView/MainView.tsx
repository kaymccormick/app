import React from 'react';
import { DropTargetMonitor } from 'react-dnd'
import axios from 'axios';
import Entity from '../../model/entity/Entity';
import { List } from 'immutable'
import {EntityViewContainer} from '../containers/EntityViewContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainViewState {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainViewProps  {
}

class MainView extends React.Component<MainViewProps> {
//    public handleEntityAdd: (e: MouseEvent) => void;
//    public handleDrop: (monitor: DropTargetMonitor) => void;

    public state: MainViewState = { };

    public constructor(props: MainViewProps) {
        super(props);
        //        this.handleEntityAdd = this._handleEntityAdd.bind(this);
        //        this.handleDrop = this._handleDrop.bind(this);
    }

    public componentDidMount() {
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

    public render() {
        return <div className="mainView entityViewContainer"><EntityViewContainer/></div>;
    }
}
export default MainView;
