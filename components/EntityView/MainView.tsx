import React, {MouseEvent, MouseEventHandler} from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext, DropTarget } from 'react-dnd'
import axios from 'axios';
import Entity from '../../model/Entity';
import * as Components from './';
import EntityAdd from './Command/EntityAdd';
import { List } from 'immutable'
import EntityView from './EntityView';

export interface MainViewState {
entities: List<Entity>;
}

export interface MainViewProps  {
entities?: Entity[];
}

class MainView extends React.Component<MainViewProps> {
    public handleEntityAdd: (e: MouseEvent) => void;

    public state: { entities: List<Entity> } = { entities: List<Entity>() };

   public constructor(props: MainViewProps) {
super(props);
if(props.entities) {
this.state = { entities: List<Entity>(props.entities) };
}
this.handleEntityAdd = this._handleEntityAdd.bind(this);
}

// @ts-ignore
public _handleEntityAdd(e: any) {
    this.setState((state: MainViewState, props) => ({entities: state.entities.push(new Entity())}));
    e.preventDefault();
    console.log('add');
}

    render() {
        return <form><div className="mainView"><div><EntityAdd onClick={this.handleEntityAdd}/></div><EntityView entities={this.state.entities}/></div></form>;
    }
}
export default MainView;



