import { ModuleState, ActionTypes,POPULATE_MENUS,ADD_MENU_ITEM } from './types';
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
    switch(action.type) {
        case ADD_MENU_ITEM:
            const item = action.item;
            if(state.menuItems.has(item.key)) {
                return state;
            }
            return Object.assign({}, state, { menuItems: state.menuItems.set(item.key, item) });
        case POPULATE_MENUS:
            /* do stuff and return updated state */
            return state;
        default:
            return state;
    }
};
