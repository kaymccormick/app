/**
 * @module components/containers/MetisMenuContainer
 */
import { withRouter } from "react-router";
import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../model/types';
import {ApplicationModule} from '../../src/ApplicationModule';
import * as actions from '../../modules/entities/actions';

//import { loadProjects } from '../..//actions/classModel';
import MainTree,{MainTreeProps} from '../MainTree';
import MetisMenu,{MetisMenuProps} from "../MetisMenu";

const mapStateToProps = (state: ApplicationState): MetisMenuProps => ({
    entities: state.entities,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: MetisMenuProps) => {
    return {
        "selectItem": (item: any) => dispatch(actions.selectItem(item)),
        "addSelectedEntities": (entities: any) => dispatch(actions.addSelectedEntities(entities)),
        //  "loadProjects": () => dispatch(actions.loadProjects()),
    };
};

//@ts-ignore
const MetisMenuContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)((props) => <MetisMenu {...props}/>));
export { MetisMenuContainer };
