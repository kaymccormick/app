import React from 'react';
import Tree, { TreeNode } from 'rc-tree';
import {SiteInterface} from '../src/types';
import RcTreeAdapter from '../model/tree/RcTreeAdapter';
import {EntitiesState} from '../modules/entities/types';

interface MainTreeState {
    autoExpandParent?: any;
    expandedKeys?: any;
    treeData?: any;
}

export interface MainTreeProps {
    site?: SiteInterface;
    entities?: EntitiesState,
}

export default class MainTree extends React.Component<MainTreeProps> {
    state: MainTreeState = {};
    onExpand: (expandedKeys: {}) => void;
  
    constructor(props: MainTreeProps) {
        super(props);
        if(props.site) {
        const adapter = new RcTreeAdapter(props.site.mainMenuTree);
        this.state = { treeData: adapter.toData() };
  }
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
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}>
            {loop(this.state.treeData)}
        </Tree>;
    }
}
