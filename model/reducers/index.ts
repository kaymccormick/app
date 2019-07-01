import { combineReducers } from 'redux';
import{ModelFactory} from '../types';
import entityViewUI from './entityViewUI';
import model from './model';

export default (factory: ModelFactory): any => combineReducers( { entityViewUI, model: model(factory) } )

