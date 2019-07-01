import Site from '../model/site/Site';
import Tree from '../model/tree/Tree';
import createMenu from './Menu';

export default class extends Site {
    public constructor(){
        super();
        this.mainMenuTree = createMenu();
    }
}
