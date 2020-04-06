import React, {PureComponent, createRef} from 'react';
import {PlayerAction} from '../../constants/player';

export const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.player = createRef();
      this.timer = null;

      this.state = {
        status: null,
        currentTime: 0,
        duration: 0,
        progress: 0
      };

      this.handlePlay = this.handlePlay.bind(this);
      this.handlePause = this.handlePause.bind(this);
      this.handleCanPlayThrough = this.handleCanPlayThrough.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

      this.playVideo = this.playVideo.bind(this);
      this.pauseVideo = this.pauseVideo.bind(this);
      this.loadVideo = this.loadVideo.bind(this);
      this.setFullscreen = this.setFullscreen.bind(this);
      this.toggleVideo = this.toggleVideo.bind(this);
    }

    componentDidMount() {
      this.player.current.addEventListener(
          `play`, this.handlePlay
      );

      this.player.current.addEventListener(
          `pause`, this.handlePause
      );

      this.player.current.addEventListener(
          `timeupdate`, this.handleTimeUpdate
      );

      this.player.current.addEventListener(
          `canplaythrough`, this.handleCanPlayThrough
      );
    }

    componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.player.current.removeEventListener(
          `play`, this.handlePlay
      );

      this.player.current.removeEventListener(
          `pause`, this.handlePause
      );

      this.player.current.removeEventListener(
          `timeupdate`, this.handleTimeUpdate
      );

      this.player.current.removeEventListener(
          `canplaythrough`, this.handleCanPlayThrough
      );

      this.player = null;
    }

    handlePlay() {
      this.setState({
        status: PlayerAction.PLAY
      });
    }

    handlePause() {
      this.setState({
        status: PlayerAction.PAUSE
      });
    }

    handleCanPlayThrough() {
      this.setState({
        duration: this.player.current.duration
      });
    }

    handleTimeUpdate() {
      const {currentTime, duration} = this.player.current;

      this.setState({
        progress: currentTime / duration * 100,
        currentTime
      });
    }

    playVideo(duration) {
      if (duration) {
        this.timer = setTimeout(() => {
          this.player.current.play();
        }, duration);
      } else {
        this.player.current.play();
      }
    }

    pauseVideo() {
      this.player.current.pause();
    }

    loadVideo() {
      this.player.current.load();
    }

    toggleVideo() {
      const {status} = this.state;

      if (status === PlayerAction.PLAY) {
        this.player.current.pause();
      } else {
        this.player.current.play();
      }
    }

    setFullscreen() {
      if (this.player.current.requestFullscreen) {
        this.player.current.requestFullscreen();
      } else if (this.player.current.mozRequestFullScreen) {
        this.player.current.mozRequestFullScreen();
      } else if (this.player.current.webkitRequestFullscreen) {
        this.player.current.webkitRequestFullscreen();
      } else if (this.player.current.msRequestFullscreen) {
        this.player.current.msRequestFullscreen();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}

          refNode={this.player}
          playVideo={this.playVideo}
          pauseVideo={this.pauseVideo}
          loadVideo={this.loadVideo}
          setFullscreen={this.setFullscreen}
          toggleVideo={this.toggleVideo}
        />
      );
    }

  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};
