import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {VideoPlayer} from '../video-player/video-player.jsx';
import {PlayerButton} from '../../constants/player';
import {prepareTimeDataFromSeconds} from '../../helpers/prepared-time-data/prepared-time-data';
import {withVideoPlayer} from '../../hoc/with-video-player/with-video-player';
import {getFilmByIdSelector} from '../../selectors/films/films';

export class MoviePlayerComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClosePlayer = this.handleClosePlayer.bind(this);
  }

  handleClosePlayer() {
    this.props.history.goBack();
  }

  render() {
    const {
      film,
      progress,
      currentTime,
      status,
      toggleVideo,
      setFullscreen,
      refNode
    } = this.props;

    const {
      name,
      previewImage,
      preview
    } = film;

    return (
      <div className='player'>
        <VideoPlayer
          ref={refNode}
          poster={previewImage}
          name={name}
          source={preview}
          autoPlay
        />

        <button
          type='button'
          className='player__exit'
          onClick={this.handleClosePlayer}
        >
          Exit
        </button>

        {status && <div className='player__controls'>
          <div className='player__controls-row'>
            <div className='player__time'>
              <progress
                className='player__progress'
                value={progress}
                max='100' />
              <div
                className='player__toggler'
                style={{
                  left: `${progress}%`
                }}
              >
                Toggler
              </div>
            </div>
            <div className='player__time-value'>
              {prepareTimeDataFromSeconds(currentTime)}
            </div>
          </div>

          <div className='player__controls-row'>
            <button
              type='button'
              className='player__play'
              onClick={toggleVideo}
            >
              <svg viewBox='0 0 19 19' width='19' height='19'>
                <use xlinkHref={PlayerButton[status].ICON} />
              </svg>
              <span>{PlayerButton[status].TEXT}</span>
            </button>
            <div className='player__name'>{name}</div>

            <button
              type='button'
              className='player__full-screen'
              onClick={setFullscreen}>
              <svg viewBox='0 0 27 27' width='27' height='27'>
                <use xlinkHref='#full-screen' />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>}
      </div>
    );
  }
}

MoviePlayerComponent.defaultProps = {
  status: null
};

MoviePlayerComponent.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
  }).isRequired,
  status: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
  refNode: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  toggleVideo: PropTypes.func.isRequired,
  setFullscreen: PropTypes.func.isRequired
};

const MoviePlayerContainer = withVideoPlayer(MoviePlayerComponent);

const mapStateToProps = (state, ownProps) => ({
  film: getFilmByIdSelector(state, ownProps)
});

export const MoviePlayer = connect(
    mapStateToProps
)(MoviePlayerContainer);

