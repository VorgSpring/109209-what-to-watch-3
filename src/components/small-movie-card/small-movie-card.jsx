import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player.jsx';
import {PLAY_PREVIEW_DURATION} from '../../constants/duration';
import {PlayerAction} from '../../constants/player-action';
import {LinkPaths} from '../../constants/route-paths';

export class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playerAction: null
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    const {onHoverCard} = this.props;
    const {name} = this.props.film;

    onHoverCard(name);

    this.setState({
      playerAction: PlayerAction.PLAY
    });
  }

  handleMouseLeave() {
    this.setState({
      playerAction: PlayerAction.LOAD
    });
  }

  render() {
    const {
      id,
      name,
      previewImage,
      preview
    } = this.props.film;
    const {playerAction} = this.state;

    return (
      <article
        className='small-movie-card catalog__movies-card'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div className='small-movie-card__image'>
          <VideoPlayer
            poster={previewImage}
            name={name}
            source={preview}
            duration={PLAY_PREVIEW_DURATION}
            action={playerAction}
          />
        </div>
        <h3 className='small-movie-card__title'>
          <Link
            className='small-movie-card__link'
            to={LinkPaths.getFilmLink(id)}
          >
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.defaultProps = {
  onHoverCard: () => {}
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
  }).isRequired,
  onHoverCard: PropTypes.func
};
