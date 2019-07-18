import {List} from 'immutable';
import {Pojo} from 'classModel';
import React from 'react';
import {ClassModelContainer} from './ClassModelContainer';
import { shallow } from 'enzyme';
import {ApplicationState, ClassModelState} from "../../../model/types";

test.skip('1', () => {
    const loadProjects = () => {};
    const project: Pojo.ProjectPojo = {
        id: 1,
        name: 'foo',
    };

    const classModel: ClassModelState = { projects: List<Pojo.ProjectPojo>([project]) };
    const wrapper = shallow(<ClassModelContainer/>);

});

