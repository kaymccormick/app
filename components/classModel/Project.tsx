import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram} from "@fortawesome/free-solid-svg-icons";

export interface ProjectProps {
    name: string;
    id: number;
}
export default class Project extends React.Component<ProjectProps> {

    render() {
        return <div className="project"><div className="project__name">{this.props.name}</div>
            <FontAwesomeIcon icon={faProjectDiagram}/>
        </div>;
    }
}
