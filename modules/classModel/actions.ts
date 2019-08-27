import {List,Map,Set} from 'immutable';
import { Pojo } from 'classModel';
import RestClient from '@heptet/rest-client';
import { EntitiesType, ActionTypes } from './types';
import { addMenuItems } from '../../modules/menus/actions';
import { MenuItemPojo } from '../../modules/menus/types';
import { Actions } from '../../src/types';

import {
    InputObject,
    RECEIVE_INITIAL_DATA,
    REQUEST_INITIAL_DATA,
    RECEIVE_PROJECT_DATA,
    REQUEST_PROJECT_DATA,
    } from './types';

export default (restClient: RestClient): Actions => {
    const receiveInitialData = (result: EntitiesType): ActionTypes =>{
        return { type: RECEIVE_INITIAL_DATA, result};
    }

    const receiveProjectData = (projects: List<Pojo.ProjectPojo>): ActionTypes =>{
        return { type: RECEIVE_PROJECT_DATA, projects };
    }

    const requestInitialData = (): ActionTypes => {
        return { type: REQUEST_INITIAL_DATA };
    }
    const requestProjectData = (): ActionTypes => {
        return { type: REQUEST_PROJECT_DATA };
    }

    const intermediateReceiveInitialData = (result: EntitiesType): (dispatch: any) => void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (dispatch: any): void => {
            let items = List<MenuItemPojo>();
            const projectsKey = 'projects';
            const projectItem = {title: 'Projects', parentKey: '', key: projectsKey, subItems: Set<string>() };
            result.get('Project').forEach((project: Pojo.ProjectPojo|undefined): void => {
                if(!project) {
                    return;
                }
                const childKey = `${projectsKey}-${project.id}`;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const item = {title: project.name!,
		  parentKey: projectsKey, key: childKey,
		  };
		  projectItem.subItems = projectItem.subItems.add(childKey);
		  items = items.push(item);
            });
            items = items.push(projectItem);
	  dispatch(addMenuItems(items));
            /*            result.get('Module').forEach((module: Pojo.ModulePojo|undefined) => {
                if(!module) {
                    return;
                }
                const parentKey= `${projectsKey}-${module.projectId}`;
                const key = `${parentKey}-${module.id}`;
                const item = {title: module.name!, parentKey, key};
                dispatch(addMenuItem(item));
                dispatch(addMenuItem({title:'Classes', parentKey: key, key: `${key}-classes`}));
                dispatch(addMenuItem({title:'Interfaces', parentKey: key, key: `${key}-interfaces`}));
                dispatch(addMenuItem({title:'Imports', parentKey: key, key: `${key}-imports`}));
                dispatch(addMenuItem({title:'Exports', parentKey: key, key: `${key}-exports`}));
            });
            result.get('Class').forEach((class_: Pojo.ClassPojo|undefined) => {
                if(!class_) {
                    return;
                }
                const module_ = result.get('Module').get(class_.moduleId!) as Pojo.ModulePojo;
                if(!module_) {
                    return;
                }

                const parentKey= `${projectsKey}-${module_.projectId}-${module_.id}-classes`;
                const key = `${parentKey}-${class_.id}`;
                const item = {title: class_.name!, parentKey, key};
                dispatch(addMenuItem(item));
                dispatch(addMenuItem({title:'Methods', parentKey: key, key: `${key}-methods`}));
                dispatch(addMenuItem({title:'Properties', parentKey: key, key: `${key}-props`}));
            });
            
            result.get('Interface').forEach((interface_: Pojo.InterfacePojo|undefined) => {
                if(!interface_) {
                    return;
                }
                const module_ = result.get('Module').get(interface_.moduleId!) as Pojo.ModulePojo;
                if(!module_) {
                    return;
                }

                const parentKey= `${projectsKey}-${module_.projectId}-${module_.id}-interfaces`;
                const key = `${parentKey}-${interface_.id}`;
                const item = {title: interface_.name!, parentKey, key};
                dispatch(addMenuItem(item));
                dispatch(addMenuItem({title:'Methods', parentKey: key, key: `${key}-methods`}));
                dispatch(addMenuItem({title:'Properties', parentKey: key, key: `${key}-props`}));
            });
*/            
            
            dispatch(receiveInitialData(result));
        }
    }


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetchInitialData = (): (dispatch: any) => Promise<any> => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (dispatch: any): Promise<any> => {
            dispatch(requestInitialData());
	    return restClient.getAll().then((result: InputObject): Map<string, Map<number, Pojo.BasePojo>> => {
                let container = Map<string, Map<number, Pojo.BasePojo>>();
                Object.keys(result).forEach((key): void => {
                    const ary = result[key];
		    // how can we sanity check the value?
		    if(ary !== undefined && Array.isArray(ary)) {
		    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        let map = Map<number, Pojo.BasePojo>(List<InputObject>(ary).filter((elem): boolean => elem !== undefined).map((elem: InputObject|undefined): [number, Pojo.BasePojo] => [elem!.id, elem!]));
                        container = container.set(key, map);
		    } else{
		    console.log(`invalid value ${ary} for key ${key} in result`)
		    }
		    });
		    return container;
		    }).then((container): void => {
                dispatch(intermediateReceiveInitialData(container));
		    });
        };
    };

    const fetchProjectData = (): (dispatch: any) => void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (dispatch: any): void => {
            dispatch(requestProjectData());
        }
    }

    return {
        requestInitialData,
        intermediateReceiveInitialData,
        fetchInitialData,
        receiveInitialData,
        receiveProjectData,
        fetchProjectData,
    };
};
