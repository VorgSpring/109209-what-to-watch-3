import React from 'react';
import {MovieTab} from './movie-tab.jsx';
import renderer from 'react-test-renderer';
import {MovieTabItems} from '../../constants/movie-tab';

describe(`MovieTab`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieTab
          isActive={true}
          name={MovieTabItems.DETAILS}
          onActive={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
