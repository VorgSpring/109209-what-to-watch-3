import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player.jsx';
import {getFilmPathLink} from '../../helpers/get-links/get-links';
import {withVideoPlayer} from '../../hoc/with-video-player/with-video-player';

export const SmallMovieCardComponent = ({
  loadVideo,
  playVideo,
  film,
  refNode
}) => {
  const {
    id,
    name,
    previewImage,
    preview,
  } = film;

  return (
    <article
      className='small-movie-card catalog__movies-card'
      onMouseEnter={playVideo}
      onMouseLeave={loadVideo}>
      <div className='small-movie-card__image'>
        <VideoPlayer
          ref={refNode}
          poster={previewImage}
          name={name}
          source={preview}
          isMuted
        />
      </div>
      <h3 className='small-movie-card__title'>
        <Link
          className='small-movie-card__link'
          to={getFilmPathLink(id)}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCardComponent.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
  }).isRequired,
  loadVideo: PropTypes.func.isRequired,
  playVideo: PropTypes.func.isRequired,
  refNode: PropTypes.object.isRequired
};

export const SmallMovieCard = withVideoPlayer(SmallMovieCardComponent);
