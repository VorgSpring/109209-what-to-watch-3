import PropTypes from 'prop-types';

export const filmPropTypes = {
  id: PropTypes.number,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number,
  previewImage: PropTypes.string,
  preview: PropTypes.oneOfType([
    PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          type: PropTypes.string,
        })
    ),
    PropTypes.string
  ]),
  isFavorite: PropTypes.bool,
  rating: PropTypes.number,
  director: PropTypes.string,
  scoresCount: PropTypes.number,
  description: PropTypes.string,
  starring: PropTypes.arrayOf(
      PropTypes.string
  ),
  runTime: PropTypes.number
};

export const userPropTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string
};

export const reviewPropTypes = {
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string
};
