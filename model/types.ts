import { ADD_ENTITY, MOVE_ENTITY } from './actions';
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface Pojo {[propName: string]: any}
export interface Action {
type: string;
}
export interface MoveEntityAction extends Omit<Action, 'type'> {
type: "MOVE_ENTITY",
index: number;
x: number;
y: number;
}
export interface AddEntityAction extends Omit<Action, 'type'> {
type: "ADD_ENTITY";
}
