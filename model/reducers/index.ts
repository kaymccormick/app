import { combineReducers } from 'redux';

import entityViewUI from './entityViewUI';
import model from './model';

export default combineReducers( { entityViewUI, model } )
