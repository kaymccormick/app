import React from 'react';
import { Set } from 'immutable';
// @ts-ignore
import TheMetisMenu from 'react-metismenu';

import {SiteInterface} from '../src/types';
import {EntitiesState,EntityPojo,EntityColumnPojo} from '../modules/entities/types';
import {ModuleState as MenusState,MenuItemPojo} from '../modules/menus/types';
import LinkComponent from './LinkComponent';
import { WebApplication } from '../src/WebApplication';


interface MetisMenuItem {
    label: string;
    id: string;
    content?: MetisMenuItem[];
    to?: string;
}

interface MetisMenuState {
    autoExpandParent?: any;
    expandedKeys?: any;
    treeData?: any;
    content: any[];
}

export interface MetisMenuProps {
    app?: WebApplication;
    site?: SiteInterface;
    entities?: EntitiesState;
    menus?: MenusState;
    addSelectedEntities?: (entities: any) => void;
    //    store?: any;
    selectItem?: (item: any) => void;
}

export default class MetisMenu extends React.Component<MetisMenuProps> {
    state: MetisMenuState = { content: []};

    static getDerivedStateFromProps(props: MetisMenuProps, state: MetisMenuState) {
        const menus = props.menus;
        if(!menus || !menus.menuItems) { 
            return { content: [] };
        }
        const menuItems = menus.menuItems;
        const root = menuItems.get('');
        if(!root) {
            return { content: [] };
        }
    
        const processMenu = (menu: MenuItemPojo): MetisMenuItem => {
            if(menu.subItems && menu.subItems.count()) {
                return { label: menu.title, to: menu.key, id: menu.key,
                    content: menu.subItems.filter((key): boolean => key !== undefined).map((key) => menuItems.get(key!)).filter((item: MenuItemPojo|undefined): boolean => item != null).map((item: MenuItemPojo|undefined): MetisMenuItem => processMenu(item!)).toJS(),
                };
            } else {
                return { label: menu.title, to: menu.key, id: menu.key };
            }
        };

        const rootItem = processMenu(root);
        if(rootItem && rootItem.content) {
            return { content: rootItem.content };
        }
        else {
            return { content: [] };
        }
    }


    constructor(props: MetisMenuProps) {
        super(props);
    }


    render() {//
        const linkComponent = (props: any) => <LinkComponent selectItem={this.props.selectItem} {...props}/>
        return <TheMetisMenu LinkComponent={linkComponent} content={this.state.content}/>
    }
}
