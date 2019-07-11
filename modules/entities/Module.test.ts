import { Module } from './Module';
import { WebApplication } from '../../src/WebApplication';
import { Configuration } from '../../src/Configuration';
jest.mock('../../src/WebApplication');
jest.mock('../../src/Configuration');

beforeEach(() => {
// @ts-ignore
WebApplication.mockClear();
// @ts-ignore
Configuration.mockClear();
});

test('Module.constructor', () => {
const m = new Module();
expect(m).toBeDefined();
expect(m.id).toBeDefined();
expect(m.actions).toBeDefined();
expect(m.restClient).toBeDefined();
});

test('Module.getInitialState', () => {
const m = new Module();
const state = m.getInitialState();
expect(state).toBeDefined();
expect(state.entities).toStrictEqual([]);
});
test('Module.getReducers', () => {
const m = new Module();
const reducers = m.getReducers();
expect(reducers).toBeDefined();
expect(Object.keys(reducers)).toMatchSnapshot();
});
test('Module.setup', () => {
const app = new WebApplication();
const config = new Configuration();
const m = new Module();
m.setup(app, config);
});

/*test('Module.getMainComponent',() => {
const m = new Module();
const component = m.getMainComponent();
expect(component).toBeDefined();
});*/

