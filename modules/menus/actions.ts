import {List} from 'immutable';
import { ActionTypes, SELECT_ITEM, POPULATE_MENUS, ADD_MENU_ITEM ,MenuItemPojo } from './types';

export function selectItem(item: MenuItemPojo) {
return { type: SELECT_ITEM, item };
}

export function addMenuItem(item: MenuItemPojo) {
    return {type: ADD_MENU_ITEM, item};
}
