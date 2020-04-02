/* eslint-disable camelcase */
import {preparedFilmsData} from './prepared-films-data';
import {filmByServer} from '../../mocks/films';

describe(`preparedFilmsData`, () => {
  it(`should correct prepared films data`, () => {
    const films = [filmByServer, filmByServer];

    const correctPreparedFilm = {
      id: 1,
      name: `The Grand Budapest Hotel`,
      genre: `Comedy`,
      previewImage: `img/the-grand-budapest-hotel.jpg`,
      preview: `https://some-link`,
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
      bgImage: `img/the-grand-budapest-hotel-bg.jpg`,
      bgColor: `#ffffff`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      rating: 8.9,
      scoresCount: 240,
      released: 2014,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      isFavorite: false,
      runTime: 99
    };

    const preparedFilms = preparedFilmsData(films);

    preparedFilms.forEach((film) => {
      expect(film).toEqual(correctPreparedFilm);
    });
  });
});
