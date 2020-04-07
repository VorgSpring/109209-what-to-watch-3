import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {MoviesListContainer} from '../movies-list/movies-list.jsx';
import {Footer} from '../footer/footer.jsx';
import {getFilmByIdSelector} from '../../selectors/films/films';
import {loadFilms} from '../../operations/films/films';

export class MoviePage extends PureComponent {
  componentDidMount() {
    const {film, onLoadFilms} = this.props;

    if (!film) {
      onLoadFilms();
    }
  }

  render() {
    const {film} = this.props;

    if (!film) {
      return null;
    }

    // TODO брать id из url
    return (
      <Fragment>
        <MovieCard
          film={film}
        />

        <div className='page-content'>
          <section className='catalog catalog--like-this'>
            <h2 className='catalog__title'>More like this</h2>

            <MoviesListContainer
              genre={film.genre}
              max={4}
              excludeId={film.id}
            />
          </section>

          <Footer />
        </div>
      </Fragment>
    );
  }
}

MoviePage.defaultProps = {
  film: null
};

MoviePage.propTypes = {
  film: PropTypes.object,
  onLoadFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  film: getFilmByIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms())
});

export const MoviePageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviePage);
