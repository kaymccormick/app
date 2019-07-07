import Entity from '../model/entity/Entity';
import * as Model from '../model';
import {List} from "immutable";
import {DropTargetMonitor} from "react-dnd";
import {ApplicationState, EntityUIState} from "../model/types";
import { SiteInterface } from '../src/types';
import { WebApplication }from '../src/WebApplication'

export interface MainComponentBaseProps {
site?: SiteInterface;
app?: WebApplication;
}

export interface EntityProps {
    entity?: Model.Entity;
    editMode?: boolean;
    // @ts-ignore
    connectDragSource?: any;
    isDragging?: boolean;
    modelKey: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index: number;
    updateEntity?: any;
    changeSelection?: any;
}

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface EntityDragDropItem {
    modelKey: string;
    clientRect?: Rect;
}

export interface EntityViewProps {
    entities: List<Entity>;
    entityUIState: List<EntityUIState>;
    selectedIndex?: number | undefined;
    canDrop?: boolean;
    connectDropTarget?: any;
    handleDrop?: (monitor: DropTargetMonitor) => void;
    moveEntity?: (index: number, x: number, y: number) => ApplicationState;
}
export interface EntityContainerProps {
    index?: number;
    entity?: Model.Entity;
    updateEntity?: any;
    modelKey?: string;
}
export interface EntityViewContainerProps {
}
export interface EntitySectionProps {
    section: string;
    sectionTitle?: string;
    index?: number;
    entity?: Model.Entity;
}
export interface EntityAttributesSectionProps extends EntitySectionProps {
// @ts-ignore
    addAttribute?: any;
}

export interface EntityMethodsSectionProps extends EntitySectionProps {
}
export interface MyEditorState {
}
export const Types = {
    ENTITY: 'entity',
}
export interface EntityAttributeProps {
    entityAttribute: Model.EntityAttribute;
}
