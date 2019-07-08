import React from 'react';

import * as Components from './';
import { List } from 'immutable'
import classNames from 'classnames';
import {ApplicationState, ClassModelState} from "../../model/types";
import {ApplicationModule} from '../../src/ApplicationModule';
import {Types} from "../types";

export interface ClassModelViewProps {
    classModel?: ClassModelState;
    loadProjects?: () => void;
    fetchEntities?: () => void;
    module?: ApplicationModule;
}

/* used in MainView */
class ClassModelView extends React.Component<ClassModelViewProps> {

    state: any = { };
    public constructor(props: ClassModelViewProps) {
        super(props);
    }

    public componentDidMount() {
        console.log('moutn');
        if(this.props.fetchEntities) {
            console.log('fetch entities');
            this.props.fetchEntities();
        }
    }

    public render() {
        const model = this.props.classModel;
        const content = model && model.projects ? model.projects.map(project => <Components.Project project={project} key={project ? project.id :0}/>) : [];
        return <div>{content}</div>;
    }
}
export { ClassModelView };
export default ClassModelView;

