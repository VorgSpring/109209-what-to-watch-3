import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SingInPage} from './sign-in-page.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../../components/header/header.jsx`, () => ({
  Header() {
    return <main-header />;
  }
}));

jest.mock(`../../components/sign-in-form/sign-in-form.jsx`, () => ({
  SingInFormContainer() {
    return <sing-in-form />;
  }
}));


jest.mock(`../../components/footer/footer.jsx`, () => ({
  Footer() {
    return <main-footer />;
  }
}));

describe(`SingInPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <SingInPage
            isAuthorizationRequired
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly authorization user`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <SingInPage
            isAuthorizationRequired={false}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
