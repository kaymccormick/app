import React from 'react';
import ReactDOM from 'react-dom';
import EntityViewRouter from '../components/EntityViewRouter';
import Site from '../site/Site';

const site = new Site();

window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const root = document.getElementById('app');
ReactDOM.hydrate(<EntityViewRouter site={site} />, root);
