import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import * as Components from './classModel';
import MainViewLayout from './MainViewLayout';
import ClassModelView, { ClassModelViewProps } from './classModel/ClassModelView';
import {ClassModelContainer} from './containers/ClassModel/ClassModelContainer';
import Site from '../model/site/Site';

interface EntityViewRouterProps {
    site: Site;
}

export default class EntityViewRouter extends React.Component<EntityViewRouterProps> {
    render() {
    // @ts-ignore
        return <Router basename="/entityView"><Route path="" exact render={() => <MainViewLayout site={this.props.site} renderMainView={()  => <div/>}/>}/><Route path="/classModel" render={() => <MainViewLayout site={this.props.site} renderMainView={(props: ClassModelViewProps) => <ClassModelContainer {...props}/>}/>}/><Route children={(props)=><div>{props.location.pathname}</div>}/></Router>;
    }
}
