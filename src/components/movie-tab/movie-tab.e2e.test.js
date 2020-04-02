import React from 'react';
import {shallow} from 'enzyme';
import {MovieTab} from './movie-tab.jsx';
import {MovieTabItems} from '../../constants/movie-tab';

describe(`MovieTab`, () => {
  let onActiveItemHandler = null;
  let movieTab = null;

  beforeEach(() => {
    onActiveItemHandler = jest.fn();

    movieTab = shallow(
        <MovieTab
          isActive={false}
          name={MovieTabItems.DETAILS}
          onActive={onActiveItemHandler}
        />
    );
  });

  afterEach(() => {
    onActiveItemHandler.mockClear();
    movieTab = null;
  });

  it(`should set active`, () => {
    const container = movieTab.find(`.movie-nav__item`);
    container.simulate(`click`, {preventDefault() {}});
    expect(onActiveItemHandler).toHaveBeenCalledWith(MovieTabItems.DETAILS);
  });

  it(`should don't set active when this is active tab`, () => {
    movieTab.setProps({isActive: true});

    const container = movieTab.find(`.movie-nav__item`);
    container.simulate(`click`, {preventDefault() {}});
    expect(onActiveItemHandler).not.toHaveBeenCalled();
  });
});
