import React from 'react';
import {AddReviewPage} from './add-review-page.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../movie-wrapper/movie-wrapper.jsx`, () => ({
  MovieWrapper() {
    return <movie-wrapper />;
  }
}));

jest.mock(`../movie-poster/movie-poster.jsx`, () => ({
  MoviePoster() {
    return <movie-poster />;
  }
}));

jest.mock(`../review-form/review-form.jsx`, () => ({
  ReviewFormContainer() {
    return <review-form />;
  }
}));

describe(`AddReviewPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <AddReviewPage
          film={films[0]}
          onLoadFilms={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without film`, () => {
    const tree = renderer.create(
        <AddReviewPage
          onLoadFilms={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
