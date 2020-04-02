import React from 'react';
import {shallow} from 'enzyme';
import {MovieReviews} from './movie-reviews.jsx';

describe(`MovieReviews`, () => {
  it(`should load reviews after render`, () => {
    const loadReviewsHandler = jest.fn();

    shallow(<MovieReviews
      filmId={1}
      reviews={null}
      onLoadReviews={loadReviewsHandler}
    />);

    expect(loadReviewsHandler).toHaveBeenCalledWith(1);
  });
});
