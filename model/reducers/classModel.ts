import { ClassModelState, Action} from '../types';
import { classModel as initialClassModelState } from '../ApplicationState';
export default (args: any) => (state: ClassModelState = initialClassModelState, action: Action): ClassModelState | undefined => {
switch(action.type) {
default:
return state;
}
};
