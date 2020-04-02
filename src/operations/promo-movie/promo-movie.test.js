import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {loadPromoMovie} from './promo-movie';
import {
  LOAD_PROMO_MOVIE_REQUEST,
  LOAD_PROMO_MOVIE_ERROR,
  LOAD_PROMO_MOVIE_SUCCESS
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';
import {filmByServer} from '../../mocks/films';


describe(`promo-movie operation`, () => {
  it(`should make a correct API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = loadPromoMovie();

    apiMock
      .onGet(ApiPaths.PROMO_MOVIE)
      .reply(200, filmByServer);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_PROMO_MOVIE_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_PROMO_MOVIE_SUCCESS,
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
          },
        });
      });
  });

  it(`should make a correct errors API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = loadPromoMovie();
    const errorMessage = `error`;

    apiMock
      .onGet(ApiPaths.PROMO_MOVIE)
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
          type: LOAD_PROMO_MOVIE_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_PROMO_MOVIE_ERROR,
          payload: {
            error: errorMessage
          }
        });
      });
  });
});
