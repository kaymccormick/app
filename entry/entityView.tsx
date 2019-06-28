import React from 'react';
import ReactDOM from 'react-dom';
import EntityViewRouter from '../components/EntityViewRouter';
const root = document.getElementById('app');
ReactDOM.hydrate(<EntityViewRouter />, root);
