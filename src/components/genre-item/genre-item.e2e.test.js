import React from 'react';
import {shallow} from 'enzyme';
import {GenreItem} from './genre-item.jsx';

describe(`GenreItem`, () => {
  let genreItem = null;
  let clickHandler = null;

  beforeEach(() => {
    clickHandler = jest.fn();

    genreItem = shallow(<GenreItem
      onClick={clickHandler}
      genre={`blah`}
      isActiveGenre={false}
    />);
  });

  afterEach(() => {
    genreItem = null;
    clickHandler.mockClear();
  });

  it(`should correctly click`, () => {
    const item = genreItem.find(`.catalog__genres-item`);
    item.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalled();
  });

  it(`should correctly change active genre`, () => {
    genreItem.setProps({
      isActiveGenre: true
    });

    const activeGenreElement = genreItem.find(`.catalog__genres-item--active`);
    expect(activeGenreElement).toHaveLength(1);
  });
});
