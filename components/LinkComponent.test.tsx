import React from 'react';
import LinkComponent from './LinkComponent';
import { mount, shallow } from 'enzyme';

test('LinkComponent.render', (): void => {
    const wrapper = shallow(<LinkComponent/>);
});
  