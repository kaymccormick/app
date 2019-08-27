import sinon from 'sinon';
import actionsFn from './actions';
import {REQUEST_ENTITIES} from './types';

const restClient: RestClient = sinon.createStubInstance(RestClient, { getAll: sinon.stub().returns(Promise.resolve({})) });
const actions = actionsFn(restClient);
const { fetchEntities } = actions;

afterEach(() => {
sinon.restore();
});

test('fetchEntities', () => {
    const dispatch = jest.fn();
    //@ts-ignore
    return fetchEntities(new RestClient({baseUri:''}))(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.mock.calls[0][0]).toStrictEqual({type: REQUEST_ENTITIES});
    });
});
