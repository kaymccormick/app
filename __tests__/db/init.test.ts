import { createConnection } from '../../src/Factory';

test('createConnection', () => {
    return createConnection().then(connection => {
        expect(connection).toBeDefined();
    });
});
