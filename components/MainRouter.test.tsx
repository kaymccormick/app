import React from 'react';
import { shallow,mount } from 'enzyme';
import MainRouter from './MainRouter';
import { WebApplication } from '../src/WebApplication';
jest.mock('../src/WebApplication');
jest.mock('../src/Configuration');

beforeEach(() => {
// @ts-ignore
WebApplication.mockClear();
// @ts-ignore
WebApplication.mockImplementation(() => {
return {
  modules: () => [],
};
});
});

test('MainRouter', () => {
const app = new WebApplication();
const wrapper = mount(<MainRouter app={app}/>);
expect(wrapper).toBeDefined();
expect(wrapper.html()).toMatchSnapshot();
});
