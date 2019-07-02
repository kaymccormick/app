import Tree from '../model/tree/Tree';
import TreeNode from '../model/tree/TreeNode';

export default () => {
    const tree = new Tree('Menu');
    const users = new TreeNode('Users');
    users.children.push(new TreeNode('List'));
    tree.rootNode.children.push(users);
    
    return tree;
};
  