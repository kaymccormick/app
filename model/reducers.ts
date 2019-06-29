import { combineReducers } from 'redux';
import { entityViewApp as entityView } from './ApplicationState';
import { ADD_ENTITY } from './actions';

const entityViewApp = combineReducers({ entityView });
export default entityViewApp;
