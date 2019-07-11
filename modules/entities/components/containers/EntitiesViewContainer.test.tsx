import RestClient from '@heptet/rest-client'
jest.mock('@heptet/rest-client');
import { Provider } from 'react-redux';
import {List} from 'immutable';
import {Pojo} from 'classModel';
import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import EntitiesViewContainer from './EntitiesViewContainer';
import { shallow,mount } from 'enzyme';
import {ApplicationState} from "../../../../model/types";
import { WebApplication } from '../../../../src/WebApplication';
import Site from '../../../../site/Site';
import {Module} from '../../Module';
jest.mock('../../Module');

let store: any;

beforeAll(() => {
// @ts-ignore
Module.mocksClear();
// @ts-ignore
RestClient.mocksClear();
const restClient = new RestClient({baseUri: '/cme',
    logDebug: console.log});

const app = new WebApplication();
app.configuration.addResource('classModelRestClient', restClient);
app.init();

const reducers = app.configuration.collectReducers();
store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const site = new Site();
});

test.skip('1', () => {
const m = new Module();
    const wrapper = mount(<Provider store={store}><EntitiesViewContainer module={m}/></Provider>);
    expect(wrapper.props().store).toBe(store);
});

