import React from 'react';
import Tree, { TreeNode } from './rc-tree';
import {SiteInterface} from '../src/types';
import RcTreeAdapter from '../model/tree/RcTreeAdapter';
import {EntitiesState,EntityPojo,EntityColumnPojo} from '../modules/entities/types';
import {List,Map} from 'immutable'

interface MainTreeState {
    autoExpandParent?: any;
    expandedKeys?: any;
    treeData?: any;
    keys: Map<string, any>;
}

export interface MainTreeProps {
    site?: SiteInterface;
    entities?: EntitiesState;
    addSelectedEntities?: (entities: any) => void;
}

export default class MainTree extends React.Component<MainTreeProps> {
    state: MainTreeState = { keys: Map<string, any>() };
    onExpand: (expandedKeys: {}) => void;
    onSelect = (selectedKeys: any, info: any) => {
        if(this.props.addSelectedEntities) {
        }
        console.log('onSelect', selectedKeys, info);
        this.setState({
            selectedKeys,
        });
    }

    static getDerivedStateFromProps(props: MainTreeProps, state: MainTreeState) {
        const treeData: { [k: string]: any }[] = [];
        const ec: any[] = [];
        const entities = { key: 'entities', title: 'Entities', children: ec };
        treeData.push(entities);
        let keys = Map<string,any>();
        if(props.entities && props.entities.entities) {
            props.entities.entities.forEach((e: EntityPojo) => {
                const children = e.columns ?e.columns.map((c: EntityColumnPojo) => ({ key: `entities-${e.name}-${c.propertyName}`, title: c.propertyName, children: []})) : [];
                const key = `entities-${e.name}`
                keys = keys.set(key, e.name);
                ec.push({ key, title: e.name, children });
            });
        }
        return { treeData, keys };
    }


    constructor(props: MainTreeProps) {
        super(props);
        this.onExpand = this._onExpand.bind(this);
    }

    _onExpand(expandedKeys: {}) {
        this.setState({expandedKeys, autoExpandParent: false });
    }

    render() {
        // @ts-ignore
        const loop = data => {
            // @ts-ignore
            return data.map((item) => {
                if (item.children) {
                    return (
                        <TreeNode
                            key={item.key} title={item.title}
                            disableCheckbox={item.key === '0-0-0-key'}
                        >
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={item.key} title={item.title} />;
            });
        };
        return <Tree
            onExpand={this.onExpand}
            onSelect={this.onSelect}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}>
            {loop(this.state.treeData)}
        </Tree>;
    }
}
