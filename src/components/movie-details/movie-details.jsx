import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  prepareTimeDataFromMinutes
} from '../../helpers/prepared-time-data/prepared-time-data';
import {
  getFilmByIdSelector
} from '../../selectors/films/films';
import {filmPropTypes} from '../../helpers/types';

export const MovieDetailsComponent = ({film}) => {
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
          <span className='movie-card__details-value'>
            {prepareTimeDataFromMinutes(runTime)}
          </span>
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

MovieDetailsComponent.propTypes = {
  film: PropTypes.shape(
      filmPropTypes
  ).isRequired
};

const mapStateToProps = (state, props) => ({
  film: getFilmByIdSelector(state, props)
});

export const MovieDetailsContainer = connect(
    mapStateToProps
)(MovieDetailsComponent);

export const MovieDetails = withRouter(
    MovieDetailsContainer
);
