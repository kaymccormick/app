import React from 'react';
import {EntityPojo} from '../types';
import * as Components from './';

export interface EntityProps {
    entity?: EntityPojo;
}

export class Entity extends React.Component<EntityProps> {
    private ref: React.RefObject<any>;

constructor(props:EntityProps) {
super(props);
this.ref = React.createRef();
}
    public componentDidMount() {
    if(this.ref.current) {
        const rect = this.ref.current.getBoundingClientRect();
        console.log(rect);
        }
    }

    public render() {
        const outerStyles:React.CSSProperties = {
            margin:'.5rem',
            borderCollapse: 'collapse',
            gridRowGap:'0px',
            gridColumnGap:'0px',
            border: '1px solid black',
            display: 'inline-grid',
            gridTemplateRows: 'auto-fit 1fr'};

        const nameStyles: React.CSSProperties = {
        paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '3px',
            paddingBottom:'3px',
            borderBottom: '1px solid black',
            gridColumn:'span 2'};

        const name = this.props.entity ? this.props.entity.name : '';
        return <div ref={this.ref} style={outerStyles}>
            <div style={nameStyles}>{name}</div>
            {this.props.entity && this.props.entity.columns
            ? this.props.entity.columns.map((column: any) => column ? <Components.EntityColumn column={column}/> :null) : null}
        </div>;
    }
}
