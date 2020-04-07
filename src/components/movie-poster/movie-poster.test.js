import React from 'react';
import {MoviePoster} from './movie-poster.jsx';
import renderer from 'react-test-renderer';

describe(`MoviePoster`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviePoster />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly big poster`, () => {
    const tree = renderer.create(
        <MoviePoster big />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly small poster`, () => {
    const tree = renderer.create(
        <MoviePoster small />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with children`, () => {
    const tree = renderer.create(
        <MoviePoster>
          <div>blah-blah</div>
        </MoviePoster>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
