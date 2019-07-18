import { ModuleState, ActionTypes,POPULATE_MENUS,ADD_MENU_ITEM,ADD_MENU_ITEMS } from './types';
import { ApplicationModule } from '../../src/ApplicationModule';
import { ApplicationModuleType } from '../../src/types';
import { MenuItemPojo } from '../menus/types';

import {List,Map,Set} from 'immutable';

export interface Args {
    /* Args */
    module: ApplicationModuleType;
}

export default (args: Args) => (
    state: ModuleState = args.module.getInitialState(),
    action: ActionTypes): ModuleState | undefined => {
    const logger = args.module.logger;
    switch(action.type) {
        case ADD_MENU_ITEMS:
	{
	logger.debug('ADD_MENU_ITEMS');
	    let menuItems = state.menuItems;
	    let root = menuItems.get('root')!;
	    if(!root) {
	    logger.error('no root menuitem');
	      return state;
	      }
	    const x = Map<string, MenuItemPojo>(action.items.toSeq()
	    .map((item:MenuItemPojo|undefined) => [item!.key, item!]));
	    console.log(x.toJS());
	    menuItems = menuItems.merge(x);
	    root.subItems = root.subItems!.merge(x.filter((item: MenuItemPojo|undefined): boolean => item!.parentKey === '').map((item) => item!.key));
	    menuItems = menuItems.set('', root);
            return Object.assign({}, state, { menuItems });
	    }
        case ADD_MENU_ITEM:
	{
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
	    }
        case POPULATE_MENUS:
            /* do stuff and return updated state */
            return state;
        default:
            return state;
    }
};
