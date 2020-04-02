export const ApiPaths = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/wtw`,
  FILMS: `/films`,
  PROMO_MOVIE: `/films/promo`,
  LOGIN: `/login`,
  setFavorite({id, status}) {
    return `/favorite/${id}/${status}`;
  },
  getReviews(id) {
    return `/comments/${id}`;
  }
};

export const ApiConfiguration = {
  baseURL: ApiPaths.BASE_URL,
  timeout: 5000,
  withCredentials: true
};

export const ResponseStatus = {
  UNAUTHORIZED: 401
};
