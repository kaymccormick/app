import { WebApplication } from '../src/WebApplication';
import Site from '../site/Site';
import React from 'react';
import MainRouter from './MainRouter';
import { AppContextProvider } from './AppContext';

export interface AppProps {
    site: Site;
    app: WebApplication;
    store: any;
}

export default class App extends React.Component<AppProps> {
    public render() {
        return <AppContextProvider value={{site: this.props.site, app: this.props.app}}><MainRouter {...this.props}/></AppContextProvider>;
    }
}
