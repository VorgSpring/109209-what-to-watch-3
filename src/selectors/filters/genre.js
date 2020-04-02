export const getFilterGenreSelector = (state) => state.filters.genre;
export const getFilterGenreByPropsSelector = (_, props = {}) => props.genre || null;
