const configJs = require('../core.conf');

test('configJs', () => {
expect(configJs).toMatchSnapshot();
});
