import {List} from 'immutable';
import {Pojo} from 'classModel';
import React from 'react';
import {ClassModelView} from './ClassModelView';
import { shallow } from 'enzyme';
import {ApplicationState, ClassModelState} from "../../model/types";
import Project from './Project';

test('1', () => {
    const loadProjects = () => {};
    const project: Pojo.ProjectPojo = {
        id: 1,
        name: 'foo',
    };

    const classModel: ClassModelState = { projects: List<Pojo.ProjectPojo>([project]) };
    const wrapper = shallow(<ClassModelView loadProjects={loadProjects}
        classModel={classModel}/>);
    const x = wrapper.find(Project);
});

