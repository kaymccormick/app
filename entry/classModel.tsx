import React from 'react';
import ReactDOM from 'react-dom';
import ClassModel from '../components/ClassModel';

// @ts-ignore

const root = document.getElementById('root');
ReactDOM.hydrate(<ClassModel />, root);
