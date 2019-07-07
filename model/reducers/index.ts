import { combineReducers } from 'redux';
import{ModelFactory} from '../types';
import entityViewUI from './entityViewUI';
import classModel from './classModel';
import model from './model';
import RestClient from '@heptet/rest-client'

interface Args {
    modelFactory: ModelFactory;
    classModel: { restClient: RestClient };
}

export default (args: Args): any => combineReducers( { entityViewUI, model: model(args.modelFactory), classModel: classModel(args.classModel) } )

