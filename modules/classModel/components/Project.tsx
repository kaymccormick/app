import React from 'react';
import { Pojo } from 'classModel';
//@ts-ignore
import { Rect } from 'react-konva';

export interface ProjectProps {
    project?: Pojo.ProjectPojo;
}
export default class Project extends React.Component<ProjectProps> {

    render() {
//        return <div className="project"><div className="project__name">{this.props.project ? this.props.project.name : ''}</div>        </div>;
return <Rect x={20} y={20} width={50} height={50}/>;
    }
}
