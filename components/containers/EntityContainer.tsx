import React from 'react';
import {connect} from 'react-redux';
import Entity from '../EntityView/Entity';
import { updateEntity } from '../../model/actions';
import * as Model from '../../model';
import { EntityProps, EntityContainerProps } from '../types';
import { ApplicationState } from '../../model/types';


const mapStateToProps = (state: ApplicationState, ownProps: EntityContainerProps): EntityProps => ({
entity: ownProps.index !== undefined ? state.model.entities.get(ownProps.index): undefined,
index: ownProps.index === undefined ? -1 : ownProps.index,
modelKey: ownProps.modelKey || '',
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
updateEntity: (index: number, entityData: Model.Entity) => dispatch(updateEntity(index, entityData)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)((props: EntityContainerProps) => <Entity {...props}/>);
