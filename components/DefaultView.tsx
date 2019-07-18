import React from 'react';
import { WebApplication } from '../src/WebApplication';
import { ApplicationModule } from '../src/ApplicationModule';
import { Link } from 'react-router-dom';

export interface Props {
    app: WebApplication;
}
export default class DefaultView extends React.Component<Props> {
    render() {
        const routeLinks = this.props.app.modules.map((m: ApplicationModule<any>) => <li key={m.key}><Link to={`/${m.key}`}>{m.name}</Link></li>);
        return <ul>{routeLinks}</ul>;
    }
}
	
	