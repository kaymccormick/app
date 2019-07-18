import {List} from 'immutable';
import { ActionTypes, SELECT_ITEM, POPULATE_MENUS, ADD_MENU_ITEMS,ADD_MENU_ITEM ,MenuItemPojo } from './types';

export function selectItem(item: MenuItemPojo): ActionTypes {
    return { type: SELECT_ITEM, item };
}

export function addMenuItem(item: MenuItemPojo): ActionTypes {
    return {type: ADD_MENU_ITEM, item};
}

export function addMenuItems(items: List<MenuItemPojo>): ActionTypes {
    return {type: ADD_MENU_ITEMS, items};
}
