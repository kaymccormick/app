import React from 'react';
import { shallow,mount } from 'enzyme';
import MetisMenu from './MetisMenu';
import { EntitiesState,EntityPojo,EntityColumnPojo } from '../modules/entities/types';

const entitiesState:  EntitiesState = { ui: { entities: [] }, entities: [{name:' test'}] };

test('1', () => {
    const wrapper = mount(<MetisMenu entities={entitiesState}/>);
});


