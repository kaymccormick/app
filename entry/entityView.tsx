import React from 'react';
import ReactDOM from 'react-dom';
import EntityViewRouter from '../components/EntityViewRouter';
window.oncontextmenu = function ()
{
//    showCustomMenu();
    return false;     // cancel default menu
}
const root = document.getElementById('app');
ReactDOM.hydrate(<EntityViewRouter />, root);
