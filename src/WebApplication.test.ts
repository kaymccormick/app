import { WebApplication } from './WebApplication';
import RestClient from '@heptet/rest-client';

const restClient = new RestClient({baseUri:'', logDebug: (arg) => console.log});

test('WebApplication.constructor', (): void => {
    const a = new WebApplication({restClient, config:{modules:[]}});
    expect(a).toBeDefined();
});

test('WebApplication.modules', (): void => {
    const a = new WebApplication({restClient, config:{modules:[]}});
    expect(a).toBeDefined();
    const modules = a.modules;
    expect(module).toBeDefined();
    expect(Array.isArray(modules)).toBeTruthy();
});
