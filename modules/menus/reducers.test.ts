import * as actions from "./actions";
import { Module } from "./Module";
import { AppLogger } from '../../src/AppLogger';
import { MenuItemPojo } from './types';
import makeReducer from "./reducers";
import { List, Set,Map,Seq} from 'immutable';
import RestClient from '@heptet/rest-client'
jest.mock('@heptet/rest-client');

beforeEach((): void => {
// @ts-ignore
    RestClient.mockClear();
});

test("1", () => {
    const restClient = new RestClient({ baseUri: "", logDebug: (arg) => console.log });
    const mod = new Module({ logger: new AppLogger(), restClient });
    const reducer = makeReducer({ module: mod });
    // @ts-ignore
    const state = reducer(undefined, { type: "test" });
    expect(state).toMatchSnapshot();
    let items = List<MenuItemPojo>();
    const testItem = {parentKey: '', title: 'test', key: 'test'};
    items = items.push(testItem);
    const newState = reducer(state, actions.addMenuItems(items));
    expect(newState).toBeDefined();
    const menuItems = newState!.menuItems;
    expect(menuItems).toBeDefined();
    const t = menuItems.get('test');
    expect(t).toBeDefined();
    expect(t).toEqual(testItem);
    let root= menuItems.get('');
    expect(root).toBeDefined();
    root =root!;
    expect(root.subItems!.includes('test')).toBeTruthy();
});
