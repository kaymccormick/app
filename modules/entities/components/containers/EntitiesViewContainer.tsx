import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../../../model/types';
import { Module } from '../../Module';

//import { loadProjects } from '../../../actions/entities';
import EntitiesView,{EntitiesViewProps} from '../EntitiesView';

const mapStateToProps = (state: ApplicationState): EntitiesViewProps => ({
    entities: state.entities,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: EntitiesViewProps) => {
    if(!ownProps.module) {
        throw new Error('');
    }
    const m = ownProps.module as Module;
    if(!m) {
        throw new Error('no module');
    }
    const restClient = m.restClient;
    if(!restClient) {
        throw new Error('no rest client');
    }
    const actions = m.actions;
    return {
        "fetchEntities": () => dispatch(actions.fetchEntities(restClient)),
    };
};

//@ts-ignore
const EntitiesViewContainer = connect(mapStateToProps, mapDispatchToProps)(EntitiesView);
export { EntitiesViewContainer };
