import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BasicModelFactory from '../model/BasicModelFactory';
import Site from '../site/Site';
import RestClient from '@heptet/rest-client'
import { Configuration } from '../src/Configuration';
import MainRouter from "../components/MainRouter";
import { WebApplication } from '../src/WebApplication';

const restClient = new RestClient({baseUri: '/cme',
    logDebug: console.log});

const app = new WebApplication();
app.configuration.addResource('classModelRestClient', restClient);
app.init();

const reducers = app.configuration.collectReducers();
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
ReactDOM.hydrate(<Provider store={store}><MainRouter app={app} site={site}/></Provider>, root);
