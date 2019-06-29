import  {MouseEventHandler} from 'react';
import Entity from '../../../model/Entity';
import {Button} from "@progress/kendo-react-buttons";
import * as React from "react";

export interface EntityAddProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default class EntityAdd extends React.Component<EntityAddProps> {
  render() {
    return <div className="entityAdd"><Button onClick={this.props.onClick} title="Add Entity"/></div>;
    }
}
