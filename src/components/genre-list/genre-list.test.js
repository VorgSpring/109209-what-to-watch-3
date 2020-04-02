import React from 'react';
import {GenreList} from './genre-list.jsx';
import renderer from 'react-test-renderer';

describe(`GenreList`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <GenreList
          onChangeGenre={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
