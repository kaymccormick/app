import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {ButtonGroup, Toolbar, ToolbarItem,Button} from "@progress/kendo-react-buttons";
import React from 'react';

// @ts-ignore
export default (props) => <Toolbar><ToolbarItem><ButtonGroup><Button onClick={this.handleEntityAdd} title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button><Button title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button></ButtonGroup></ToolbarItem></Toolbar>
