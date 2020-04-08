import React from 'react';
import {MovieReviewsComponent} from './movie-reviews.jsx';
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
        <MovieReviewsComponent
          filmId={1}
          reviews={reviews}
          onLoadReviews={onLoadReviews}
          isLoaded
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
