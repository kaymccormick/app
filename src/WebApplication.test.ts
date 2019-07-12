import { WebApplication } from './WebApplication';

test('WebApplication.constructor', (): void => {
    const a = new WebApplication({config:{modules:[]}});
    expect(a).toBeDefined();
});

test('WebApplication.modules', (): void => {
    const a = new WebApplication({config:{modules:[]}});
    expect(a).toBeDefined();
    const modules = a.modules;
    expect(module).toBeDefined();
    expect(Array.isArray(modules)).toBeTruthy();
});
