import { WebApplication } from '../src/WebAppliation';

let configJs;
let app;

    configJs = require('../core.conf').default;
    app = new WebApplication({ config: configJs, restClient });
    console.log(app);
    app.init();

beforeEach(() => {
    configJs = require('../core.conf').default;
    app = new WebApplication({ config: configJs, restClient });
    console.log(app);
    app.init();
});

test.each(app.modules)('%s', (mod) => {
    expect(mod).toBeDefined();
});
