import React from 'react';
import {GenreListComponent} from './genre-list.jsx';
import renderer from 'react-test-renderer';

describe(`GenreList`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <GenreListComponent
          genreTypes={[`blah`, `blah-blah`]}
          onChangeGenre={() => {}}
          activeGenre={`blah`}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
