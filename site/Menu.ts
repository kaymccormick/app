import Tree from '../model/tree/Tree';
import TreeNode from '../model/tree/TreeNode';

export default () => {
    const tree = new Tree('Menu');
    tree.rootNode.children.push(new TreeNode('Users'));
    return tree;
};
  