import Tree from './Tree';
import TreeNode from './TreeNode';
import { Pojo } from '../types';

export default class RcTreeAdapter {
  public tree: Tree;

  public constructor(tree: Tree) {
    this.tree = tree;
  }

  public toData(): Pojo[] {
  const convert = (node: TreeNode): Pojo => {
  return { title: node.displayName,
  	 children: node.children.map(c => convert(c)),
	 key: '',
	 };
 };
 return this.tree.rootNode.children.map(c => convert(c));
 }
}
