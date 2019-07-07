import BaseModel from '../BaseModel';
import TreeNode from './TreeNode';

export default class Tree extends BaseModel {
    public rootNode: TreeNode = new TreeNode('<root>');
    public constructor(commonName: string, displayName?: string) {
        super();
        this.commonName = commonName;
        this.displayName = displayName === undefined ? commonName : displayName;
    }
}
