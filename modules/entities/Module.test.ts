import { Module } from './Module';
import { WebApplication } from '../../src/WebApplication';
import { Configuration } from '../../src/Configuration';
import{ AppLogger} from '../../src/AppLogger';
jest.mock('../../src/WebApplication');
jest.mock('../../src/Configuration');

let appLogger: AppLogger;
beforeEach(() => {
   appLogger = new AppLogger();
// @ts-ignore
    WebApplication.mockClear();
    // @ts-ignore
    Configuration.mockClear();
});

test('Module.constructor', () => {
    const m = new Module({logger: appLogger});
    expect(m).toBeDefined();
    expect(m.id).toBeDefined();
    expect(m.actions).toBeDefined();
    expect(m.restClient).toBeDefined();
});

test('Module.getInitialState', () => {
    const m = new Module({logger: appLogger});
    const state = m.getInitialState();
    expect(state).toBeDefined();
    expect(state.entities).toStrictEqual([]);
});
test('Module.getReducers', () => {
    const m = new Module({logger: appLogger});
    const reducers = m.getReducers();
    expect(reducers).toBeDefined();
    expect(Object.keys(reducers)).toMatchSnapshot();
});
test('Module.setup', () => {
    const app = new WebApplication({config: { modules: []}});
    const config = new Configuration();
    const m = new Module({logger: appLogger});
    m.setup(app, config);
});

/*test('Module.getMainComponent',() => {
const m = new Module({logger: appLogger});
const component = m.getMainComponent();
expect(component).toBeDefined();
});*/

