import React from 'react';
import {ReviewForm} from './review-form.jsx';
import renderer from 'react-test-renderer';

describe(`ReviewForm`, () => {
  const data = {
    rating: `3`,
    comment: `blah`
  };
  const isSending = false;
  const sendReview = () => {};
  const onChange = () => {};
  const validate = () => {};

  it(`should renders correctly`, () => {
    const errors = {
      rating: null,
      comment: null
    };
    const responseError = null;

    const tree = renderer.create(
        <ReviewForm
          data={data}
          errors={errors}
          responseError={responseError}
          isSending={isSending}
          sendReview={sendReview}
          onChange={onChange}
          validate={validate}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with errors`, () => {
    const notEmptyErrors = {
      rating: `blah`,
      comment: `blah`
    };
    const notEmptyResponseError = `blah-blah`;

    const tree = renderer.create(
        <ReviewForm
          data={data}
          errors={notEmptyErrors}
          responseError={notEmptyResponseError}
          isSending={isSending}
          sendReview={sendReview}
          onChange={onChange}
          validate={validate}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
