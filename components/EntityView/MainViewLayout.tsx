import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import MainView from './MainView'
import MainTree from '../MainTree';
import Site from '../../model/site/Site';
/* what component uses this?
*/

export interface MainViewLayoutProps {
site: Site;
}

class MainViewLayout extends React.Component<MainViewLayoutProps> {
    public state: { } = {};

public constructor(props: MainViewLayoutProps) {
super(props);
}

    render() {
        return <div className="mainViewLayout"><div className="mainTreeContainer"><MainTree site={this.props.site}/></div><div className="mainViewContainer"><MainView/></div></div>;
    }
}
export default DragDropContext(HTML5Backend)(MainViewLayout)


