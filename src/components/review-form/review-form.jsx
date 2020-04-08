import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withForm} from '../../hoc/with-form/with-form';
import {FormFields} from '../../constants/form-fields';
import {sendReviewData} from '../../operations/review/review';
import {
  getSendingStatusSelector,
  getErrorMessageSelector
} from '../../selectors/review/review';
import {RATING_STARS_COUNT} from '../../constants/rating';
import {createEmptyArray} from '../../helpers/create-empty-array/create-empty-array';

export class ReviewFormComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      data,
      validate,
      sendReview
    } = this.props;

    const isValid = validate();

    if (isValid) {
      sendReview(data);
    }
  }

  render() {
    const {onChange, data, errors, responseError, isSending} = this.props;
    const {rating, comment} = data;
    const {rating: ratingError, comment: commentError} = errors;

    return (
      <div className='add-review'>
        <div className='.sign-in__error-message'>
          {ratingError && <p>{ratingError}</p>}
          {commentError && <p>{commentError}</p>}
          {responseError && <p>{responseError}</p>}
        </div>
        <form
          action='#'
          className='add-review__form'
          onChange={onChange}
          onSubmit={this.handleSubmit}
        >
          <div className='rating'>
            <div className='rating__stars'>

              {createEmptyArray(RATING_STARS_COUNT).map((_, i) => {
                const value = `${i + 1}`;
                const id = `star-${value}`;

                return (
                  <Fragment key={id}>
                    <input
                      className='rating__input'
                      id={id}
                      type='radio'
                      name='rating'
                      value={value}
                      defaultChecked={rating === value}
                      disabled={isSending}
                    />
                    <label
                      className='rating__label'
                      htmlFor={id}
                    >
                      Rating {value}
                    </label>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className='add-review__text'>
            <textarea
              className='add-review__textarea'
              name='comment' id='review-text'
              placeholder='Review text'
              defaultValue={comment}
            />
            <div className='add-review__submit'>
              <button
                className='add-review__btn'
                type='submit'
                disabled={isSending}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReviewFormComponent.propTypes = {
  data: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    rating: PropTypes.string,
    comment: PropTypes.string
  }).isRequired,
  responseError: PropTypes.string,
  isSending: PropTypes.bool.isRequired,
  sendReview: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

const initialFields = [FormFields.COMMENT, FormFields.RATING];
export const ReviewFormWrapper = withForm(ReviewFormComponent, initialFields);

const mapStateToProps = (state) => ({
  responseError: getErrorMessageSelector(state),
  isSending: getSendingStatusSelector(state)
});

const mapDispatchToProps = (dispatch, {filmId}) => ({
  sendReview: (data) => dispatch(
      sendReviewData(filmId, data)
  )
});

export const ReviewForm = connect(
    mapStateToProps, mapDispatchToProps
)(ReviewFormWrapper);
