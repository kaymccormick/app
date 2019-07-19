import { ApplicationModule } from './ApplicationModule';
import Tree from '../model/tree/Tree';
import { AppLogger } from './AppLogger';
import { Configuration } from './Configuration';
import { WebApplication } from './WebApplication';

export type ModuleType = ApplicationModule<any>;

export interface BasicLogger {
    debug: LeveledLogMethod;
    error: LeveledLogMethod;
}

type LogCallback = (error?: any, level?: string, message?: string, meta?: any) => void;
export interface LeveledLogMethod {
    (message: string, callback: LogCallback): any;
    (message: string, meta: any, callback: LogCallback): any;
    (message: string, ...meta: any[]): any;
//    (infoObject: object): any;
}

export interface JsConfig {
    [propName: string]: any;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Resources { [resourceName: string]: any }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Reducers { [reducerName: string]: any }

export type CoreModuleKey = "menus"
| "entities"
| "classModel"
| "jsontree"
| string
;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CoreModule = ApplicationModuleInterface<any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApplicationModuleType = ApplicationModule<any>;

export interface Action {
    type: string;
}

export interface SiteInterface {
    mainMenuTree: Tree;
}

export interface Actions {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    [actionName: string]: any;
}

export interface ApplicationModuleInterface<S> {
    logger: AppLogger;
    actions: Actions;
    name: string;
    key: string;
    setup(app: WebApplication, config: Configuration): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getReducers(): any;
    getInitialState(): S;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMainComponent(): Promise<any>;
}
