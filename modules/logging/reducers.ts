import { ModuleState, ActionTypes,ACTION_TYPE } from './types';
import { ApplicationModule } from '../../src/ApplicationModule';
import { ApplicationModuleType } from '../../src/types';
import {List,Map} from 'immutable';

export interface Args {
/* Args */
 module: ApplicationModuleType;
}
 
export default (args: Args) => (
  state: ModuleState = args.module.getInitialState(),
  action: ActionTypes): ModuleState | undefined => {
  console.log(action.type);
    switch(action.type) {
        case ACTION_TYPE:
           /* do stuff and return updated state */
            return state;
        default:
            return state;
    }
};
