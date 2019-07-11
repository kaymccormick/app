import React from 'react';
import { shallow,mount } from 'enzyme';
import MetisMenu from './MainTree';
import { EntitiesState,EntityPojo,EntityColumnPojo } from '../modules/entities/types';

const entitiesState:  EntitiesState = { entities: [{name:' test'}] };

test('1', () => {
const wrapper = mount(<MetisMenu entities={entitiesState}/>);
});


