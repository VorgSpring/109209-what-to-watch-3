import React from 'react';
import {MovieWrapper} from './movie-wrapper.jsx';
import renderer from 'react-test-renderer';


jest.mock(`../header/header.jsx`, () => ({
  Header() {
    return <main-header />;
  }
}));

describe(`MovieWrapper`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieWrapper />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with render props`, () => {
    const tree = renderer.create(
        <MovieWrapper
          renderNav={
            ()=><div>blah-blah</div>
          }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with children`, () => {
    const tree = renderer.create(
        <MovieWrapper>
          <div>blah-blah</div>
        </MovieWrapper>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
