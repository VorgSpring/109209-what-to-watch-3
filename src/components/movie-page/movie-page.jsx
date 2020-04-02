import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {MovieCard} from '../movie-card/movie-card.jsx';
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

          <div className='catalog__movies-list'>
            <article className='small-movie-card catalog__movies-card'>
              <div className='small-movie-card__image'>
                <img src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg' alt='Fantastic Beasts: The Crimes of Grindelwald' width='280' height='175' />
              </div>
              <h3 className='small-movie-card__title'>
                <a className='small-movie-card__link' href='movie-page.html'>Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className='small-movie-card catalog__movies-card'>
              <div className='small-movie-card__image'>
                <img src='img/bohemian-rhapsody.jpg' alt='Bohemian Rhapsody' width='280' height='175' />
              </div>
              <h3 className='small-movie-card__title'>
                <a className='small-movie-card__link' href='movie-page.html'>Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className='small-movie-card catalog__movies-card'>
              <div className='small-movie-card__image'>
                <img src='img/macbeth.jpg' alt='Macbeth' width='280' height='175' />
              </div>
              <h3 className='small-movie-card__title'>
                <a className='small-movie-card__link' href='movie-page.html'>Macbeth</a>
              </h3>
            </article>

            <article className='small-movie-card catalog__movies-card'>
              <div className='small-movie-card__image'>
                <img src='img/aviator.jpg' alt='Aviator' width='280' height='175' />
              </div>
              <h3 className='small-movie-card__title'>
                <a className='small-movie-card__link' href='movie-page.html'>Aviator</a>
              </h3>
            </article>
          </div>
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
