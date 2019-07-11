import {List} from 'immutable';
import { ActionTypes, ACTION_TYPE } from './types';

export function actionType(item: any): ActionTypes {
return { type: ACTION_TYPE /*rest of fields*/ };
}
