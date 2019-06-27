import React from 'react';
import { Registry } from 'classModel';
/*import { Module } from "classModel/lib/src/entity/core"*/
import ModuleComp from './classModel/Module';
/*import {createConnection, createRegistry} from "../src/Factory";*/
import axios from 'axios';

export default class ClassModel extends React.Component {
    state: { error?: Error, modules: {}[] } = {modules: []};


    componentDidMount(): void {
    axios.get('/entity/module').then(response => {
    this.setState({modules: response.data.modules});
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
        return <div>{this.state.modules.map(m => <ModuleComp name={m.name} key={m.id} id={m.id}/>)}</div>;
    }
}
