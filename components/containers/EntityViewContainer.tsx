import React from 'react';
import { addEntity,moveEntity } from '../../model/actions';
import {connect} from 'react-redux';
import {EntityView}
from './../EntityView/EntityView';
import { ApplicationState } from '../../model/types';
import {EntityViewProps,EntityViewContainerProps} from "../types";
const mapStateToProps = (state: ApplicationState): EntityViewProps => ({
    entities: state.model.entities,
    entityUIState: state.entityViewUI.entityUIState,
    selectedIndex: state.entityViewUI.selectedIndex,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
    "moveEntity": (index: number, x: number, y: number) => dispatch(moveEntity(index, x, y)),
//    "addEntity": () => dispatch(addEntity(
});

const EntityViewContainer = connect(mapStateToProps, mapDispatchToProps)((props: EntityViewProps) => <EntityView {...props}/>);
export { EntityViewContainer};
