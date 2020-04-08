import React from 'react';
import {shallow} from 'enzyme';
import {MovieButtonsComponent} from './movie-buttons.jsx';
import {RoutePaths} from '../../constants/route-paths';

describe(`MovieButtons`, () => {
  const filmId = 1;
  let changeFavoritesListHandler = null;
  let movieButtons = null;
  const history = {
    push: null
  };

  beforeEach(() => {
    changeFavoritesListHandler = jest.fn();
    history.push = jest.fn();

    movieButtons = shallow(<MovieButtonsComponent
      filmId={filmId}
      isFavorite={false}
      onChangeFavoritesList={changeFavoritesListHandler}
      isAuthorizationRequired={false}
      history={history}
    />);
  });

  afterEach(() => {
    movieButtons = null;
    changeFavoritesListHandler.mockClear();
    history.push.mockClear();
  });

  it(`should handle add favorite list`, () => {
    const button = movieButtons.find(`.btn--list`);
    button.simulate(`click`, {preventDefault() {}});
    expect(changeFavoritesListHandler).toHaveBeenCalledWith({
      id: filmId,
      status: 1
    });
  });

  it(`should handle remote favorite list`, () => {
    movieButtons.setProps({isFavorite: true});
    const button = movieButtons.find(`.btn--list`);
    button.simulate(`click`, {preventDefault() {}});
    expect(changeFavoritesListHandler).toHaveBeenCalledWith({
      id: filmId,
      status: 0
    });
  });

  it(`should handle history push when unauthorised user change favorite list`, () => {
    movieButtons.setProps({isAuthorizationRequired: true});
    const button = movieButtons.find(`.btn--list`);
    button.simulate(`click`, {preventDefault() {}});
    expect(history.push).toHaveBeenCalledWith(RoutePaths.SING_IN);
  });
});
