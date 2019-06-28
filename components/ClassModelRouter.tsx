import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Components from './classModel';
import { EntityCore } from 'classModel';
import ClassModel from './ClassModel';

export default class ClassModelRouter extends React.Component {
    render() {
    // @ts-ignore
        return <Router><Route path="/" exact><ClassModel/></Route></Router>;
    }
}
