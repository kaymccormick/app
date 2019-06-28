import React, {MouseEvent, MouseEventHandler} from 'react';
import {DragSource} from 'react-dnd';
import axios from 'axios';
import Entity from '../../model/Entity';
import * as Components from './';
import EntityAdd from './Command/EntityAdd';
import { List } from 'immutable'

export interface MainViewProps {
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
    this.setState({entities: this.state.entities.push(new Entity())});
    e.preventDefault();
}

    render() {
        return <div className="mainView"><form><div><EntityAdd onClick={this.handleEntityAdd}/></div><div className="entityView" style={{width: "100%", height: "100%"}}>{this.state.entities ? this.state.entities.map((entity: Entity): void => <Components.Entity editMode={true} entity={entity}/>) : []}</div></form></div>;
    }
}
export default MainView

