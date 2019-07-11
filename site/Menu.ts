import Tree from '../model/tree/Tree';
import TreeNode from '../model/tree/TreeNode';

export default () => {
    const tree = new Tree('Menu');
    const projects= new TreeNode('Projects');
    const users = new TreeNode('Users');
    users.children.push(new TreeNode('List'));
    tree.rootNode.children.push(projects, users);

    //    tree.rootNode.children.push(...connection.entityMetadatas.map(m => m.targetName).map(name =>new TreeNode(name)))
    
    return tree;
};
  