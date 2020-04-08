import React from 'react';
import {shallow} from 'enzyme';
import {SingInFormComponent} from './sign-in-form.jsx';

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
  const handleChange = jest.fn();
  const validate = jest.fn();
  const authorization = jest.fn();
  let singInForm = null;

  beforeEach(() => {
    singInForm = shallow(
        <SingInFormComponent
          data={data}
          errors={errors}
          responseError={responseError}
          isLoading={isLoading}
          authorization={authorization}
          onChange={handleChange}
          validate={validate}
        />
    );
  });

  afterEach(() => {
    singInForm = null;
    validate.mockClear();
    authorization.mockClear();
    handleChange.mockClear();
  });

  it(`should submit when is valid form`, () => {
    validate.mockReturnValue(true);

    singInForm.setProps({
      validate
    });

    const form = singInForm.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(validate).toHaveBeenCalled();
    expect(authorization).toHaveBeenCalledWith(data);
  });

  it(`should not submit when is not valid form`, () => {
    validate.mockReturnValue(false);

    singInForm.setProps({
      validate
    });

    const form = singInForm.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(validate).toHaveBeenCalled();
    expect(authorization).not.toHaveBeenCalled();
  });

  it(`should call handle change`, () => {
    const form = singInForm.find(`form`);
    form.simulate(`change`, {preventDefault() {}});
    expect(handleChange).toHaveBeenCalled();
  });
});
