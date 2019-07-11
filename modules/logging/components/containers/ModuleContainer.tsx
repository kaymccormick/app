import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../../../model/types';
import { Module } from '../../Module';

export interface MyProps{
module?: any;
}

const mapStateToProps = (state: ApplicationState): MyProps => ({

});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: MyProps) => {
    if(!ownProps.module) {
        throw new Error('');
    }
    const m = ownProps.module as Module;
    if(!m) {
        throw new Error('no module');
    }
    const actions = m.actions;
    return {
//        "fetchEntities": () => dispatch(actions.fetchEntities(restClient)),
    };
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(EntitiesView);
