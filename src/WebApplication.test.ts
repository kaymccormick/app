import { WebApplication } from './WebApplication';

test('WebApplication.constructor', () => {
const a = new WebApplication();
expect(a).toBeDefined();
});

test('WebApplication.modules', () => {
const a = new WebApplication();
expect(a).toBeDefined();
const modules = a.modules;
expect(module).toBeDefined();
expect(Array.isArray(modules)).toBeTruthy();
});
