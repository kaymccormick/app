import React from 'react';
import { Registry, Module } from 'classModel';

export default (props: {key: string; module: Module}) => <div>
    <div>hi {props.key}</div>
</div>;
