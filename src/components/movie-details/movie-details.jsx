import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const MovieDetails = ({film}) => {
  const {director, starring, runTime, genre, released} = film;

  return (
    <div className='movie-card__text movie-card__row'>
      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Director</strong>
          <span className='movie-card__details-value'>{director}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Starring</strong>
          <span className='movie-card__details-value'>
            {starring.map((star, i) => {
              const isNotLast = i !== (starring.length - 1);

              return (
                <Fragment key={star}>
                  {`${star}${isNotLast && `,`}`}
                  {isNotLast && <br/>}
                </Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Run Time</strong>
          <span className='movie-card__details-value'>{runTime}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Genre</strong>
          <span className='movie-card__details-value'>{genre}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Released</strong>
          <span className='movie-card__details-value'>{released}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  })
};
