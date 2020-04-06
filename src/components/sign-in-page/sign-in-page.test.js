import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SingInPage} from './sign-in-page.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../../components/header/header.jsx`, () => ({
  Header() {
    return <header />;
  }
}));

jest.mock(`../../components/sign-in-form/sign-in-form.jsx`, () => ({
  SingInFormContainer() {
    return <sing-in-form />;
  }
}));


jest.mock(`../../components/footer/footer.jsx`, () => ({
  Footer() {
    return <footer />;
  }
}));

describe(`SingInPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <SingInPage
            isAuthorizationRequired={true}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
