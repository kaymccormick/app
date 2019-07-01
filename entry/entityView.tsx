import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import EntityViewRouter from '../components/EntityViewRouter';
import Site from '../site/Site';
import
    rootReducer from '../model/reducers';

const store = createStore(rootReducer);

const site = new Site();

window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const root = document.getElementById('app');
ReactDOM.hydrate(<Provider store={store}><EntityViewRouter site={site}/></Provider>, root);
