import React from 'react';
import {SingInFormComponent} from './sign-in-form.jsx';
import renderer from 'react-test-renderer';

describe(`SingInForm`, () => {
  const data = {
    email: `blah`,
    password: `blah`
  };
  const isLoading = false;
  const authorization = () => {};
  const onChange = () => {};
  const validate = () => {};

  it(`should renders correctly`, () => {
    const errors = {
      email: null,
      password: null
    };
    const responseError = null;

    const tree = renderer.create(
        <SingInFormComponent
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
    const notEmptyResponseError = `blah-blah`;

    const tree = renderer.create(
        <SingInFormComponent
          data={data}
          errors={notEmptyErrors}
          responseError={notEmptyResponseError}
          isLoading={isLoading}
          authorization={authorization}
          onChange={onChange}
          validate={validate}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
