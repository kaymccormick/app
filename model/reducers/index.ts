import { combineReducers } from 'redux';

import entityViewUI from './entityViewUI';
import model from './model';

export default (factory) => combineReducers( { entityViewUI, model(factory) } )

