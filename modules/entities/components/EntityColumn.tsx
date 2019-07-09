import React from 'react';
import {EntityColumnPojo} from '../types';

export interface EntityColumnProps {
    column?: EntityColumnPojo;
}

export class EntityColumn extends React.Component<EntityColumnProps> {
    public render() {
        return <React.Fragment><div style={{gridColumn: 'span 2'}}>{this.props.column?this.props.column.propertyName:''}</div></React.Fragment>;
    }
}
