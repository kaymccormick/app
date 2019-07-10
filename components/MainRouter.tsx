import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainViewLayout, {MainViewLayoutProps} from './MainViewLayout';
import { MainComponentBaseProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainRouterProps extends MainComponentBaseProps {
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
        return <MainViewLayout site={this.props.site} renderMainView={() =>
            <Router basename="/entityView"><React.Suspense fallback={<div>loading</div>}>{routes}</React.Suspense></Router>}/>;
    }
}
