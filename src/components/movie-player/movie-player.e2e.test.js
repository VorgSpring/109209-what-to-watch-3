import React from 'react';
import {shallow} from 'enzyme';
import {MoviePLayer} from './movie-player.jsx';
import {films} from '../../mocks/films';
import {PlayerAction} from '../../constants/player-action';

describe(`MoviePLayer`, () => {
  let player = null;

  beforeEach(() => {
    player = shallow(<MoviePLayer
      film={films[0]}
    />);
  });

  afterEach(() => {
    player = null;
  });

  it(`should video on play`, () => {
    const spy = jest.spyOn(player.instance(), `handleClick`);

    const playButtom = player.find(`.player__play`);
    playButtom.simulate(`click`, {preventDefault() {}});

    expect(spy).toHaveBeenCalled();
    expect(player.state().playerAction).toBe(PlayerAction.PLAY);
  });

  it(`should video on pause`, () => {
    const spy = jest.spyOn(player.instance(), `handleClick`);
    player.setState({playerAction: PlayerAction.PLAY});

    const playButtom = player.find(`.player__play`);
    playButtom.simulate(`click`, {preventDefault() {}});

    expect(spy).toHaveBeenCalled();
    expect(player.state().playerAction).toBe(PlayerAction.PAUSE);
  });

  it(`should video set fullscreen mode`, () => {
    const spy = jest.spyOn(player.instance(), `handleSetFullscreen`);

    const playButtom = player.find(`.player__full-screen`);
    playButtom.simulate(`click`, {preventDefault() {}});

    expect(spy).toHaveBeenCalled();
    expect(player.state().playerAction).toBe(PlayerAction.FULLSCREEN);
  });

  it(`should video set currentTime`, () => {
    const spy = jest.spyOn(player.instance(), `handleSetTime`);

    const playButtom = player.find(`.player__toggler`);
    playButtom.simulate(`click`, {preventDefault() {}});

    expect(spy).toHaveBeenCalled();
    expect(player.state().playerAction).toBe(PlayerAction.SET_TIME);
  });

  it(`should video on exit`, () => {
    const spy = jest.spyOn(player.instance(), `handleExit`);

    const playButtom = player.find(`.player__exit`);
    playButtom.simulate(`click`, {preventDefault() {}});

    expect(spy).toHaveBeenCalled();
  });
});
