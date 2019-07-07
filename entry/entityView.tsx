import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BasicModelFactory from '../model/BasicModelFactory';
import EntityViewRouter from '../components/EntityViewRouter';
import Site from '../site/Site';
//import rootReducer from '../model/reducers';
import RestClient from '@heptet/rest-client'
//import ApplicationState from '../model/ApplicationState';
import {init} from '../src/init'
import { Configuration } from '../src/Configuration';
import { combineReducers } from 'redux';


const restClient = new RestClient({baseUri: '/cme',
    logDebug: console.log});
const config = new Configuration();
config.addResource('restClient', restClient);
init(config);
const reducers = config.collectReducers();
console.log(Object.keys(reducers));
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

const modelFactory = new BasicModelFactory();

const site = new Site();

window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const root = document.getElementById('app');
ReactDOM.hydrate(<Provider store={store}><EntityViewRouter site={site}/></Provider>, root);
