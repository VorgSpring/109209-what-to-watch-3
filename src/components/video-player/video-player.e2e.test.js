import React from 'react';
import {shallow} from 'enzyme';
import {VideoPlayer} from './video-player.jsx';
import {films} from '../../mocks/films';

describe(`VideoPlayer`, () => {
  let player = null;
  let fakePlay = null;
  let fakePause = null;
  const {name, poster, preview} = films[0];

  beforeEach(() => {
    player = shallow(<VideoPlayer
      name={name}
      poster={poster}
      source={preview}
      action={null}
    />);

    fakePlay = jest.fn();
    fakePause = jest.fn();

    player.instance().playerRef = {
      current: {
        play: fakePlay,
        pause: fakePause
      }
    };
  });

  afterEach(() => {
    player = null;
    fakePlay.mockClear();
    fakePause.mockClear();
  });

  it(`should video on play`, () => {
    jest.useFakeTimers();
    player.setProps({action: `play`});
    expect(fakePlay).toHaveBeenCalled();
  });

  it(`should video on pause`, () => {
    player.setProps({action: `pause`});
    expect(fakePause).toHaveBeenCalled();
  });

  it(`should correct duration on play`, () => {
    jest.useFakeTimers();
    const duration = 1000;
    player.setProps({action: `play`, duration});

    expect(fakePlay).not.toBeCalled();

    jest.runOnlyPendingTimers();

    expect(fakePlay).toBeCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), duration);
  });
});
