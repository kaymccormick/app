import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultView from './DefaultView';
import MainViewLayout, {MainViewLayoutProps} from './MainViewLayout';
import { MainComponentBaseProps } from './types';
import { ApplicationModule } from '../src/ApplicationModule';	
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainRouterProps extends MainComponentBaseProps {
    store: any;
}

export default class MainRouter extends React.Component<MainRouterProps> {
    public render() {
        if(!this.props.site || !this.props.app) {
            return null;
        }
        const app = this.props.app!;
        // @ts-ignore
        console.log(this.props.app.modules);
        // @ts-ignore

        const routes = app.modules!.map((m: ApplicationModule<any>) => <Route key={m.key} path={`/${m.key}`} render={() => React.createElement(React.lazy(() => m.getMainComponent()), { module: m })}/>);
        routes.splice(0, 0, <Route path="/" exact render={() => <DefaultView app={app}/>}/>);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return <Router basename="/app"><MainViewLayout app={app} store={this.props.store} site={this.props.site} renderMainView={() => <React.Suspense fallback={<div>loading</div>}>{routes}</React.Suspense>}/></Router>;

    }
}
