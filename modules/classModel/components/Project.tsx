import React from 'react';
import { Pojo } from 'classModel';

export interface ProjectProps {
    project?: Pojo.ProjectPojo;
}
export default class Project extends React.Component<ProjectProps> {

    render() {
        return <div className="project"><div className="project__name">{this.props.project ? this.props.project.name : ''}</div>
        </div>;
    }
}
