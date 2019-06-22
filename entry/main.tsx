import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';

const root = document.getElementById('root');
ReactDOM.hydrate(<Main />, root);
