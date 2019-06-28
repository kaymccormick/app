import React from 'react';
import ReactDOM from 'react-dom';
import ClassModelRouter from '../components/ClassModelRouter';
console.log('foop');
const root = document.getElementById('app');
ReactDOM.hydrate(<ClassModelRouter />, root);
