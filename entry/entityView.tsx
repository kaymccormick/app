import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Site from '../site/Site';
import RestClient from '@heptet/rest-client'
import { Configuration } from '../src/Configuration';
import App from "../components/App";
import { WebApplication } from '../src/WebApplication';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const restClient = new RestClient({baseUri: '/cme', logDebug: (arg) => {}});
const configJs = require('../core.conf').default;
console.log(configJs);
const app = new WebApplication({ config: configJs, restClient });
app.init();

const site = new Site();

window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const root = document.getElementById('app');
ReactDOM.hydrate(<Provider store={app.store!}><DndProvider backend={HTML5Backend}><App store={app.store} app={app} site={site}/></DndProvider></Provider>, root);
