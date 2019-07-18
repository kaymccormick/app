/**
 * @module components/containers/MetisMenuContainer
 */
import { withRouter } from "react-router";
import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../model/types';
import {EntitiesState} from '../../modules/entities/types';
import {ModuleState as MenusState} from '../../modules/menus/types';
import {ApplicationModule} from '../../src/ApplicationModule';
import * as actions from '../../modules/menus/actions';
import MainTree,{MainTreeProps} from '../MainTree';
import MetisMenu,{MetisMenuProps} from "../MetisMenu";

export interface MappedProps {
    entities?: EntitiesState;
    menus?: MenusState;
}

const mapStateToProps = (state: ApplicationState): MappedProps => ({
    entities: state.entities,
    menus: state.menus,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: MetisMenuContainerProps) => {
    return {
        "selectItem": (item: any) => dispatch(actions.selectItem(item)),
        /*        "addSelectedEntities": (entities: any) => dispatch(actions.addSelectedEntities(entities)),*/
        //  "loadProjects": () => dispatch(actions.loadProjects()),
    };
};

//@ts-ignore
const MetisMenuContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)((props) => <MetisMenu {...props}/>));
export { MetisMenuContainer };
