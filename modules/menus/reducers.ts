import { ModuleState, ActionTypes,POPULATE_MENUS,ADD_MENU_ITEM } from './types';
import { ApplicationModule } from '../../src/ApplicationModule';
import { ApplicationModuleType } from '../../src/types';
import {List,Map,Set} from 'immutable';

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
            let menuItems = state.menuItems;
            if(menuItems.has(item.key)) {
                return state;
            }
            const parentMenuItem = menuItems.get(item.parentKey!);
            if(!parentMenuItem) {
            return state;
            }
            if(!parentMenuItem.subItems) {
            parentMenuItem.subItems = Set<string>();
            }
            parentMenuItem.subItems! = parentMenuItem.subItems.add(item.key);
            menuItems = menuItems.set(parentMenuItem.key, parentMenuItem);
            menuItems = menuItems.set(item.key, item);
            return Object.assign({}, state, { menuItems });
        case POPULATE_MENUS:
            /* do stuff and return updated state */
            return state;
        default:
            return state;
    }
};
