import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withForm} from '../../hoc/with-form/with-form';
import {FormFields} from '../../constants/form-fields';
import {sendAuthorizationData} from '../../operations/authorization/authorization';
import {
  getErrorAuthorizationSelector,
  getLoadingStatusAuthorizationSelector
} from '../../selectors/authorization/authorization';

export class SingInFormComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      data,
      validate,
      authorization
    } = this.props;

    const isValid = validate();

    if (isValid) {
      authorization(data);
    }
  }

  render() {
    const {onChange, data, errors, responseError} = this.props;
    const {email, password} = data;
    const {email: emailError, password: passwordError} = errors;

    return (
      <form
        action='#'
        className='sign-in__form'
        onChange={onChange}
        onSubmit={this.handleSubmit}
      >
        <div className='sign-in__message'>
          {emailError && <p>{emailError}</p>}
          {passwordError && <p>{passwordError}</p>}
          {responseError && <p>{responseError}</p>}
        </div>
        <div className='sign-in__fields'>
          <div className={`sign-in__field ${emailError && `sign-in__field--error`}`}>
            <input
              className='sign-in__input'
              type={FormFields.EMAIL}
              placeholder='Email address'
              name={FormFields.EMAIL}
              id={FormFields.EMAIL}
              defaultValue={email}
            />
            <label
              className='sign-in__label visually-hidden'
              htmlFor={FormFields.EMAIL}
            >
              Email address
            </label>
          </div>
          <div className={`sign-in__field ${passwordError && `sign-in__field--error`}`}>
            <input
              className='sign-in__input'
              type={FormFields.PASSWORD}
              placeholder='Password'
              name={FormFields.PASSWORD}
              id={FormFields.PASSWORD}
              defaultValue={password}
            />
            <label
              className='sign-in__label visually-hidden'
              htmlFor={FormFields.PASSWORD}
            >
              Password
            </label>
          </div>
        </div>
        <div className='sign-in__submit'>
          <button
            className='sign-in__btn'
            type='submit'
          >
            Sign in
          </button>
        </div>
      </form>
    );
  }
}

SingInFormComponent.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  responseError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  authorization: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

const initialFields = [FormFields.EMAIL, FormFields.PASSWORD];
export const SingInFormWrapper = withForm(SingInFormComponent, initialFields);

const mapStateToProps = (state) => ({
  responseError: getErrorAuthorizationSelector(state),
  isLoading: getLoadingStatusAuthorizationSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  authorization: (data) => dispatch(sendAuthorizationData(data))
});

export const SingInForm = connect(
    mapStateToProps, mapDispatchToProps
)(SingInFormWrapper);
