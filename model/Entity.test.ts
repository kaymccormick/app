import Entity from './Entity';

test('construction', () => {
    const e = new Entity();
    expect(e).toBeDefined();
    expect(e.attributes).toBeDefined();
    
});

test('toJs', () => {
    const e = new Entity();
    e.commonName = 'commonName';
    const j = e.toJS();
    expect(j.commoname).toBe(e.commonName);
})

test('copy', () => {
    const e= new Entity();
    expect(e.copy()).toBeDefined();
})
