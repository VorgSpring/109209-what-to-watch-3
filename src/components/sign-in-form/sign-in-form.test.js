import React from 'react';
import {SingInForm} from './sign-in-form.jsx';
import renderer from 'react-test-renderer';

describe(`SingInForm`, () => {
  const data = {
    email: `blah`,
    password: `blah`
  };
  const errors = {
    email: null,
    password: null
  };
  const responseError = null;
  const isLoading = false;
  const authorization = () => {};
  const onChange = () => {};
  const validate = () => {};

  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <SingInForm
          data={data}
          errors={errors}
          responseError={responseError}
          isLoading={isLoading}
          authorization={authorization}
          onChange={onChange}
          validate={validate}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with errors`, () => {
    const notEmptyErrors = {
      email: `blah`,
      password: `blah`
    };

    const tree = renderer.create(
        <SingInForm
          data={data}
          errors={notEmptyErrors}
          responseError={responseError}
          isLoading={isLoading}
          authorization={authorization}
          onChange={onChange}
          validate={validate}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
