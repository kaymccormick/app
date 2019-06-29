
import { Pojo } from '../types';

export default class TreeNode {
public displayName: string;
public children: TreeNode[] = [];
public constructor(displayName: string) {
this.displayName = displayName;
}

}
