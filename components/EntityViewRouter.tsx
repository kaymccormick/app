import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import * as Components from './classModel';
import MainView from './EntityView/MainView';

export default class EntityViewRouter extends React.Component {
    render() {
    // @ts-ignore
        return <Router><Route path="/" exact><MainView/></Route></Router>;
    }
}
