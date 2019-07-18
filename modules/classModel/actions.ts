import {List,Map,Set} from 'immutable';
import { Pojo } from 'classModel';
import RestClient from '@heptet/rest-client';
import { EntitiesType } from './types';
import { addMenuItems } from '../../modules/menus/actions';
import { MenuItemPojo } from '../../modules/menus/types';


import {
    InputObject,
    RECEIVE_INITIAL_DATA,
    REQUEST_INITIAL_DATA,
    LOAD_INITIAL_DATA,
    RECEIVE_PROJECTS, REQUEST_PROJECTS, LOAD_PROJECTS } from './types';

export default (restClient: RestClient) => {
    const requestProjects = () => {
        return { type: REQUEST_PROJECTS };
    }

    const receiveInitialData = (result: EntitiesType) =>{
        return { type: RECEIVE_INITIAL_DATA, result};
    }

    const requestInitialData = () => {
        return { type: REQUEST_INITIAL_DATA };
    }

    const intermediateReceiveInitialData = (result: EntitiesType) => {
        return (dispatch: any) => {
            let items = List<MenuItemPojo>();
            const projectsKey = 'projects';
            const projectItem = {title: 'Projects', parentKey: '', key: projectsKey, subItems: Set<string>() };
            result.get('Project').forEach((project: Pojo.ProjectPojo|undefined) => {
                if(!project) {
                    return;
                }
                const childKey = `${projectsKey}-${project.id}`;
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


    const fetchInitialData = () => {
        return (dispatch: any) => {
            dispatch(requestInitialData());
            return restClient.getAll().then((result: InputObject) => {
                let container = Map<string, Map<number, Pojo.BasePojo>>();
                Object.keys(result).forEach(key => {
                    const ary = result[key];
                    let map = Map<number, Pojo.BasePojo>(List<InputObject>(ary).filter((elem): boolean => elem !== undefined).map((elem: InputObject|undefined) => [elem!.id, elem!]));
                    container = container.set(key, map);
                });
                return new Promise((resolve, reject) => {
                    dispatch(intermediateReceiveInitialData(container));
                    resolve();
                });
            });
        };
    };

    const fetchProjects = () => {
        return (dispatch: any) => {
            dispatch(requestProjects());
        }
    }
    const loadProjects = () => {
        console.log('load');
        return {type: LOAD_PROJECTS};
    }


    const receiveProjects = (projects: List<Pojo.ProjectPojo>) => {
        return {type:RECEIVE_PROJECTS,projects};
    }

    return {
        requestInitialData,
        intermediateReceiveInitialData,
        fetchInitialData,
        receiveInitialData,
    };
};
