import React from 'react';
import * as EntityCore from '../../entity/core';
import { Types } from '../../src/types';
export interface EntityAttributeProps {
  entityAttribute: EntityCore.EntityAttribute;
}

class EntityAttribute extends React.Component<EntityAttributeProps> {
  render() {
    return <div><div>{this.props.entityAttribute.displayName}</div></div>;
    }
    }

export default EntityAttribute;

