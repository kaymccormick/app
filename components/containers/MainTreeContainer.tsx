import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../model/types';
import {ApplicationModule} from '../../src/ApplicationModule';
import * as actions from '../../modules/entities/actions';
import {MainTreeProps} from "../MainTree";

//import { loadProjects } from '../..//actions/classModel';

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
const MainTreeContainer = connect(mapStateToProps, mapDispatchToProps)((props) => <MainTree {...props}/>);
export { MainTreeContainer };
