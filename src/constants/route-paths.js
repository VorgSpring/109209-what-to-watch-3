export const RoutePaths = {
  MAIN: `/`,
  SING_IN: `/login`,
  FILM: `/film/:id`
};

export const LinkPaths = {
  getFilmLink(id) {
    return `/film/${id}`;
  }
};
