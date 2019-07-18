import {List} from 'immutable';
import {Pojo} from 'classModel';
import React from 'react';
import ClassModelView from './ClassModelView';
import { shallow } from 'enzyme';
import {ApplicationState} from "../../../model/types";

test('1', () => {
    const wrapper = shallow(<ClassModelView/>);
    expect(wrapper.html()).toMatchSnapshot();
});
