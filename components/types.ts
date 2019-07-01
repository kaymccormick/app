import Entity from '../model/Entity';
import * as Model from '../model';
import {List} from "immutable";
import {DropTargetMonitor} from "react-dnd";
import {ApplicationState, EntityUIState} from "../model/types";

export interface EntityProps {
    entity: Model.Entity;
    editMode?: boolean;
    connectDragSource?: any;
    isDragging?: boolean;
    modelKey: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index: number;
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
    moveEntity?: (index: number, x: number, y: number) => ApplicationState
}
export interface EntityContainerProps {
index: number;
entity?: Model.Entity;
}
