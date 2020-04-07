import React from 'react';
import {MovieReviews} from './movie-reviews.jsx';
import renderer from 'react-test-renderer';
import {reviews} from '../../mocks/reviews';

jest.mock(`../movie-review/movie-review.jsx`, () => ({
  MovieReview() {
    return <movie-review />;
  }
}));

describe(`MovieReviews`, () => {
  const onLoadReviews = () => {};

  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieReviews
          filmId={1}
          reviews={reviews}
          onLoadReviews={onLoadReviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without reviews`, () => {
    const tree = renderer.create(
        <MovieReviews
          filmId={1}
          onLoadReviews={onLoadReviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
