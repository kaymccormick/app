import React from 'react';
import {List,Map}from 'immutable';
import {ExplorerItem}from '../../model/explorer';
import ExploreItem from './ExploreItem';

interface Props {
}
interface State {
    items: List<ExplorerItem>;
}

export default class Explorer extends React.Component<Props, State> {
    state: State = { items: List<ExplorerItem>()}
    render()
    {
        return this.state.items.map((item) => <ExploreItem render={() => <div/>} item={item}/>);
    }
}
