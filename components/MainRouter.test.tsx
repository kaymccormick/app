import React from 'react';
import { shallow,mount } from 'enzyme';
import MainRouter from './MainRouter';
import { WebApplication } from '../src/WebApplication';
import RestClient from '@heptet/rest-client';

let restClient= new RestClient({baseUri:'', logDebug: (arg) => console.log(arg)});
let configJs = require('../core.conf').default;
let app = new WebApplication({ config: configJs, restClient });
app.init();

beforeEach(() => {
    configJs = require('../core.conf').default;
    app = new WebApplication({ config: configJs, restClient });
    app.init();
});


test('MainRouter', () => {
    const wrapper = mount(<MainRouter store={app.store!} app={app}/>);
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
});
