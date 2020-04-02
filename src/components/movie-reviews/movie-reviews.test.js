import React from 'react';
import {MovieReviews} from './movie-reviews.jsx';
import renderer from 'react-test-renderer';
import {review} from '../../mocks/review';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';

describe(`MovieReviews`, () => {
  it(`should renders correctly`, () => {
    const reviews = [review];
    const onLoadReviews = () => {};
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <MovieReviews
            filmId={1}
            reviews={reviews}
            onLoadReviews={onLoadReviews}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
