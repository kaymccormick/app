import { CoreModuleKey } from './types';

/**
 * Applicaton state shape. Would like to deprecate this.
 */

export interface ApplicationState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [moduleKey: string]: any;
}
