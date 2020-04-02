import React from 'react';
import {MovieReview} from './movie-review.jsx';
import renderer from 'react-test-renderer';
import {review} from '../../mocks/review';

describe(`MoviePoster`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieReview {...review} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
