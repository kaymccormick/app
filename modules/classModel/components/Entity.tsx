import React from 'react';
import { Pojo } from 'classModel';
//@ts-ignore
import { Rect } from 'react-konva';

export interface Props {
}
export default class Entity extends React.Component<Props> {
    render() {
         return <Rect x={20} y={20} width={50} height={50}/>;
    }
}
