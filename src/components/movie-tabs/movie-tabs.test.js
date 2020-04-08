import React from 'react';
import {MovieTabsComponent} from './movie-tabs.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../../constants/movie-tab`, () => ({
  MovieTabComponents: {
    Overview() {
      return <movie-overview />;
    },
    Details() {
      return <movie-details />;
    },
    Reviews() {
      return <movie-reviews />;
    }
  },
  MovieTabItems: {
    OVERVIEW: `Overview`,
    DETAILS: `Details`,
    REVIEWS: `Reviews`
  }
}));

describe(`MovieTabs`, () => {
  it(`should renders correctly overview`, () => {
    const tree = renderer.create(
        <MovieTabsComponent
          activeItem={`Overview`}
          onActiveItem={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly details`, () => {
    const tree = renderer.create(
        <MovieTabsComponent
          activeItem={`Details`}
          onActiveItem={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly reviews`, () => {
    const tree = renderer.create(
        <MovieTabsComponent
          activeItem={`Reviews`}
          onActiveItem={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
