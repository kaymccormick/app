import React from 'react';

export interface ButtonProps {
    value: string;
    [propName: string]: any;
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        return <button {...this.props}>{this.props.value}</button>;

    }
}
