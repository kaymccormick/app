/**
 * Applicaton state shape. Would like to deprecate this.
 */

import {MainMenuState,ModelState,EntityViewUIState,ClassModelState} from '../model/types';
import {EntitiesState} from '../modules/entities/types';

export interface ApplicationState {
/*    model: ModelState;
    entityViewUI: EntityViewUIState;
    classModel: ClassModelState;
    entities: EntitiesState;
    mainMenu: MainMenuState;*/
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [moduleName: string]: any;
}
