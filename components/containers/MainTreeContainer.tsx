import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../model/types';
import {ApplicationModule} from '../../src/ApplicationModule';

//import { loadProjects } from '../..//actions/classModel';
import MainTree,{MainTreeProps} from '../MainTree';

const mapStateToProps = (state: ApplicationState): MainTreeProps => ({
    entities: state.entities,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: MainTreeProps) => {
    return {
        //  "loadProjects": () => dispatch(actions.loadProjects()),
    };
};

//@ts-ignore
const MainTreeContainer = connect(mapStateToProps, mapDispatchToProps)((props) => <MainTree {...props}/>);
export { MainTreeContainer };
