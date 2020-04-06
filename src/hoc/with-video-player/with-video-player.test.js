import React from 'react';
import {shallow} from 'enzyme';
import {withVideoPlayer} from './with-video-player';
import {PlayerAction} from '../../constants/player';

describe(`withVideoPlayer`, () => {
  let component = null;
  const MockComponent = () => <div />;
  const MockComponentWrapped = withVideoPlayer(MockComponent);

  beforeEach(() => {
    component = shallow(<MockComponentWrapped />, {disableLifecycleMethods: true});
    component.instance().player = {
      current: {
        duration: 0,
        currentTime: 0,
        play() {},
        pause() {},
        load() {},
      }
    };
  });

  afterEach(() => {
    component = null;
  });

  it(`should init player`, () => {
    expect(component.state()).toEqual({
      status: null,
      currentTime: 0,
      duration: 0,
      progress: 0
    });
  });

  it(`should handle play`, () => {
    component.instance().handlePlay();
    expect(component.state().status).toBe(PlayerAction.PLAY);
  });

  it(`should handle pause`, () => {
    component.instance().handlePause();
    expect(component.state().status).toBe(PlayerAction.PAUSE);
  });

  it(`should handle can play through`, () => {
    component.instance().player.current.duration = 10;

    component.instance().handleCanPlayThrough();
    expect(component.state().duration).toBe(10);
  });

  it(`should handle time update`, () => {
    component.instance().player.current.currentTime = 10;
    component.instance().player.current.duration = 100;

    component.instance().handleTimeUpdate();
    expect(component.state().currentTime).toBe(10);
    expect(component.state().progress).toBe(10);
  });

  it(`should play video without duration`, () => {
    const fakePlay = jest.fn();
    component.instance().player.current.play = fakePlay;

    component.instance().playVideo();
    expect(fakePlay).toHaveBeenCalled();
  });

  it(`should play video with duration`, () => {
    jest.useFakeTimers();
    const fakePlay = jest.fn();
    const duration = 1000;
    component.instance().player.current.play = fakePlay;

    component.instance().playVideo(duration);
    expect(fakePlay).not.toBeCalled();

    jest.runOnlyPendingTimers();

    expect(fakePlay).toBeCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), duration);
  });

  it(`should pause video`, () => {
    const fakePause = jest.fn();
    component.instance().player.current.pause = fakePause;

    component.instance().pauseVideo();
    expect(fakePause).toHaveBeenCalled();
  });

  it(`should load video`, () => {
    const fakeLoad = jest.fn();
    component.instance().player.current.load = fakeLoad;

    component.instance().loadVideo();
    expect(fakeLoad).toHaveBeenCalled();
  });

  it(`should toggle video on play`, () => {
    const fakePlay = jest.fn();
    component.instance().player.current.play = fakePlay;

    component.setState({
      status: PlayerAction.PAUSE
    });

    component.instance().toggleVideo();
    expect(fakePlay).toHaveBeenCalled();
  });

  it(`should toggle video on play`, () => {
    const fakePause = jest.fn();
    component.instance().player.current.pause = fakePause;

    component.setState({
      status: PlayerAction.PLAY
    });

    component.instance().toggleVideo();
    expect(fakePause).toHaveBeenCalled();
  });

  it(`should set fullscreen mode`, () => {
    const fakeRequestFullscreen = jest.fn();
    component.instance().player.current.requestFullscreen = fakeRequestFullscreen;

    component.instance().setFullscreen();
    expect(fakeRequestFullscreen).toHaveBeenCalled();
  });
});
