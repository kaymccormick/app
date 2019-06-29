import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import * as Components from './classModel';
import MainViewLayout from './EntityView/MainViewLayout';
import Site from '../model/site/Site';

interface EntityViewRouterProps {
site: Site;
}

export default class EntityViewRouter extends React.Component<EntityViewRouterProps> {
    render() {
    // @ts-ignore
        return <Router><Route path="/" exact><MainViewLayout {...this.props}/></Route></Router>;
    }
}
