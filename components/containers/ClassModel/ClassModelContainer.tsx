import React from 'react';
import {connect} from 'react-redux';
import { ApplicationState } from '../../../model/types';
import {ApplicationModule} from '../../../src/ApplicationModule';

//import { loadProjects } from '../../..//actions/classModel';
import ClassModelView,{ClassModelViewProps} from '../../classModel/ClassModelView';

const mapStateToProps = (state: ApplicationState): ClassModelViewProps => ({
    classModel: state.classModel,
});

// @ts-ignore
const mapDispatchToProps = (dispatch: any, ownProps: ClassModelViewProps) => {
if(!ownProps.module) {
throw new Error('');
}
const actions = ownProps.module.actions;
return {
//"fetchEntities": () => dispatch(actions.fetchEntities()),
    "loadProjects": () => dispatch(actions.loadProjects()),
};
};

//@ts-ignore
const ClassModelContainer = connect(mapStateToProps, mapDispatchToProps)((props) => <ClassModelView {...props}/>);
export { ClassModelContainer };
