import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../user-block/user-block.jsx`, () => ({
  UserBlockContainer() {
    return <user-block />;
  }
}));

describe(`Header`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly movie type`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header movieType />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly user type`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header userType />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with show user block`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header showUserBlok />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with title`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header title='blah-blah' />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with children`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header>
            <div>blah-blah</div>
          </Header>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
