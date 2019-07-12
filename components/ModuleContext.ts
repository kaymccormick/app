import React from 'react';
import Site from '../site/Site';
import { WebApplication } from '../src/WebApplication';
import { ApplicationModule } from '../src/ApplicationModule';

/* fashioned with some help from https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858 */

export interface ModuleContextInterface {
    module: ApplicationModule<any>;
}

const ctx = React.createContext<ModuleContextInterface|null>(null);
export const ModuleContextProvider = ctx.Provider;
export const ModuleContextConsumer = ctx.Consumer;
