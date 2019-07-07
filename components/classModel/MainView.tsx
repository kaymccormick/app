import React from 'react';
import { DropTargetMonitor } from 'react-dnd'
import axios from 'axios';
import Entity from '../../model/entity/Entity';
import { List } from 'immutable'
import {ClassModelContainer} from '../containers/ClassModel/ClassModelContainer';

export interface MainViewState {
}

export interface MainViewProps  {
}

class MainView extends React.Component<MainViewProps> {

    public state: MainViewState = { };

    public constructor(props: MainViewProps) {
        super(props);
    }

    public render() {
        return <div className="mainView"><ClassModelContainer/></div>;
    }
}
export default MainView;
