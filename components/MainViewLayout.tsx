import React from 'react';
import MainView from './EntityView/MainView'
import MainTree from './MainTree';
import {MetisMenuContainer} from './containers/MetisMenuContainer';
import Site from '../model/site/Site';
import Toolbar from './EntityView/Toolbar';
import { ModuleContextConsumer } from './ModuleContext';
import { WebApplication } from '../src/WebApplication';

export interface MainViewLayoutProps {
    app: WebApplication;
    site: Site;
    renderMainView: () => any;
    store: any;
}

class MainViewLayout extends React.Component<MainViewLayoutProps> {
    public state: { } = {};

    public constructor(props: MainViewLayoutProps) {
        super(props);
    }

    render() {
    //@ts-ignore
        return <div className="mainViewLayout">
	<div className="toolbarContainer">
	<Toolbar/>
	</div>
	<div className="mainTreeContainer">
	<MetisMenuContainer app={this.props.app} site={this.props.site}/>
	</div>
	<div className="mainViewContainer">
	{this.props.renderMainView()}
	</div>
	</div>;
    }
}
export default MainViewLayout;
