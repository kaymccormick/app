import Tree from '../tree/Tree';
import { SiteInterface } from '../../src/types';

export default abstract class Site implements SiteInterface {
// @ts-ignore
    public mainMenuTree: Tree;
}
