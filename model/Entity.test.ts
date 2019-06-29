import Entity from './Entity';

test('construction', () => {
    expect(new Entity()).toBeDefined();
});

test('toJs', () => {
    const e = new Entity();
    e.commonName = 'commonName';
    const j = e.toJS();
    expect(j.commoname).toBe(e.commonName);
})
   