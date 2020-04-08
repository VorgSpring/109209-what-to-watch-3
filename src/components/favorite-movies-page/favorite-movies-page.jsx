import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Header} from '../header/header.jsx';
import {Footer} from '../footer/footer.jsx';
import {FavoriteMovieList} from '../favorite-movies-list/favorite-movies-list.jsx';
import {
  getFavoriteLoadedStatusSelector
} from '../../selectors/favorites/favorites';
import {loadFavoriteList} from '../../operations/favorites/favorites';

export class FavoriteMoviesPageComponent extends PureComponent {
  componentDidMount() {
    const {
      isLoaded,
      onLoadFavoriteFilms
    } = this.props;

    if (!isLoaded) {
      onLoadFavoriteFilms();
    }
  }

  render() {
    const {isLoaded} = this.props;

    return (
      <div className='user-page'>
        <Header
          title='My list'
          showUserBlok
          userType
        />

        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          {isLoaded && <FavoriteMovieList />}
        </section>

        <Footer />
      </div>
    );
  }
}

FavoriteMoviesPageComponent.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  onLoadFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoaded: getFavoriteLoadedStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteFilms: () => dispatch(loadFavoriteList())
});

export const FavoriteMoviesPage = connect(
    mapStateToProps, mapDispatchToProps
)(FavoriteMoviesPageComponent);


