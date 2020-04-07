export const getLinkChangeFavoriteStatus = ({id, status}) => (
  `/favorite/${id}/${status}`
);

export const getLinkForReview = (id) => (
  `/comments/${id}`
);

export const getFilmPathLink = (id) => (
  `/film/${id}`
);

export const getReviewPathLink = (id) => (
  `/film/${id}/review`
);
