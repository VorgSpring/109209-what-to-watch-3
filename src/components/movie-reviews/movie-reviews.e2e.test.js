import React from 'react';
import {shallow} from 'enzyme';
import {MovieReviewsComponent} from './movie-reviews.jsx';
import {reviews} from '../../mocks/reviews';

describe(`MovieReviews`, () => {
  it(`should load reviews after render`, () => {
    const loadReviewsHandler = jest.fn();

    shallow(<MovieReviewsComponent
      filmId={1}
      isLoaded={false}
      reviews={reviews}
      onLoadReviews={loadReviewsHandler}
    />);

    expect(loadReviewsHandler).toHaveBeenCalledWith(1);
  });
});
