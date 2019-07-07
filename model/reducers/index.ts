import { combineReducers } from 'redux';
import{ModelFactory,ClassModelFactory} from '../types';
import entityViewUI from './entityViewUI';
import classModel from './classModel';
import model from './model';

type Args= {
modelFactory: ModelFactory;
classModel: {};
}

export default (args: Args): any => combineReducers( { entityViewUI, model: model(args.modelFactory), classModel: classModel(args.classModel) } )

