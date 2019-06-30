import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {ButtonGroup, Toolbar, ToolbarItem,Button} from "@progress/kendo-react-buttons";
import React from 'react';
import { connect } from 'react-redux';
import { addEntity } from '../../model/actions';
import { ApplicationState } from '../../model/ApplicationState';
import{ Action} from '../../model/types';

const mapStateToProps = (state: ApplicationState) => ({
});

const mapDispatchToProps = (dispatch: (action: Action) => void): any => ({
  "addEntity": () => dispatch(addEntity()),
  });

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)((props: { addEntity?: () => void }) => <Toolbar><ToolbarItem><ButtonGroup><Button onClick={(e) => {
console.log('click');
if(props.addEntity) {
props.addEntity();
}
}} title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button><Button title="Add Entity"><FontAwesomeIcon icon={faProjectDiagram}/></Button></ButtonGroup></ToolbarItem></Toolbar>);
