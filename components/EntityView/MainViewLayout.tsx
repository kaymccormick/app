import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import MainView from './MainView'
import MainTree from '../MainTree';
import Site from '../../model/site/Site';

export interface MainViewLayoutProps {
site: Site;
}

class MainViewLayout extends React.Component<MainViewLayoutProps> {
    public state: { } = {};

    render() {
        return <div className="mainViewLayout"><div><MainTree site={site}/></div>
	<div><MainView/></div></div>;
    }
}
export default DragDropContext(HTML5Backend)(MainViewLayout)


