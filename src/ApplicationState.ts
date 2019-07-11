/**
 * Applicaton state shape
 */

import {ModelState,EntityViewUIState,ClassModelState} from '../model/types';
import {EntitiesState} from '../modules/entities/types';

export interface ApplicationState {
    model: ModelState;
    entityViewUI: EntityViewUIState;
    classModel: ClassModelState;
    entities: EntitiesState;
    [moduleName: string]: any;
}
