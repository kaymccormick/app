import React from 'react';
import {SiteInterface} from '../src/types';
import {EntitiesState,EntityPojo,EntityColumnPojo} from '../modules/entities/types';
// @ts-ignore
import TheMetisMenu from 'react-metismenu';
import LinkComponent from './LinkComponent';
import { WebApplication } from '../src/WebApplication';

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
    addSelectedEntities?: (entities: any) => void;
    //    store?: any;
    selectItem?: (item: any) => void;
}

export default class MetisMenu extends React.Component<MetisMenuProps> {
    state: MetisMenuState = { content: []};

    static getDerivedStateFromProps(props: MetisMenuProps, state: MetisMenuState) {

        const entitiesContent: any[] = [];
        if(props.entities && props.entities.entities) {
            props.entities.entities.forEach((e: EntityPojo) => {
                if(e.columns && e.columns.length) {
                    console.log('got columns');
                    const entityContent = { label: e.name, to: `entities-${e.name}`, id: `entities-${e.name}`, content: e.columns ? e.columns.map((c: EntityColumnPojo) => ({ id: `entities-${e.name}-${c.propertyName}`, label: c.propertyName, to: `entities-${e.name}-${c.propertyName}`})) : [] };
                    entitiesContent.push(entityContent);
                }
            });
        }
        if(entitiesContent.length) {
            const entitiesMenu = { content: entitiesContent, label: 'Entities' };
            const content = [entitiesMenu];
            return { content };
        }
        return { content: [] }
    }


    constructor(props: MetisMenuProps) {
        super(props);
    }


    render() {//
        const linkComponent = (props: any) => <LinkComponent selectItem={this.props.selectItem} {...props}/>
        return <TheMetisMenu LinkComponent={linkComponent} content={this.state.content}/>
    }
}
