import React from 'react';
import {shallow} from 'enzyme';
import {withForm} from './with-form';
import {FormFields} from '../../constants/form-fields';
import {FormFieldsErrors} from '../../constants/errors';

describe(`WithForm`, () => {
  const initialFields = [FormFields.EMAIL];
  const initialState = {
    data: {
      [FormFields.EMAIL]: ``
    },
    errors: {
      [FormFields.EMAIL]: null
    }
  };
  const MockComponent = () => <div />;
  const MockComponentWrapped = withForm(MockComponent, initialFields);
  let component = null;

  beforeEach(() => {
    component = shallow(<MockComponentWrapped />);
  });

  afterEach(() => {
    component = null;
  });

  it(`should initial state`, () => {
    expect(component.state()).toEqual(initialState);
  });

  it(`should handle validate valid value`, () => {
    component.setState({
      data: {
        [FormFields.EMAIL]: `blah@blah.blah`
      }
    });

    const isValid = component.instance().validate();
    expect(isValid).toBe(true);
  });

  it(`should handle validate not valid value`, () => {
    component.setState({
      data: {
        [FormFields.EMAIL]: `blah`
      }
    });

    const isValid = component.instance().validate();
    expect(isValid).toBe(false);
    expect(component.state()).toEqual({
      data: {
        [FormFields.EMAIL]: `blah`
      },
      errors: {
        [FormFields.EMAIL]: FormFieldsErrors[FormFields.EMAIL]
      }
    });
  });

  it(`should handle onChange with not valid name`, () => {
    const event = {
      target: {
        name: `blah`
      }
    };

    component.instance().handleChange(event);
    expect(component.state()).toEqual(initialState);
  });

  it(`should handle onChange with not valid name and reset error`, () => {
    const event = {
      target: {
        name: FormFields.EMAIL,
        value: `blah`
      }
    };

    component.setState({
      errors: {
        [FormFields.EMAIL]: `blah`
      }
    });

    component.instance().handleChange(event);
    expect(component.state()).toEqual({
      data: {
        [FormFields.EMAIL]: `blah`
      },
      errors: {
        [FormFields.EMAIL]: null
      }
    });
  });
});
