export const ApiPaths = {
  BASE_URL: `https://htmlacademy-react-3.appspot.com/wtw`,
  FILMS: `/films`,
  PROMO_MOVIE: `/films/promo`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`
};

export const ApiConfiguration = {
  baseURL: ApiPaths.BASE_URL,
  timeout: 5000,
  withCredentials: true
};

export const ResponseStatus = {
  UNAUTHORIZED: 401
};
