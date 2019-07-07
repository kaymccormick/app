import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import { Pojo } from 'classModel';

export interface ProjectProps {
    project?: Pojo.ProjectPojo;
}
export default class Project extends React.Component<ProjectProps> {

    render() {
        return <div className="project"><div className="project__name">{this.props.project ? this.props.project.name : ''}</div>
            <FontAwesomeIcon icon={faProjectDiagram}/>
        </div>;
    }
}
