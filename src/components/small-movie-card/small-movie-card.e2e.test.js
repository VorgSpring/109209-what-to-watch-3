import React from 'react';
import {shallow} from 'enzyme';
import {SmallMovieCard} from './small-movie-card.jsx';
import {films} from '../../mocks/films';

describe(`SmallMovieCard`, () => {
  // TODO подправить тест на проверку state
  it(`should correctly hover`, () => {
    const hoverHandler = jest.fn();
    const film = films[0];

    const smallMovieCard = shallow(<SmallMovieCard
      film={film}
      onHoverCard={hoverHandler}
    />);

    const container = smallMovieCard.find(`.small-movie-card`);
    container.simulate(`mouseenter`, {preventDefault() {}});
    expect(hoverHandler).toHaveBeenCalledWith(film.name);
  });
});
