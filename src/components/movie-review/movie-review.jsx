import React from 'react';
import PropTypes from 'prop-types';
import {preparedDateData} from '../../helpers/prepared-date-data/prepared-date-data';

export const MovieReview = ({
  user, rating, comment, date
}) => (
  <div className='review'>
    <blockquote className='review__quote'>
      <p className='review__text'>{comment}</p>

      <footer className='review__details'>
        <cite className='review__author'>{user.name}</cite>
        <time className='review__date' dateTime={date}>
          {preparedDateData(date)}
        </time>
      </footer>
    </blockquote>

    <div className='review__rating'>{rating}</div>
  </div>
);

MovieReview.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
