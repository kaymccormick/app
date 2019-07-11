import { ApplicationModule } from './ApplicationModule';
import Tree from '../model/tree/Tree';
export interface Resources { [resourceName: string]: any }
export interface Reducers { [reducerName: string]: any }

export type ApplicationModuleType = ApplicationModule<any>;

export interface Action {
    type: string;
}

export interface SiteInterface {
    mainMenuTree: Tree;
}
  