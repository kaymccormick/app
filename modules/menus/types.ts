import { Map, List, Set } from 'immutable';
import { ApplicationModule } from '../../src/ApplicationModule';
import{ MenuItemPojo } from'../menus/types';

export const POPULATE_MENUS = 'POPULATE_MENUS';
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const ADD_MENU_ITEMS = 'ADD_MENU_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ApplicationModule<ModuleState> {
}

export interface PopulateMenusAction {
    type: typeof POPULATE_MENUS;
}

export interface AddMenuItemAction {
    type: typeof ADD_MENU_ITEM;
    item: MenuItemPojo;
}
export interface AddMenuItemsAction {
    type: typeof ADD_MENU_ITEMS;
    items: List<MenuItemPojo>;
}
export interface SelectItemAction {
    type: typeof SELECT_ITEM;
    item: MenuItemPojo;
}

export type ActionTypes = PopulateMenusAction  | AddMenuItemAction | AddMenuItemsAction | SelectItemAction /* | other types */

export interface MenuItemPojo {
    parentKey?: string;
    key: string;
    title: string;
    subItems?: Set<string>;
}

export interface ModuleState {
/* Module state fields */
/* After adding a field here, it needs to be returned from
   Module.getInitialState */
    menuItems: Map<string, MenuItemPojo>;
}
