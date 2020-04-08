import React from 'react';
import {GenreItem} from './genre-item.jsx';
import {ALL_GENRES_TYPE} from '../../constants/films';
import renderer from 'react-test-renderer';

describe(`GenreItem`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <GenreItem
          onClick={() => {}}
          genre={ALL_GENRES_TYPE}
          isActiveGenre={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
