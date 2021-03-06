import { Provider } from 'react-redux';
import React from 'react';
import { WebApplication } from '../src/WebApplication';
import { ApplicationModule } from '../src/ApplicationModule';
import { mount, shallow } from 'enzyme';

import RestClient from '@heptet/rest-client';

let restClient= new RestClient({baseUri:'', logDebug: (arg) => console.log(arg)});
let configJs = require('../core.conf').default;
let app = new WebApplication({ config: configJs, restClient });
app.init();
let table = app.modules.map((m): [string, ApplicationModule<any>] => [m.key, m]);
console.log(table);

beforeEach(() => {
    configJs = require('../core.conf').default;
    app = new WebApplication({ config: configJs, restClient });
    app.init();
});

test.each(table)('%s', (key, mod) => {
    expect(mod).toBeDefined();
});

test.each(table)('%s.getInitialState', (key,mod) => {
    const state = mod.getInitialState();
    expect(state).toBeDefined();
});
test.each(table)('%s.getReducers', (key,mod) => {
    const reducer = mod.getReducers();
    expect(reducer).toBeDefined();
    expect(typeof reducer).toBe('function');
    const state = reducer(undefined, { type: 'notarealaction' });
    expect(state).toBeDefined();
});
test('unique module keys', () => {
    const keys = app.modules.map((mod) => mod.key);
    expect(app.modules.filter((mod: ApplicationModule<any>, index: number) => keys.indexOf(mod.key, index + 1) !== -1)).toHaveLength(0);
});
test.each(table)('%s.actions', (key,mod) => {
    const actions = mod.actions;
    Object.keys(actions).forEach((k) => {
        const action = actions[k];
        expect(typeof action).toBe('function');
    });
});
test.each(table)('%s.getMainComponent', (key: string, mod: ApplicationModule<any>) => {
    return mod.getMainComponent().then((MainComponent) => {
        const wrapper = shallow(React.createElement(Provider, { store: app.store! }, React.createElement(MainComponent.default, { module: mod })));
        expect(wrapper.html()).toMatchSnapshot();
    });
});
