import { ApplicationModule } from './ApplicationModule';
import Tree from '../model/tree/Tree';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Resources { [resourceName: string]: any }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Reducers { [reducerName: string]: any }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApplicationModuleType = ApplicationModule<any>;

export interface Action {
    type: string;
}

export interface SiteInterface {
    mainMenuTree: Tree;
}
  