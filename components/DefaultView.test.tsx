import React from 'react';
import{ shallow} from 'enzyme';
import DefaultView from './DefaultView';
import { createWebApplication } from '../src/testUtils';

let app = createWebApplication();
app.init();
beforeEach(() => {
    app = createWebApplication();
    app.init();
});

test('render',() => {
    const wrapper = shallow(<DefaultView app={app}/>);
});
