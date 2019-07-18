import EntityElement from './EntityElement';
import Entity from './Entity';

test('1', () => {
    const ee = new EntityElement();
    ee.entity = new Entity(1);
    expect(ee.toJS()).toMatchSnapshot();
    const ee2 = ee.copy();
    expect(ee2).toEqual(ee);
    expect(ee2.toJS()).toMatchSnapshot();
    });
    
