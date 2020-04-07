import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {
  sendAuthorizationData,
  getAuthorizationData
} from './authorization';
import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  AUTHENTICATED_USER
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';
import {user, userByServer} from '../../mocks/user';


describe(`authorization operation`, () => {
  const authorizationData = {
    email: `blah`,
    password: `blah`
  };

  it(`should make a correct authorization`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizationLoader = sendAuthorizationData(authorizationData);

    apiMock
      .onPost(ApiPaths.LOGIN, authorizationData)
      .reply(200, userByServer);

    return authorizationLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AUTHORIZATION_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AUTHORIZATION_SUCCESS
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: AUTHENTICATED_USER,
          payload: user
        });
      });
  });

  it(`should make a correct errors authorization`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizationLoader = sendAuthorizationData(authorizationData);
    const errorMessage = `error`;

    apiMock
      .onPost(ApiPaths.LOGIN, authorizationData)
      .reply(() => Promise.reject({
        response: {
          data: {
            error: errorMessage
          }
        }
      }));

    return authorizationLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AUTHORIZATION_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AUTHORIZATION_ERROR,
          payload: {
            error: errorMessage
          }
        });
      });
  });

  it(`should get authorization user`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizationLoader = getAuthorizationData();

    apiMock
      .onGet(ApiPaths.LOGIN)
      .reply(200, userByServer);

    return authorizationLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AUTHORIZATION_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AUTHORIZATION_SUCCESS
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: AUTHENTICATED_USER,
          payload: user
        });
      });
  });

  it(`should get error authorization user`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizationLoader = getAuthorizationData();
    const errorMessage = `error`;

    apiMock
      .onGet(ApiPaths.LOGIN)
      .reply(() => Promise.reject({
        response: {
          data: {
            error: errorMessage
          }
        }
      }));

    return authorizationLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AUTHORIZATION_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AUTHORIZATION_ERROR,
          payload: {
            error: errorMessage
          }
        });
      });
  });
});
