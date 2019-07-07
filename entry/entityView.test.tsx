import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BasicModelFactory from '../model/BasicModelFactory';
import EntityViewRouter from '../components/EntityViewRouter';
import Site from '../site/Site';
//import rootReducer from '../model/reducers';
import RestClient from '@heptet/rest-client'
//import ApplicationState from '../model/ApplicationState';
import {init} from '../src/init'
import { Configuration } from '../src/Configuration';
import { combineReducers } from 'redux';

test('entityView', () => {
const restClient = new RestClient({baseUri: '/cme',
    logDebug: console.log});
const config = new Configuration();
config.addResource('restClient', restClient);
init(config);
const reducers = config.collectReducers();
const store = createStore(combineReducers(reducers));

const modelFactory = new BasicModelFactory();
//const store = createStore(rootReducer({modelFactory, classModel: { restClient }}));
const site = new Site();

window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const wrapper = mount(<Provider store={store}><EntityViewRouter site={site}/></Provider>);
});

