import { Configuration } from './Configuration';

test('1', (): void => {
    const c = new Configuration();
    expect(c).toBeDefined();
});

test('2', (): void => {
    const c = new Configuration();
    expect(c).toBeDefined();
    const r1 = {};
    c.addResource('test', r1);
    expect(c.getResource('test')).toBe(r1);
});