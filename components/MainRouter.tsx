import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import * as Components from './classModel';
import MainViewLayout from './MainViewLayout';
import ClassModelView, { ClassModelViewProps } from './classModel/ClassModelView';
import {ClassModelContainer} from './containers/ClassModel/ClassModelContainer';
import Site from '../model/site/Site';
import { WebApplication } from '../src/WebApplication';
import { MainComponentBaseProps } from './types';

interface EntityViewRouterProps extends MainComponentBaseProps {
}

export default class MainRouter extends React.Component<EntityViewRouterProps> {
    render() {
    // @ts-ignore
    const routes = this.props.app.modules.map((module: ApplicationModule) => <Route path={`/${module.key}`} render={() => React.createElement(module.getMainComponent(), { ...this.props}) }/>);
        return <Router basename="/entityView">{routes}</Router>;
    }
}
