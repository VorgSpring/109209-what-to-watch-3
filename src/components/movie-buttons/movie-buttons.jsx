import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {isAuthorizationSelector} from '../../selectors/authorization/authorization';
import {sendChangeFavoriteList} from '../../operations/favorites/favorites';
import {RoutePaths} from '../../constants/route-paths';
import {
  FavoriteStatus,
  IconFavoriteButton
} from '../../constants/favorite';
import {playMovie} from '../../actions/player/player';

export class MovieButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
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

  handlePlay() {
    const {filmId, onPlay} = this.props;

    onPlay(filmId);
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
    const {isFull} = this.props;

    return (
      <div className='movie-card__buttons'>
        <button
          className='btn btn--play movie-card__button'
          type='button'
          onClick={this.handlePlay}
        >
          <svg viewBox='0 0 19 19' width='19' height='19'>
            <use xlinkHref='#play-s' />
          </svg>
          <span>Play</span>
        </button>
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
        {isFull && <a href='add-review.html' className='btn movie-card__button'>Add review</a>}
      </div>
    );
  }
}

MovieButtons.defaultProps = {
  isFull: false
};

MovieButtons.propTypes = {
  isFull: PropTypes.bool,
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  onPlay: PropTypes.func.isRequired,
  onChangeFavoritesList: PropTypes.func.isRequired
};

const MovieButtonsWrapper = withRouter(MovieButtons);

const mapStateToProps = (state) => ({
  isAuthorizationRequired: isAuthorizationSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoritesList: (body) => dispatch(sendChangeFavoriteList(body)),
  onPlay: (filmId) => dispatch(playMovie(filmId))
});

export const MovieButtonsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MovieButtonsWrapper);
