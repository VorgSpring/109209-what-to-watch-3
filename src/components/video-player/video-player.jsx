import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlayerAction} from '../../constants/player-action';

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    const {action} = this.props;
    if (prevProps.action !== action) {
      clearTimeout(this.timer);
      this.performAction();
    }
  }

  componentDidMount() {
    this.performAction();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  performAction() {
    const {action} = this.props;

    switch (action) {
      case PlayerAction.PLAY:
        this.playVideo();
        break;
      case PlayerAction.PAUSE:
        this.pauseVideo();
        break;
      case PlayerAction.LOAD:
        this.loadVideo();
    }
  }

  playVideo() {
    const {duration} = this.props;

    if (duration) {
      this.timer = setTimeout(() => {
        this.playerRef.current.play();
      }, duration);
    } else {
      this.playerRef.current.play();
    }
  }

  pauseVideo() {
    this.playerRef.current.pause();
  }

  loadVideo() {
    this.playerRef.current.load();
  }

  render() {
    const {poster, source} = this.props;

    return (
      <video poster={poster} muted controls={false} ref={this.playerRef} width="280" height="175">
        {Array.isArray(source) ?
          source.map(({src, type}) => (
            <source src={src} type={type} key={src} />
          )) :
          <source src={source} />}
        Your browser doesn&apos;t support HTML5 video tag.
      </video>
    );
  }
}

VideoPlayer.defaultProps = {
  duration: false
};

VideoPlayer.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.oneOf([`video/webm`, `video/mp4`]).isRequired
    })).isRequired,
    PropTypes.string.isRequired
  ]),
  poster: PropTypes.string.isRequired,
  action: PropTypes.oneOf(Object.values(PlayerAction)),
  duration: PropTypes.number
};
