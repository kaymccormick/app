import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../../../model/types';
import { Module } from '../../Module';
import Editor,{Props} from '../Editor';

const mapStateToProps = (state: ApplicationState): Props => ({
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: Props) => {
    if(!ownProps.module) {
        throw new Error('Expecting module property');
    }
    const m = ownProps.module as Module;
    if(!m) {
        throw new Error('no module');
    }
    const actions = m.actions;
    return {
    };
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Editor);

