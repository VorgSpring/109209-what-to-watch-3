import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {loadFilms} from './films';
import {
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_ERROR,
  LOAD_FILMS_SUCCESS
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';


describe(`films operation`, () => {
  it(`should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = loadFilms();

    apiMock
      .onGet(ApiPaths.FILMS)
      .reply(200, []);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILMS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_FILMS_SUCCESS,
          payload: [],
        });
      });
  });

  it(`should make a correct errors API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = loadFilms();
    const errorMessage = `error`;

    apiMock
      .onGet(ApiPaths.FILMS)
      .reply(() => Promise.reject({
        response: {
          data: {
            status: 404,
            error: errorMessage
          }
        }
      }));

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILMS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_FILMS_ERROR,
          payload: {
            error: errorMessage
          }
        });
      });
  });
});
