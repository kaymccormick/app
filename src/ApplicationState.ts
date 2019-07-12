/**
 * Applicaton state shape
 */

import {MainMenuState,ModelState,EntityViewUIState,ClassModelState} from '../model/types';
import {EntitiesState} from '../modules/entities/types';

export interface ApplicationState {
    model: ModelState;
    entityViewUI: EntityViewUIState;
    classModel: ClassModelState;
    entities: EntitiesState;
    mainMenu: MainMenuState;
    [moduleName: string]: any;
}
