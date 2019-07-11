import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainViewLayout, {MainViewLayoutProps} from './MainViewLayout';
import { MainComponentBaseProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainRouterProps extends MainComponentBaseProps {
    store: any;
}


export default class MainRouter extends React.Component<MainRouterProps> {
    public render() {
        if(!this.props.site) {
            return null;
        }
        // @ts-ignore
        console.log(this.props.app.modules);
        // @ts-ignore
        const routes = this.props.app.modules.map((m: ApplicationModule) => <Route key={m.key} path={`/${m.key}`} render={() => React.createElement(React.lazy(() => m.getMainComponent()), { module: m })}/>);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return <Router basename="/entityView"><MainViewLayout store={this.props.store} site={this.props.site} renderMainView={() => <React.Suspense fallback={<div>loading</div>}>{routes}</React.Suspense>}/></Router>;
    }
}
