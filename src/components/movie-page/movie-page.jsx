import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {MoviesListContainer} from '../movies-list/movies-list.jsx';
import {Footer} from '../footer/footer.jsx';
import {makeFilmByIdSelector} from '../../selectors/films/films';
import {RoutePaths} from '../../constants/route-paths.js';

export const MoviePage = ({film}) => {
  if (!film) {
    return <Redirect to={RoutePaths.MAIN} />;
  }

  return (
    <Fragment>
      <MovieCard
        film={film}
      />

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <MoviesListContainer genre={film.genre} max={4} excludeId={film.id} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

MoviePage.defaultProps = {
  film: null
};

MoviePage.propTypes = {
  film: PropTypes.object
};

const makeMapStateToProps = () => {
  const getFilmByIdSelector = makeFilmByIdSelector();
  const mapStateToProps = (state, props) => ({
    film: getFilmByIdSelector(state, props)
  });
  return mapStateToProps;
};

export const MoviePageContainer = connect(
    makeMapStateToProps
)(MoviePage);
