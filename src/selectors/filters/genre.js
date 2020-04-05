export const getFilterGenreSelector = (state) => state.filters.genre;
export const getFilterGenreByPropsSelector = (_, props) => props && props.genre || null;
