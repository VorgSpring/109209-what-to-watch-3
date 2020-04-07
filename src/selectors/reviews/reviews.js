export const getReviewsByFilmIdSelector = (state, props) => {
  const reviews = state.reviews.reviews &&
    state.reviews.reviews[props.film.id];

  if (!reviews) {
    return null;
  }

  return reviews.reduce((acc, review, i) => {
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
};
