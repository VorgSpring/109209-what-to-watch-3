import React from 'react';
import {Footer} from './footer.jsx';
import renderer from 'react-test-renderer';

describe(`Footer`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <Footer />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
