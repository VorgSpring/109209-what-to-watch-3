/* eslint-disable camelcase */
export const preparedFilmsData = (films) => (
  films.map((film) => (preparedFilmData(film)))
);

export const preparedFilmData = ({
  id,
  name,
  genre,
  preview_image,
  preview_video_link,
  poster_image,
  background_image,
  background_color,
  director,
  description,
  rating,
  released,
  scores_count,
  starring,
  is_favorite,
  run_time
}) => ({
  id,
  name,
  genre,
  previewImage: preview_image,
  preview: preview_video_link,
  poster: poster_image,
  bgImage: background_image,
  bgColor: background_color,
  director,
  description,
  rating,
  released,
  scoresCount: scores_count,
  starring,
  isFavorite: is_favorite,
  runTime: run_time
});
