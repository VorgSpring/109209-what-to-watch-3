import React from 'react';
import {AddReviewPageComponent} from './add-review-page.jsx';
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
  ReviewForm() {
    return <review-form />;
  }
}));

describe(`AddReviewPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <AddReviewPageComponent
          film={films[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
