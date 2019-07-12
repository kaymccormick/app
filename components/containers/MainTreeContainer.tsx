import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../model/types';
import {ApplicationModule} from '../../src/ApplicationModule';
import {MainTreeProps} from "../MainTree";
import {ModuleContextConsumer} from '../../components/ModuleContext';

const mapStateToProps = (state: ApplicationState): MainTreeProps => ({
    entities: state.entities,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: MainTreeProps) => {
    return {
        "addSelectedEntities": (entities: any) => dispatch(actions.addSelectedEntities(entities)),
        //  "loadProjects": () => dispatch(actions.loadProjects()),
    };
};

//@ts-ignore
const MainTreeContainer = connect(mapStateToProps, mapDispatchToProps)((props) => (<ModuleContextConsumer>{modContext => (modContext && (<MainTree {...props}/>))}</ModuleContextConsumer>));
export { MainTreeContainer };
