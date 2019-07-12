import React from 'react';
import Site from '../site/Site';
import { WebApplication } from '../src/WebApplication';

/* fashioned with some help from https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858 */

export interface AppContextInterface {
  site: Site;
  app: WebApplication;
  }

const ctx = React.createContext<AppContextInterface|null>(null);
export const AppContextProvider = ctx.Provider;
export const AppContextConsumer = ctx.Consumer;