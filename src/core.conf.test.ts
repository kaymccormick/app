import configJs from '../core.conf';

test('configJs', (): void => {
    expect(configJs).toMatchSnapshot();
});
