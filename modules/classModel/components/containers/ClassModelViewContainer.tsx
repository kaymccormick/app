import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../../../model/types';
import { Module } from '../../Module';

import ClassModelView,{ClassModelViewProps} from '../ClassModelView';

const mapStateToProps = (state: ApplicationState): ClassModelViewProps => ({
    classModel: state.classModel,
    menus: state.menus,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: ClassModelViewProps) => {
    if(!ownProps.module) {
        throw new Error('Expecting module property');
    }
    const m = ownProps.module as Module;
    if(!m) {
        throw new Error('no module');
    }
    const actions = m.actions;
    return {
        "fetchInitialData": () => dispatch(actions.fetchInitialData()),
    };
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ClassModelView);
