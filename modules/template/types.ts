import { Map, List } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';

export const ACTION_TYPE = 'ACTION_TYPE';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ApplicationModule<ModuleStaate> {
}

export interface ActionTypeAction {
    type: typeof ACTION_TYPE;
    /* other fields */
}
/* other action typs */

export type ActionTypes = ActionTypeAction /* | other types */

export interface ModuleState {
/* Module state fields */
}
