import React, {PureComponent} from 'react';
import {FormFieldsErrors} from '../../constants/errors';
import {checkFormFields} from '../../helpers/check-form-fields/check-form-fields';

export const withForm = (Component, initialFields = []) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        data: initialFields.reduce((acc, field) =>(
          Object.assign(
              {}, acc, {
                [field]: ``
              }
          )
        ), {}),
        errors: initialFields.reduce((acc, field) =>(
          Object.assign(
              {}, acc, {
                [field]: null
              }
          )
        ), {})
      };

      this.handleChange = this.handleChange.bind(this);
      this.validate = this.validate.bind(this);
    }

    validate() {
      const {data} = this.state;
      const fields = Object.keys(data);
      let isValid = true;

      fields.forEach((field) => {
        if (!checkFormFields[field](data[field])) {
          isValid = false;
          this.setState((state) => (
            Object.assign(
                {}, state, {
                  errors: Object.assign(
                      {}, state.errors, {
                        [field]: FormFieldsErrors[field]
                      }
                  )
                }
            )
          ));
        }
      });

      return isValid;
    }

    handleChange(event) {
      const {name, value} = event.target;
      const {data} = this.state;

      if (data[name] === undefined) {
        return;
      }

      this.setState((state) => (
        Object.assign(
            {}, state, {
              data: Object.assign(
                  {}, state.data, {
                    [name]: value
                  }
              ),
              errors: Object.assign(
                  {}, state.errors, {
                    [name]: null
                  }
              )
            }
        )
      ));
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onChange={this.handleChange}
          validate={this.validate}
        />
      );
    }
  }

  WithForm.propTypes = {};

  return WithForm;
};
