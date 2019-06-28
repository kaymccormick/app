import React, {MouseEventHandler} from 'react';
import Button from '../../Button';
import Entity from '../../../model/Entity';

export interface EntityAddProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default class EntityAdd extends React.Component<EntityAddProps> {
  render() {
    return <div className="entityAdd"><Button onClick={this.props.onClick} value="Add Entity"/></div>;
    }
}
