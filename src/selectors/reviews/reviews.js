import {
  getFilmIdSelector
} from '../films/films';
import {createSelector} from 'reselect';

export const getReviewsLoadedStatusSelector = (state) =>
  state.reviews && state.reviews.isLoaded || false;

export const getReviewsSelector = (state) =>
  state.reviews && state.reviews.reviews || null;

export const getReviewsByFilmIdSelector = createSelector(
    getReviewsSelector,
    getFilmIdSelector,
    (reviews, filmId) => {
      if (!reviews || !reviews[filmId]) {
        return {
          odd: [],
          even: []
        };
      }

      return reviews[filmId].reduce((acc, review, i) => {
        if (i % 2) {
          acc.odd.push(review);
        } else {
          acc.even.push(review);
        }
        return acc;
      }, {
        odd: [],
        even: []
      });
    }
);
