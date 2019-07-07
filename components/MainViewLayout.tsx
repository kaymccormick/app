import React from 'react';
import MainView from './EntityView/MainView'
import MainTree from './MainTree';
import Site from '../model/site/Site';
import Toolbar from './EntityView/Toolbar';

/* what component uses this?
*/

export interface MainViewLayoutProps {
site: Site;
renderMainView: () => any,
}

class MainViewLayout extends React.Component<MainViewLayoutProps> {
    public state: { } = {};

public constructor(props: MainViewLayoutProps) {
super(props);
}

    render() {
        return <div className="mainViewLayout"><div className="toolbarContainer"><Toolbar/></div><div className="mainTreeContainer"><MainTree site={this.props.site}/></div><div className="mainViewContainer">{this.props.renderMainView()}</div></div>;
    }
}
export default MainViewLayout;



