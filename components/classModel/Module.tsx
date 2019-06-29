import React from 'react';

interface ModuleProps {
    name: string;
    id: number;
}
export default class Module extends React.Component<ModuleProps> {

    render() {
        return <div className="module"><div className="module__name">{this.props.name}</div>
        </div>;
    }
}
