import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {
  sendChangeFavoriteList,
  loadFavoriteList
} from './favorites';
import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR,
  LOAD_FAVORITE_FILMS_REQUEST,
  LOAD_FAVORITE_FILMS_SUCCESS,
  LOAD_FAVORITE_FILMS_ERROR
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';
import {getLinkChangeFavoriteStatus} from '../../helpers/get-links/get-links';
import {
  filmByServer,
  preparedFilmByServer
} from '../../mocks/films';


describe(`favorites operation`, () => {
  const data = {
    id: 1,
    status: 0
  };

  let dispatch = null;
  let api = null;
  let apiMock = null;
  let sendChangeFavoriteListLoader = null;
  let loadFavoriteListLoader = null;

  beforeEach(() => {
    dispatch = jest.fn();
    api = createAPI(dispatch);
    apiMock = new MockAdapter(api);
    sendChangeFavoriteListLoader = sendChangeFavoriteList(data);
    loadFavoriteListLoader = loadFavoriteList();
  });

  afterEach(() => {
    dispatch.mockClear();
    api = null;
    apiMock = null;
    sendChangeFavoriteListLoader = null;
    loadFavoriteListLoader = null;
  });

  it(`should change favorite list`, function () {
    apiMock
      .onPost(getLinkChangeFavoriteStatus(data))
      .reply(200, filmByServer);

    return sendChangeFavoriteListLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CHANGE_FAVORITES_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: CHANGE_FAVORITES_SUCCESS,
          payload: preparedFilmByServer
        });
      });
  });

  it(`should handle errors change favorite list`, function () {
    const errorMessage = `error`;

    apiMock
      .onPost(getLinkChangeFavoriteStatus(data))
      .reply(() => Promise.reject({
        response: {
          data: {
            status: 404,
            error: errorMessage
          }
        }
      }));

    return sendChangeFavoriteListLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CHANGE_FAVORITES_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: CHANGE_FAVORITES_ERROR,
          payload: errorMessage
        });
      });
  });

  it(`should load favorite list`, function () {
    apiMock
      .onGet(ApiPaths.FAVORITE)
      .reply(200, [filmByServer]);

    return loadFavoriteListLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FAVORITE_FILMS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_FAVORITE_FILMS_SUCCESS,
          payload: [preparedFilmByServer]
        });
      });
  });

  it(`should handle errors load favorite list`, function () {
    const errorMessage = `error`;

    apiMock
      .onGet(ApiPaths.FAVORITE)
      .reply(() => Promise.reject({
        response: {
          data: {
            status: 404,
            error: errorMessage
          }
        }
      }));

    return loadFavoriteListLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FAVORITE_FILMS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_FAVORITE_FILMS_ERROR,
          payload: errorMessage
        });
      });
  });
});
