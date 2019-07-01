import React from 'react';
import * as EntityCore from '../../entity/core';
import { Types, EntityAttributeProps } from '../types';

class EntityAttribute extends React.Component<EntityAttributeProps> {
    render() {
        return <div className="entityAttribute"><div className="entityAttribute__displayName">{this.props.entityAttribute.displayName}</div></div>;
    }
}

export default EntityAttribute;

