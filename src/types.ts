import Tree from '../model/tree/Tree';
export interface Resources { [resourceName: string]: any }
export interface Reducers { [reducerName: string]: any }

export interface SiteInterface {
    mainMenuTree: Tree;
}
  