export const getReviewsByFilmIdSelector = (state, props) =>
  state.reviews.reviews && state.reviews.reviews[props.film.id] || null;
