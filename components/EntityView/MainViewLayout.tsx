import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import MainView from './MainView'

export interface MainViewLayoutProps {
}

class MainViewLayout extends React.Component<MainViewLayoutProps> {
    public state: { } = {};

    render() {
        return <div className="mainViewLayout"><MainView/></div>;
    }
}
export default DragDropContext(HTML5Backend)(MainViewLayout)


