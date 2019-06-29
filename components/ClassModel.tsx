import React from 'react';
import axios from 'axios';
import * as Components from './classModel';
import { EntityCore } from 'classModel';
import ModuleComp from './classModel/Module';

export interface ClassModelProps {
    projects?: EntityCore.Project[];
}

export default class ClassModel extends React.Component<ClassModelProps> {
    state: { error?: Error; projects: EntityCore.Project[] };

    public constructor(props: ClassModelProps) {
        super(props);
        this.state = { projects: this.props.projects || []};
    }

    componentDidMount(): void {
        console.log('comonent did mount');
        axios.get('/entity/project').then(response => {
            this.setState({project: response.data.projects});
        }).catch(error =>{
            this.setState({error: error});
        });
    }
    
    /*
        createConnection().then(connection => {
            let repository = connection.getRepository(Module);
            repository.find().then(modules => {
                this.setState({modules});
            })
        })
    }*/

    render() {
    // @ts-ignore
        return <div className="projects">{this.state.projects.map(m => <Components.Project name={m.name} key={m.id} id={m.id}/>)}</div>;
    }
}
