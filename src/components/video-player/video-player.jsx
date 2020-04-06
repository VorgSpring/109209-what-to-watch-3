import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {PlayerAction} from '../../constants/player';

export const VideoComponent = ({poster, source, isMuted, autoPlay, forwardedRef}) => (
  <video
    className='player__video'
    poster={poster}
    muted={isMuted}
    controls={false}
    autoPlay={autoPlay}
    ref={forwardedRef} >
    {Array.isArray(source) ?
      source.map(({src, type}) => (
        <source src={src} type={type} key={src} />
      )) :
      <source src={source} />}
    Your browser doesn&apos;t support HTML5 video tag.
  </video>
);

VideoComponent.defaultProps = {
  isMuted: false,
  autoPlay: false
};

VideoComponent.propTypes = {
  forwardedRef: PropTypes.object.isRequired,
  source: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.oneOf([`video/webm`, `video/mp4`]).isRequired
    })).isRequired,
    PropTypes.string.isRequired
  ]),
  poster: PropTypes.string.isRequired,
  action: PropTypes.oneOf(Object.values(PlayerAction)),
  isMuted: PropTypes.bool,
  autoPlay: PropTypes.bool
};

const WrappedVideoComponent = (props, ref) => (
  <VideoComponent {...props} forwardedRef={ref} />
);

export const VideoPlayer = forwardRef(WrappedVideoComponent);
