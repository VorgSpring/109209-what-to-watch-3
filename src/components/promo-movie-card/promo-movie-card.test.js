import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {PromoMovieCard} from './promo-movie-card.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';

describe(`PromoMovieCard`, () => {
  it(`should renders correctly`, () => {
    const film = films[0];
    const playHandler = () => {};
    const changeFavoritesListHandler = () => {};
    const loadFilmHandler = () => {};
    const mockStore = configureStore([]);
    const store = mockStore(state);
    const history = {
      push: () => {}
    };

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <PromoMovieCard
              film={film}
              onPlay={playHandler}
              onChangeFavoritesList={changeFavoritesListHandler}
              onLoadFilm={loadFilmHandler}
              isFavorite={false}
              isAuthorizationRequired={false}
              history={history}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
