import React from 'react';
import {shallow} from 'enzyme';
import {MoviesList} from './movies-list.jsx';

describe(`MoviesList`, () => {
  let movieList = null;
  const mockFilm = new Array(9);

  beforeEach(() => {
    movieList = shallow(
        <MoviesList
          films={mockFilm}
          showCount={8}
          onLoadFilms={() => {}}
          onActiveItem={() => {}}
          onSetMoreItemsToShow={() => {}}
        />
    );
  });

  afterEach(() => {
    movieList = null;
  });

  it(`should show button for load more films, when show count more films count`, () => {
    movieList.setProps({films: []});

    const container = movieList.find(`.catalog__more`);
    expect(container).toHaveLength(0);
  });

  it(`should show button for load more films, when show count less films count`, () => {
    const container = movieList.find(`.catalog__more`);
    expect(container).toHaveLength(1);
  });

  it(`should correctly click`, () => {
    const onSetMoreItemsToShow = jest.fn();
    movieList.setProps({onSetMoreItemsToShow});

    const button = movieList.find(`.catalog__button`);
    button.simulate(`click`, {preventDefault() {}});
    expect(onSetMoreItemsToShow).toHaveBeenCalled();
  });
});
