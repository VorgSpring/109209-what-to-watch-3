import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {sendChangeFavoriteList} from './favorites';
import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR,
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';
import {filmByServer} from '../../mocks/films';


describe(`favorites operation`, () => {
  const data = {
    id: 1,
    status: 0
  };

  let dispatch = null;
  let api = null;
  let apiMock = null;
  let sendChangeFavoriteListLoader = null;

  beforeEach(() => {
    dispatch = jest.fn();
    api = createAPI(dispatch);
    apiMock = new MockAdapter(api);
    sendChangeFavoriteListLoader = sendChangeFavoriteList(data);
  });

  afterEach(() => {
    dispatch.mockClear();
    api = null;
    apiMock = null;
    sendChangeFavoriteListLoader = null;
  });

  it(`should change favorite list`, function () {
    apiMock
      .onPost(ApiPaths.setFavorite(data))
      .reply(200, filmByServer);

    return sendChangeFavoriteListLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CHANGE_FAVORITES_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: CHANGE_FAVORITES_SUCCESS,
          payload: {
            id: 1,
            name: `The Grand Budapest Hotel`,
            genre: `Comedy`,
            previewImage: `img/the-grand-budapest-hotel.jpg`,
            preview: `https://some-link`,
            poster: `img/the-grand-budapest-hotel-poster.jpg`,
            bgImage: `img/the-grand-budapest-hotel-bg.jpg`,
            bgColor: `#ffffff`,
            description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
            director: `Wes Andreson`,
            released: 2014,
            isFavorite: false,
            rating: 8.9,
            scoresCount: 240,
            starring: [
              `Bill Murray`,
              `Edward Norton`,
              `Jude Law`,
              `Willem Dafoe`,
              `Saoirse Ronan`,
            ],
            runTime: 99
          }
        });
      });
  });

  it(`should handle errors change favorite list`, function () {
    const errorMessage = `error`;

    apiMock
      .onPost(ApiPaths.setFavorite(data))
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
});
