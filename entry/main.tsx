import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';

const root = document.getElementById('app');
ReactDOM.hydrate(<Main />, root);
