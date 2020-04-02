import React from 'react';
import {MovieButtons} from './movie-buttons.jsx';
import renderer from 'react-test-renderer';

describe(`MoviePoster`, () => {
  it(`should renders correctly`, () => {
    const history = {
      push: () => {}
    };

    const tree = renderer.create(
        <MovieButtons
          filmId={1}
          isFavorite={false}
          isAuthorizationRequired={false}
          history={history}
          onChangeFavoritesList={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
