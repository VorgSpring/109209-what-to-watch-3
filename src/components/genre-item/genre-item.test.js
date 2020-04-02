import React from 'react';
import {GenreItem} from './genre-item.jsx';
import {GenreTypes} from '../../constants/genre-type';
import renderer from 'react-test-renderer';

describe(`GenreItem`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <GenreItem
          onClick={() => {}}
          genre={GenreTypes.ALL}
          isActiveGenre={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
