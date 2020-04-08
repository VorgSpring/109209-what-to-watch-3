import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {getAuthorizationStatusSelector} from '../../selectors/authorization/authorization';
import {sendChangeFavoriteList} from '../../operations/favorites/favorites';
import {RoutePaths} from '../../constants/route-paths';
import {getReviewPathLink} from '../../helpers/get-links/get-links';
import {
  FavoriteStatus,
  IconFavoriteButton
} from '../../constants/favorite';
import {getPlayerLink} from '../../helpers/get-links/get-links';

export class MovieButtonsComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeFavoriteMovie = this.handleChangeFavoriteMovie.bind(this);
  }

  get nextStatus() {
    return this.props.isFavorite
      ? FavoriteStatus.REMOTE
      : FavoriteStatus.ADD;
  }

  get iconFavoriteButton() {
    return this.props.isFavorite
      ? IconFavoriteButton.IN_LIST
      : IconFavoriteButton.ADD;
  }

  handleChangeFavoriteMovie() {
    const {
      filmId,
      onChangeFavoritesList,
      isAuthorizationRequired,
      history
    } = this.props;

    if (isAuthorizationRequired) {
      history.push(RoutePaths.SING_IN);
      return;
    }

    onChangeFavoritesList({
      id: filmId,
      status: this.nextStatus
    });
  }

  render() {
    const {
      filmId,
      isFull
    } = this.props;

    return (
      <div className='movie-card__buttons'>
        <Link
          to={getPlayerLink(filmId)}
          className='btn btn--play movie-card__button'
        >
          <svg viewBox='0 0 19 19' width='19' height='19'>
            <use xlinkHref='#play-s' />
          </svg>
          <span>Play</span>
        </Link>
        <button
          className='btn btn--list movie-card__button'
          type='button'
          onClick={this.handleChangeFavoriteMovie}
        >
          <svg viewBox='0 0 19 20' width='19' height='20'>
            <use xlinkHref={this.iconFavoriteButton} />
          </svg>
          <span>My list</span>
        </button>
        {isFull &&
          <Link to={getReviewPathLink(filmId)} className='btn movie-card__button'>
            Add review
          </Link>}
      </div>
    );
  }
}

MovieButtonsComponent.defaultProps = {
  isFull: false
};

MovieButtonsComponent.propTypes = {
  isFull: PropTypes.bool,
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  onChangeFavoritesList: PropTypes.func.isRequired
};

const MovieButtonsWrapper = withRouter(MovieButtonsComponent);

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoritesList: (body) => dispatch(sendChangeFavoriteList(body))
});

export const MovieButtons = connect(
    mapStateToProps, mapDispatchToProps
)(MovieButtonsWrapper);
