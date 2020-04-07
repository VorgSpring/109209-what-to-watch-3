import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Breadcrumbs} from './breadcrumbs.jsx';
import renderer from 'react-test-renderer';

describe(`Breadcrumbs`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Breadcrumbs
            id={13}
            name='blah'
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
